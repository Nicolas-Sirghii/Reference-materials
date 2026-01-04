import { objectArray, Child, Parent } from "./elemsnts.js";

// Class is an object generator;

 const classArray = objectArray.map((element) => {
    return new Parent(element);
});

const firstInstance = new Child(); // this is called an instance of the class;
const secondInstance = new Parent(); 

console.log(firstInstance instanceof Child) // We can chek if it is an instance ot this Cart.
console.log(firstInstance)
console.log(secondInstance)
firstInstance.publicMethod();
console.log(objectArray)
console.log(classArray)
console.log(classArray[1] instanceof Parent)


