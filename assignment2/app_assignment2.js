(function () {
'use strict';

var myApp = angular.module('ShoppingListCheckOff',[]);
//Declare the controllers
myApp.controller('ToBuyController', ToBuyControllerFunction);
myApp.controller('AlreadyBoughtController', AlreadyBoughtControllerFunction);
myApp.service('ShoppingListCheckOffService', ShoppingListCheckOffServiceFunction);

// To Buy Controller
ToBuyControllerFunction.$inject= ['ShoppingListCheckOffService'];
function ToBuyControllerFunction(ShoppingListCheckOffService){
    var ctrl1 = this;

    // Get "To Buy" items
    ctrl1.toBuyItems = ShoppingListCheckOffService.getToBuyItems();


    // Remove an item from the "To Buy" list
    ctrl1.buyItem = function(itemIndex){
        ShoppingListCheckOffService.buyItem(itemIndex);
    };

}


// Already Bought Controller
AlreadyBoughtControllerFunction.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtControllerFunction(ShoppingListCheckOffService){
    var ctrl2 = this;

    // Get the "Bought" items
    ctrl2.boughtItems= ShoppingListCheckOffService.getBoughtItems();

}


function ShoppingListCheckOffServiceFunction(){
    var service = this;

    var prePopulatedItems = [
        {name : "Bananas",  quantity : "6"},
        {name : "Cookies",  quantity : "2 packets"},
        {name : "Toilet paper",  quantity : "6 rolls"},
        {name : "Cereals",  quantity : "2 packets"},
        {name : "Milks",  quantity : "4"}
    ];

    // List of toBuy items
    var itemsToBuy = prePopulatedItems;
    // List of Bought items
    var itemsBought = [];


   service.getToBuyItems = function () {
    return itemsToBuy;
  };

   service.getBoughtItems = function () {
    return itemsBought;
  };

   service.buyItem = function (itemIndex) {
    itemsBought.push( { name : itemsToBuy[itemIndex].name ,
                         quantity : itemsToBuy[itemIndex].quantity
                      });   
    itemsToBuy.splice(itemIndex, 1);
  };


}



})();