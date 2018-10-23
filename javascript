//Hi, this is my JS calculator, it's pretty simple. Enjoy!

function calculate() {
//Getting the numbers and operators
	var answer = document.querySelector('#answer');
	var num1 = Number(document.querySelector('#num1').value);
	var num2 = Number(document.querySelector('#num2').value);
	var select = document.querySelector('select').value;

//Actually doing the math
	if(select == "add"){
		answer.innerHTML = num1 + num2
	} else if(select == "minus") {
		answer.innerHTML = num1 - num2
	} else if(select == "divide") {
		answer.innerHTML = num1 / num2
	} else if (select == "multiply") {
		answer.innerHTML = num1 * num2
	} else {
		answer.innerHTML = "Invalid operator"
	};
}

