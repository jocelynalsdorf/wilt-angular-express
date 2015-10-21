angular.module('wiltApp', ['wiltRoutes', 'ngAnimate'])

.controller('mainController', function(){
  var vm = this;
  vm.testMessage = "test main";
})

.controller('homeController', function(){
  var vm = this;
  vm.testMessage ="home test";
})

.controller('jsController', function(){
  var vm = this;
  vm.testMessage = "test jsController";
})

.controller('htmlcssController', function(){
  var vm = this;
  vm.testMessage = "test htmlcss ctrl";
})

.controller('generalController', function(){
  var vm = this;
  vm.testMessage = "test generalController";
})

.controller('wtfController', function(){
  var vm = this;
  vm.testMessage = 'test wtf';
});