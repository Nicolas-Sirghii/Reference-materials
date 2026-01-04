// var a = undefined;

console.log(a)   // undefined

var a = 10;
//...............................................................
console.log(b)
// b();                        

var b = function() {
    console.log("Hello")   // ERROR "B IS NOT A FUNCTION"  = BECAUSE IT IS "UNDEFINED"
}
console.log(b)

//...............................................................

// c(); 

let c = function() {
    console.log("sometning")   // Cannot access 'c' before initialization BECAUSE IT DOESN'T EXIST
}