export const objectArray = [
    {
      type: "This is a simple array property"
    },
   {
      type: "This is a simple array property"
    },
  {
      type: "This is a simple array property"
    },
];

export class Parent {
    publicProperty = "text"; // public property
    #privatProperty = "this is privet property in Parent's class"; // privat property because of the #
    parentConstructorWorked = "No it did not work yet!"
    inheritance = "Only the parrent class has this property"

    constructor(argument = "Yes the parrent constructor worked!"){
       this.parentConstructorWorked = argument;
    }
    #privatMethod(){
        console.log(this.#privatProperty) // we use privat property allso with #
    }
    publicMethod(){
       this.#privatMethod()
    }
    parentMethod(){
        console.log("ParentMethod called in the child's class")
    }
};


export class Child extends Parent {
    publicProperty = "text"; // public property
    #privatProperty = "this is privet property in child's class"; // privat property because of the #
    childConstructorWorked = "No child Constructor didn't worked yet!"

    constructor(argument = "Yes it did tork!"){   // if we don't create constructor in the child , by default it will run 
        super();                                  // the parrent constructor.
        this.childConstructorWorked = argument;                               
    }                             
    #privatMethod(){
        console.log(this.#privatProperty) // we use privat property alwo with #
    }
    publicMethod(){
       this.#privatMethod();
       super.parentMethod();
    }
};

