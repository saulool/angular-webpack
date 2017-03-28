import LoginController from '/src/modules/login/controllers/controller';
import LoginController2 from '/src/modules/login/controllers/controller2';
import LoginService from '/src/modules/login/services/service';
import Constants from '/src/modules/login/constants';

const Login = angular.module('app.login', []).
			controller('LoginController', LoginController).
			controller('LoginController2', LoginController2).
			service('LoginService', LoginService).
			constant('TIPOS_BUSCA', Constants);

export default Login.name;