1. What will happen at line 12 and why? If the code causes an error, 
explain why. 
3 will be output to the console. 

2. What will happen at line 13 and why? If the code causes an error, 
explain why.    
150 will be output to the console.

3. What will happen at line 14 and why? If the code causes an error, 
explain why.
150 will be output to the console.

4. What will this function return? Give a brief explanation why. 
If the code causes an error, explain why. 
Nothing will be output to thte console.
This function will return
50
100
150
running through the code: 
i = 0
discountedPrice = 100 * (1 - .5) //discountedPrice = 50
finalPrice = Math.round(50 * 100) / 100; //finalPrice = 50
discounted.push(finalPrice); //discounted[0] = 50;
i = 1
discountedPrice = 200 * (1 - .5) //discounted_price = 100;
finalPrice = Math.round(100 * 100) / 100; //finalPrice = 100;
discounted.push(finalPrice); //discounted[1] = 100;
i = 2
discountedPrice = 300 * (1 - .5) //discounted_price = 150;
finalPrice = Math.round(150 * 100) / 100; //finalPrice = 150;
discounted.push(finalPrice); //discounted[2] = 150;

return discounted; //discounted = {50, 100, 150};


5. What will happen at line 12 and why?  If the code causes an error, 
explain why. (assume this function is being called like the others: 
discountPrices([100, 200, 300], 0.5)). 

C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4\expose\javascript\part2-qu
estion5.js:12
        console.log(i);
                    ^

ReferenceError: i is not defined
    at discountPrices (C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4\exp
ose\javascript\part2-question5.js:12:14)
    at Object.<anonymous> (C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4
\expose\javascript\part2-question5.js:19:1)
←[90m    at Module._compile (internal/modules/cjs/loader.js:1085:14)←[39m
←[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:1
0)←[39m
←[90m    at Module.load (internal/modules/cjs/loader.js:950:32)←[39m
←[90m    at Function.Module._load (internal/modules/cjs/loader.js:790:12)←[39m
←[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_ma
in.js:76:12)←[39m
←[90m    at internal/main/run_main_module.js:17:47←[39m

The let keyword provides the variable with what is known as block scope. This means that it can only be accessed within the block it is defined in.
As i is created using let, it is out of scope for the console logging event. As
such, the above error is output to the console.

6. What will happen at line 13 and why? If the code causes an error, 
explain why. 
C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4\expose\javascript\part2-qu
estion6.js:13
         console.log(discountedPrice);
                     ^

ReferenceError: discountedPrice is not defined
    at discountPrices (C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4\exp
ose\javascript\part2-question6.js:13:15)
    at Object.<anonymous> (C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4
\expose\javascript\part2-question6.js:19:1)
←[90m    at Module._compile (internal/modules/cjs/loader.js:1085:14)←[39m
←[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:1
0)←[39m
←[90m    at Module.load (internal/modules/cjs/loader.js:950:32)←[39m
←[90m    at Function.Module._load (internal/modules/cjs/loader.js:790:12)←[39m
←[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_ma
in.js:76:12)←[39m
←[90m    at internal/main/run_main_module.js:17:47←[39m

discountedPrice was created using let, only providing it block scope. It was out of scope for line 13, console.log(discountedPrice);

7. What will happen at line 14 and why? If the code causes an error, 
explain why.
150 will be the output to the console. This is because finalPrice is in scope for the whole function, and is the final result of the loop. Its final result is 150, by the same path as in question 4. As such, the console will log this 150.

8. What will this function return? Give a brief explanation. If the 
code causes an error, explain why.
Nothing will be output to thte console.
This function will return
50
100
150
because it is effectively the asme as question 4, but with different scoping.

9. What will happen at line 11 and why? If the code causes an error, 
explain why.
C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4\expose\javascript\part2-qu
estion9.js:8
                discounted.push(finalPrice);
                                ^

ReferenceError: finalPrice is not defined
    at discountPrices (C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4\exp
ose\javascript\part2-question9.js:8:19)
    at Object.<anonymous> (C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4
\expose\javascript\part2-question9.js:17:1)
←[90m    at Module._compile (internal/modules/cjs/loader.js:1085:14)←[39m
←[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:1
0)←[39m
←[90m    at Module.load (internal/modules/cjs/loader.js:950:32)←[39m
←[90m    at Function.Module._load (internal/modules/cjs/loader.js:790:12)←[39m
←[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_ma
in.js:76:12)←[39m
←[90m    at internal/main/run_main_module.js:17:47←[39m

The const keyword gives its variable the same scope as the let keyword. Declaring a variable with the const prevents it from being reassigned after it is assigned for the first time. 

i goes out of scope, as it was declared using let.

10. What will happen at line 12 and why? If the code causes an error, 
explain why.
3
Length is the size of the input array. Here, that is 3.
11.  What will this function return? Give a brief explanation. If 
the code causes an error, explain why.
50
100
150
As before, discounted is an array which has values 1/2 the magnitude of those of the input array. As such, the array containing the values above is returned.
12. Given the above Object, write the notation for: 
A. Accessing the value of the name property in the student object
student.name;
B. Accessing the value of the Grad Year property in the student object
student["Grad Year"];
C. Calling the function for the greeting property in the student object
student.greeting();
D. Accessing the name property of the object in the Favorite Teacher 
property in student
student["Favorite Teacher"].name;
E. Access the first index in the array of the courseLoad property of 
the student object
student.courseLoad[0];

For each of the following questions, note down the output as well as 
a brief explanation why that output was given(These should be in your
part2.md)

13. Arithmetic
	A. '3' + 2
	32
	The string literal 3 is appended by 2.
	B. '3' - 2
	1
	JS converts strings into numbers when subtracting
	C. 3 + null
	3
	Addition to an integer attempts to convert second input into an integer.
	D. '3' + null
	3null
	'3' treated as string, so null is treated as a string.
	E. true + 3
	4
	true is boolean, and as such is converted to integer when adding.
	F. false + null
	0
	false is boolean, so JS converts it to 0. Null is also converted to 0.
	0 + 0 = 0
	G. '3' + undefined
	3undefined
	Addition, so 3 and undefined are treated as strings and concatenated.
	H. '3' - undefined
	NaN
	Strings are converted into numbers when subtracting. No way to subtract
	undefined from 3, resulting in NaN

14. Comparison
JS converts values into numbers when comparing.
Using ==, variable values converted to same type(type coercion)
No type coercion with ===. True means two identical values, else
false.
	A. '2' > 1
	true
	converted to 2 > 1
	B. '2' < '12'
	false
	converted to 2 < 12
	C. 2 == '2'
	true
	converted to 2 == 2
	D. 2 === '2'
	false
	These two values are not identical. String vs integer,
	E. true == 2
	false
	converted to 1 == 2
	F. true === Boolean(2)
	true
	2 is greater than 0, always boolean true.
15. Explain the difference between the == and === operators.
== performs type coercion(variable values converted to same type),
=== only returns true if both values and types are identical
for the two variables being compared(no type coercion)

16. Given the above Object, write a for...in loop that will 
iterate through it and print out the value of the property 
if the property starts with the letter r, or if the value of 
that property is an odd number.  (This should be in a JS file 
part2-question16.js)

17. If the function above is called with the following parameters 
modifyArray([1,2,3], doSomething), what will be the result? 
Briefly walk through how you arrived at that result. (This should 
be in your part2.md). Here we are passing in a function as a 
parameter, however we can also return a function from another 
function just as easily, you're encouraged to play around with 
callbacks as they are used heavily in frontend JS development. 
const newArr = [];
i = 0:
newArr.push(callback(1));
//callback(1) returns 2;
//->newArr.push(2);
i = 1:
newArr.push(callback(2));
//callback(2) returns 4;
//->newArr.push(4);
i = 2:
newArr.push(callback(3));
//callback(3) returns 6;
//->newArr.push(6);
return newArr; {2,4,6};

18. The above program only prints out the time once when executed. 
Modify this code such that the program prints out the time every 
second.  (This should be a JS file - part2-question18.js)

19. What is the output of the above code? (This should be in 
your part2.md)
1
4
3
2

