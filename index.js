function checkAccess(loggedIn) {
    let accessLevel;
    let userRole;
    if (loggedIn) { //When loggedIn === true
        // code checks userRole
        const message = "User is logged in.";
        console.log(message);
        if (userRole === "admin") { // always false
            accessLevel = "full";
        } else {
            accessLevel = "limited";
        }
    } else { // When loggedIn === false
//accessLevel = "none"
        const message = "User not logged in.";
        console.log(message);
        accessLevel = "none";
    }
    return accessLevel;
}

for (let i = 0; i < 3; i++) {
    console.log("Attempt", i);
    const loggedIn = Math.random() >= 0.5;
    console.log("Access Level:", checkAccess(loggedIn));
}
