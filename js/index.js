let askNumber = parseInt(prompt('Type your number: '));

/*document.write('i: ' + fibonacci(askNumber) + "\n");

function fibonacci(n) {
	if(n <= 1) {
		return n;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}
*/
let fibonacciArr = [1, 1];
document
for (let i = 2; i < askNumber; i++) {
	fibonacciArr[i] = fibonacciArr[i-1] + fibonacciArr[i-2];
}

for (let i = 0; i < askNumber; i++) {	
	document.write('<b>i<sub>' + (i + 1) + '</sub>:</b> ' + fibonacciArr[i] + "<br>");	
}