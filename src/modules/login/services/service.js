LoginService.$inject = ['$location', 'TIPOS_BUSCA'];

export default function LoginService($location, TIPOS_BUSCA) {
	var vm = this;

    vm.test = function() {
        console.log(TIPOS_BUSCA.DESCRICAO);
    };
}