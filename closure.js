


const addTwoNum = (a) => {
    console.log(a)
    return (b) => {
        console.log(b);
        console.log("Sum :", a+b)
        return a+b;
        
    }
}

const var1 = addTwoNum(2);
var1(5)
// addTwoNum.addition()