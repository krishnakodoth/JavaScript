let person = {
    firstName: "James",
    lastName: "Bond"
  }

  Object.defineProperty(person,"fullName",{
    value:false,
    configurable:true,
    writable:false,
    enumerable:true
  })

  person.fullName = "Some Value";


  console.log(person)
  Object.seal(person)
  // Object.freeze(person)
  // Object.preventExtensions(person)
  console.log(person)

  console.log('isSealed',Object.isSealed(person));
  console.log('isFrozen',Object.isFrozen(person));
  console.log('isExtensible',Object.isExtensible(person));
