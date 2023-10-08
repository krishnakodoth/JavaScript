/// Object

const user = { 
  'name': 'Alex',
  'address': '15th Park Avenue',
  'age': 43
}

const {age,name} = user;
console.log(name,age)

// { name  } = user // Uncaught SyntaxError: Unexpected token '='

const array = ["A","B","C"];

// const [a,b,c] = array;
// console.log(a,b,c)

/* 
let name1;

{ name  } = user; // Uncaught SyntaxError: Unexpected token '=' 

*/

let name1;
({ name:name1  } = user);
console.log(name1); // Output, Alex

// Nested Object Destructuring

const user1 = { 
  'name': 'Alex',
  'address': '15th Park Avenue',
  'age': 43,
  'department':{
      'name': 'Sales',
      'Shift': 'Morning',
      'address': {
          'city': 'Bangalore',
          'street': '7th Residency Rd',
          'zip': 560001
      }
  }
}
/* const { department } = user1;
console.log(department) */

const { department: { address } } = user1;
console.log(address) // { city: 'Bangalore', street: '7th Residency Rd', zip: 560001 }

const { department: { address: { city } } } = user1; 
console.log(city)

// ARRAY
const [a,,c] = array;

console.log(a,c)