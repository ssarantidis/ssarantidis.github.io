(function () {
'use strict';

var comma = ',';

var lunchCheckApp = angular.module('LunchCheck',[]);
lunchCheckApp.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
    
    $scope.formContent="";
    $scope.message="";
    $scope.myColor = {
        "color" : "green"
    };
    

    $scope.checkItems = function(){
        var arrayString = [];
        var numOfItems = 0;
        $scope.hasEntries = false;

        console.log("This is the formContent:"+  $scope.formContent);
        // Split the content of the checkbox using comma as a delimiter and put it into the arrayString object
       $scope.formContent = splitString($scope.formContent, comma);
        console.log('The Array after splitting:'+ $scope.formContent);

        //Remove the empty items
        removeEmptyEntries($scope.formContent);
        console.log('This is the result after removing the entries: '+ $scope.formContent);
        //Check the number of items in the form's content and set accordingly the output message and colors
        setColorAndMessage($scope.formContent.length);

    };

    /*

        Utility functions

    */

    // Transform a string into an array using ',' as a delimiter
    function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);

    return arrayOfStrings;
    };

    // Function to remove the empty entries
    function removeEmptyEntries(array){
        console.log('This is the array before removing the spaces:'+ array);
        for(var i=0;i<array.length;i++){
            if(array[i].trim()===""){
                array.splice(i,1);
                i--;
            };
        };
    };

    // Format the output message and colors
    function setColorAndMessage(numOfEntries){
        
            if(numOfEntries === 0 ){
                $scope.message = "Please enter data first";
                $scope.myColor = { 'color' :  'red'};
            }else if (numOfEntries <= 3 ){
                $scope.message = "Enjoy!";
                $scope.myColor = {'color': 'green'};
                $scope.hasEntries = true;
            }else{
                $scope.message = "Too much!";
                 $scope.hasEntries = true;
            };
    };
        
}

})();