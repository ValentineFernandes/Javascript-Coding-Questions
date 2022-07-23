//code
function foo() {
	var b = 1;
	function inner() {
		return b;
	}
	return inner;
}
var get_func_inner = foo();		

console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner());
