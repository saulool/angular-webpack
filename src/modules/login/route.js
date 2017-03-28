export default function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, ITEM_MENU) {

    $urlMatcherFactoryProvider.strictMode(false);

    $stateProvider
    .state('cesta', {
        abstract: true,
        cache: false,
        url: "/cesta",
        templateUrl: "/client/src/module/commons/views/master_page.html",
    })
    .state('cesta.new', {
        url: '',
        controller:'CestaController',
        controllerAs:'cestaCtrl',
        templateUrl: '/client/src/module/cesta/views/new.html',
        authenticate: false,
        itemMenu: ITEM_MENU.CESTA
    });
  });