var a = { x: 2, y: 10, z: "Test json" };
// console.log(a);
// console.log(JSON.stringify({ x: 5, y: 6 }, ['x'], 'test'));
// console.log(JSON.stringify({ x: 5, y: 6 }, ['x']));
/* console.log(
    JSON.stringify(
        a, 
        (key,value)=>{
           if (typeof value === "string") {
                return;
              }
              return value;
        }
    )
); */

/* console.log(JSON.stringify({ x: 5, y: 6 }, null, ""));
console.log(JSON.stringify({ x: 5, y: 6 }, null, " "));
console.log(JSON.stringify({ x: 5, y: 6 }, null, "\t"));
console.log(JSON.stringify({ x: 5, y: 6 }, null, "\r"));
console.log(JSON.stringify({ x: 5, y: 6 }, null, "\r\n")); */


/* JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
    console.log(key);
    return value;
}); */


const map = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
]);

map.forEach(element => {
    console.log(Array.from(element))
});



const jsonText1 = JSON.stringify(map);

console.log('jsonText1', jsonText1)
const jsonText2 = JSON.stringify(map, (key, value) => {
    console.log(key)
    return value instanceof Map ? Array.from(value.entries()) : value;
});

console.log('jsonText2', jsonText2)

const map2 = JSON.parse(jsonText2, (key, value) =>
    key === "" ? new Map(value) : value,
);

console.log('map2', map2);
console.log('===========================');

//--- Compare
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(target === returnedTarget)

const ob1 = { name: 1, age: 2 };
const ob2 = { name: 1, age: 2 };

const assignedObj = Object.assign(ob1, ob2);

console.log(assignedObj)
console.log(ob2 === assignedObj)

//=============================

/* const mushrooms1 = {
    amanita: ["muscaria", "virosa"],
};

const mushrooms2 = structuredClone(mushrooms1);

mushrooms2.amanita.push("pantherina");
mushrooms1.amanita.pop();

console.log(mushrooms2.amanita); // ["muscaria", "virosa", "pantherina"]
console.log(mushrooms1.amanita); // ["muscaria"] */


/* const obj = { a: 1 };
const copy = Object.assign({}, obj);
const copy1 = {...obj};

obj.b = 10;

console.log(copy); // { a: 1 }
console.log(obj); // { a: 1, b:10 }
console.log(copy1); // { a: 1}
 */

 //----------------------------------------
/* const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed. */


//----------------------------------------

const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1}

//----------------------------------------

/* const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign({...o1}, {...o2}, {...o3});
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1} */