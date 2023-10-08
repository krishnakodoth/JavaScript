function Employee(){}

Employee.prototype = {
    names:[],
    showNames: function(){
        return this.names;
    }
}


console.log(Employee);

var e1 = new Employee();
e1.names.push("foo")
console.log(e1.showNames())

var e2 = new Employee();
e2.names.push("bar")
console.log(e2.showNames())

function x(){
    setTimeout(()=>{
        console.log(i)
    },1000);
    var i=1;
}

x();