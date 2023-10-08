const obj1 = {
    name: "John Doe",
    age: 36,
    addr: {
        name: "John Doe",
        age: 36,
    }
}

const obj2 = {
    age: 36,
    name: "John Doe",
    addr: {
        name: "John Doe",
        age: 36,
    }
}

const deepEqual = (obj1, obj2) => {
    // return true if equal and false otherwise

    const objKeys_1 = Object.keys(obj1);
    const objKeys_2 = Object.keys(obj2);

    // Check keys length of obj1 & obj2
    if (objKeys_1.length !== objKeys_2.length) {
        return false;
    }

    // Iterate for each element
    for (const key in objKeys_1) {
        // Check for objects
        if(typeof obj1[objKeys_1[key]] === 'object' && objKeys_1[key] in obj2 && typeof obj2[objKeys_1[key]] === 'object'){
            return deepEqual(obj1[objKeys_1[key]],obj2[objKeys_1[key]]);
        }
        
        if(objKeys_1[key] in obj2 && obj1[objKeys_1[key]] == obj2[objKeys_1[key]]){
            return true;
        }
        return false;
    }






    /* let isEqual = false;
    Object.keys(obj1).forEach((el1) =>{
        Object.keys(obj2).forEach((el2)=>{
            // console.log(el1,el2);
            isEqual = el1 === el2;
            if(!isEqual){
                return false;
            }
        })
    });
    return isEqual; */
}

console.log(deepEqual(obj1, obj2));