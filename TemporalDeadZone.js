
{
    console.log(greetingMsg)        // TDZ Starts
    let name = "javaScript";        // TDZ
    let greetingMsg;                // TDZ
    console.log(greetingMsg)        // TDZ
    greetingMsg = `Hello ${name}`;  // TDZ ends
    console.log(greetingMsg); 
}

// No TDZ
/*
{
    function sayGreetings(){
        console.log(greetingMsg)
    }
    let name = "javaScript";
    let greetingMsg = `Hello ${name}`;
    sayGreetings();
}
*/
/*
function increment() {
    var counter = 1;
    if (counter) {
        // let counter = (counter + 1)
        // TDZ --> counter has lexical scope of let now

        let counter1 = (counter + 1) // Not TDZ
    }
    console.log(counter);
}

increment();
*/

/*
let test = 10;
{
    var test = 20; // Var will be hoisted
}
console.log(test)
*/