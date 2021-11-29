const number = +prompt('Please enter a number');
const degree = +prompt('Please enter the degree to which you want to enter the number');

function exponentiation (number, degree = 1){

    if ((number == 0 || degree == 0) ||
    (isNaN(number) || isNaN(degree))){
        return 'some error';
    } else {
        return Math.pow(number, degree);
    }
}

let degreeOfNumber = exponentiation (number, degree);
alert(degreeOfNumber);