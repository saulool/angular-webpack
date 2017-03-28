import LoginController from '/src/modules/login/controllers/controller';
import LoginController2 from '/src/modules/login/controllers/controller2';
import LoginService from '/src/modules/login/services/service';
import Constants from '/src/modules/login/constants';
import route from '/src/modules/login/route';
import testeDiretiva from '/src/modules/login/directives/testdiretiva';

const Login = angular.module('app.login', ['ui.router']).
			controller('LoginController', LoginController).
			controller('LoginController2', LoginController2).
			service('LoginService', LoginService).
			constant('TIPOS_BUSCA', Constants).
			directive('testeDiretiva', testeDiretiva).
			config(route);

export default Login.name;