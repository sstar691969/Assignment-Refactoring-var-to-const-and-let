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
