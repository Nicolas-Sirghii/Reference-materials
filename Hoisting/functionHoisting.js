// function a(argument) {
//     console.log(argument)
// }

const b = "text";

a(b)

function a(argument) {
    console.log(argument)       // text
}
//........................................................

const o = undefined;


function r(argument) {

    console.log(o)
    // let o = 10;           //  Error it doesn't exist, even if there is one above.
                             //  because of the scope that creates the function.
}

r();