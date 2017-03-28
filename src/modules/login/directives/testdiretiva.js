export default function testeDiretiva(){
	return{
	  scope: {
	  	texto: '@ngTexto'
	  },
	  strict: 'E',
	  template: '<div>aaa - {{texto}}</div>'
	};
}