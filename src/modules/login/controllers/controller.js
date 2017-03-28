LoginController.$inject = ['$scope', 'LoginService'];

export default function LoginController($scope, LoginService) {

    LoginService.test();
}