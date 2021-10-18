1. What is printed by line 9? If the code returns an error,
	explain why.
values added: 20
2. What is printed by line 13? If the code returns an error,
	explain why.
final result: 20
3. What is printed by line 9? If the code returns an error,
	explain why.
values added:  20
4. What is printed by line 13? If the code returns an error,
	explain why.
C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4\expose\javascript\part1-qu
estion3.js:13
        console.log('final result: ', result);
                                      ^

ReferenceError: result is not defined
    at sumValues (C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4\expose\j
avascript\part1-question3.js:13:32)
    at Object.<anonymous> (C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4
\expose\javascript\part1-question3.js:16:1)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js
:76:12)
    at internal/main/run_main_module.js:17:47

The code returns an error because 'let' is block scope.
5. What is printed by line 9? If the code returns an error,
	explain why.

C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4\expose\javascript\part1-question5.js:7
                result = num1 + num2;
                       ^

TypeError: Assignment to constant variable.
    at sumValues (C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4\expose\j
avascript\part1-question5.js:7:10)
    at Object.<anonymous> (C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4
\expose\javascript\part1-question5.js:16:1)
←[90m    at Module._compile (internal/modules/cjs/loader.js:1085:14)←[39m
←[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:1
0)←[39m
←[90m    at Module.load (internal/modules/cjs/loader.js:950:32)←[39m
←[90m    at Function.Module._load (internal/modules/cjs/loader.js:790:12)←[39m
←[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_ma
in.js:76:12)←[39m
←[90m    at internal/main/run_main_module.js:17:47←[39m

The error message is generated because assignment to constant terminates the compilation early.
6. What is printed by line 13? If the code returns an error,
	explain why.
C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4\expose\javascript\part1-question5.js:7
                result = num1 + num2;
                       ^

TypeError: Assignment to constant variable.
    at sumValues (C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4\expose\j
avascript\part1-question5.js:7:10)
    at Object.<anonymous> (C:\Users\ericf\Desktop\CSE 110\Lab 4\fa21-cse110-lab4
\expose\javascript\part1-question5.js:16:1)
←[90m    at Module._compile (internal/modules/cjs/loader.js:1085:14)←[39m
←[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:1
0)←[39m
←[90m    at Module.load (internal/modules/cjs/loader.js:950:32)←[39m
←[90m    at Function.Module._load (internal/modules/cjs/loader.js:790:12)←[39m
←[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_ma
in.js:76:12)←[39m
←[90m    at internal/main/run_main_module.js:17:47←[39m

The error message is generated because assignment to constant terminates the compilation early.
