# Assignment-Refactoring-var-to-const-and-let
William Andersond

AD311
//"full" access can never happen

//Logged-in users always get "limited"

//var message = "User is logged in.";

//var message = "User not logged in.";
This works, but it’s risky and unclear.
Overuse of var (not a syntax error, but bad practice)
Fix: use let / const

The code runs, but userRole is never assigned, so the admin branch is unreachable. The function is also called twice unnecessarily, and var is used instead of let or const, which can cause scope-related issues.”
# Refactoring var to let and const

## Issues with using `var`

The original code used `var`, which can cause several problems:
a.`var` is function-scoped, not block-scoped, which can lead to accidental variable reuse.
b. Variables declared with `var` can be redeclared without errors, increasing the risk of bugs.
c. `var` declarations are hoisted, which can cause unexpected `undefined` values.
d. Using `var` inside loops can lead to incorrect values in asynchronous code.

## Improvements Made

a. Replaced `var` with `let` where reassignment was necessary.
b. Replaced `var` with `const` where variables were never reassigned.
c. This improves readability, prevents accidental reassignment, and makes the code more predictable.

