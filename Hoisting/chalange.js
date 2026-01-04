console.log(a);          // undefined  == 
var a = 1;

// console.log(b);       //  error - Cannot access b before initialization
// let b = 2;

func1();                 // Function 1
// func2();              // error func2 is not a function == IT IS UNDEFINED;

function func1() {
  console.log("Function 1");
}

var func2 = function() {
  console.log("Function 2");
};

(() => {
  console.log(a);       // undefined   
//   console.log(b);    //   error cannot access b before initialization
  var a = 10;
  let b = 20;

  nested();

  function nested() {
    console.log(a);   // 10
    console.log(b);   // 20
  }
})();

console.log(a);  // 1










