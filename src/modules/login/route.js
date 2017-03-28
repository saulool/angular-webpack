route.$inject = ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider'];

export default function route($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    $urlMatcherFactoryProvider.strictMode(false);

    $stateProvider.state('login', {
        abstract: false,
        cache: false,
        url: "/login",
        controller: 'LoginController',
        controllerAs: 'loginCtrl',
        template: require("./views/teste.html")
    });
}