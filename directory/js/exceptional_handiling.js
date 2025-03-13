// throw statement
///The throw statement is used to create a custom error.
//Use throw to raise an error and interrupt normal execution.

/*
try {
    let age = 54;
    if (age < 18){
        throw new Error("Age must be above 18");
    }
    else{
        throw new Error("Age is valid");
    }

}
catch (error){
    console.log(`Error:${error.message}`)
}

*/

// try /catch/finally statement
/*
1. try Block
The try block contains code that might throw an error.
 If an error occurs, the control is transferred to the catch block.

2. catch Block
The catch block handles the error.
 It captures the error and provides a way to deal with it (like logging it or showing a message).
  You can also access the error object, which contains details about the error.

3. finally Block
The finally block is optional and executes after the try and catch blocks, no matter what.
 It runs whether or not an error occurred. 
 It's often used for cleanup actions, such as closing files or releasing resources.

 */