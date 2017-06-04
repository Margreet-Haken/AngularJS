(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController )
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
      var buy   = this;

      buy.list = ShoppingListCheckOffService.getBuyList();


      buy.moveToBoughtList = function(line){
        ShoppingListCheckOffService.moveToBoughtList(line);
      };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
      var bought   = this;

      bought.list = ShoppingListCheckOffService.getBoughtList();

  }

  function ShoppingListCheckOffService() {
    var service = this;

     var buyList      = [
        {item : 'cookies',
        amount: 10},
        {item : 'cheese',
        amount: 6},
        {item : 'yoghurt',
        amount: 1},
        {item : 'bananas',
        amount: 5},
        {item : 'peanutbutter',
        amount: 4},
        {item : 'milk',
        amount: 10},
        ];

    var boughtList = [];

    service.getBuyList = function () {
          return buyList;
        };

    service.getBoughtList = function () {
            return boughtList;
        };

    service.moveToBoughtList = function (line) {
          var index = buyList.indexOf(line);
          buyList.splice(index, 1);
          boughtList.push(line);
      };

    };

})();
