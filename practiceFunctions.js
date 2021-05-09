// function exercises

//exercise 1
/*Write a program that calculates the maximum of two given numbers. 
A = 5 b = 6 output: 6
*/

function maximum(a, b) {
    var max;
    if (a > b) {
        max = a
    } else {
        max = b
    }
    console.log(max);

}

// maximum(11, 22)


//exercise 2
/*Write a program that checks if a given number is odd.
A = 3 output: odd*/

function odd(a) {
    var odd = 'odd';
    if (a % 2 === 1) {
        console.log(odd);

    }
}
// odd(10)

//exercise3
/*Write a program that checks if a given number is a three digit long number*/

function threeDigit(num) {
    if (num >= 100) {
        console.log('given number is 3 digits long');

    }
}
// threeDigit(10)

//exercise4
/*Write a program that calculates an arithmetic mean of four numbers.*/

function average(num1, num2, num3, num4) {
    var avg = (num1 + num2 + num3 + num4) / 4
    console.log(avg);

}
// average(3, 4, 5, 6)

//exercise5
/*Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw:
*****
*    *
*    *
*    *
*****
*/

function square1(size) {
    var star = ''
    for (var i = 1; i <= size; i++) {
        for (var j = 1; j <= size; j++) {
            if (i === 1 || i === size || j === 1 || j === size) {
                star += '*';
            } else (star += ' ');
        } star += ' '
        star += '\n'
    } console.log(star);
}

// square1(5)

function starsInLine(num) {
    var line = ''
    var a = '*'
    for (var i = 0; i < num; i++) {
        line += a
    }
    return line
}

function sq(rows) {
    var str = '';
    for (var i = 0; i < rows - 1; i++) {
        str = str += starsInLine(rows) + '\n'
    }
    return str
}

var printSquare = sq;
// var printSquare2 = sq()
// console.log(printSquare(5));
// console.log(printSquare2);

//Exercise 6

/* Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * */


function drawLines(x, y, z) {
    var a = starsInLine(x) + '\n' + starsInLine(y) + '\n' + starsInLine(z) + '\n'
    return a
}

// console.log(drawLines(3, 5, 11));

//Exercise 7

//Write a program that calculates a number of digits of a given number. 

function calcDigitsNum(number) {
    str = ''
    str = (str + number).length
    return str

}
// console.log(calcDigitsNum(9999));

//Exercise 8

/*Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 */


var a = [2, 4, 7, 8, 8, 7, 7, 1];
var e = 8;


function calcApp(arr, num) {
    var numOfApp = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            numOfApp++
        }
    } return numOfApp
}

// console.log(calcApp(a, e));

// Exercise 9
/* Write a program that calculates the sum of odd elements of a given array. */

function sumOfOdd(array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            sum += array[i]
        }
    } return sum
}

// console.log(sumOfOdd(a));

// Exercise 10

/* Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.*/

function numOfAppLetter(string) {
    var a = 'a'
    var a1 = 'A'
    var c = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === a || string[i] === a1) {
            c++
        }
    } return c
}

// console.log(numOfAppLetter('AAAaaa'))

//Exercise 11
/*Write a program that concatenates a given string given number of times. For example, 
if “abc” and 4 are given values, the program prints out abcabcabcabc. */

function concat(str1, num_of_times) {
    var str2 = ''
    for (var i = 0; i < num_of_times; i++) {
        str2 += str1
    } return str2
}

// console.log(concat('zoran ', 4));

//Page 2
//Exercise 1
/*Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false
*/

var input = 4;

function checkInput(inp) {
    if (typeof inp === 'string') {
        return inp
    } else {
        return 'Not a string'
    }
}

// console.log(checkInput(input));


//Exercise 2
/*Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false
*/

