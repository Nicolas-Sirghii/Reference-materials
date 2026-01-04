
// import { renderProducts } from "./file1.js";

// function firstStep() {
//     setTimeout(() => {console.log("First Step!")}, 1000);
// }
// function secondStep() {
//     setTimeout(() => {console.log("Second Step!")}, 500);
// }
// function thirdStep() {
                            
//                                                                     setTimeout(() => {
//                                                                     console.log("third Step!");
//                                                                     resolve();
//                                                                     }, 200);
                            
// }

// firstStep();
// secondStep();
// thirdStep();


//..................................................................................................

// function firstStep() {
//                             return new Promise(resolve => {
//                                                                     setTimeout(() => {
//                                                                     console.log("First Step!");
//                                                                     resolve();
//                                                                     }, 1000);
//                             });
// }

// function secondStep() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Second Step!");
//       resolve();
//     }, 500);
//   });
// }

// function thirdStep() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Third step!");
//       resolve();
//     }, 200);
//   });
// }

// firstStep()
//   .then(() => secondStep())
//   .then(() => thirdStep())

//..................................................................................................

// const xhr = new XMLHttpRequest();

// xhr.addEventListener("load", () => {
//     renderProducts(JSON.parse(xhr.response))
// })
// xhr.open("GET", "https:/supersimplebackend.dev/products");
// xhr.send();
//..................................................................................................
// function getProducts() {
//                         return new Promise((resolve) => {
//                                                                         const xhr = new XMLHttpRequest();

//                                                                         xhr.addEventListener("load", () => {
//                                                                         resolve(JSON.parse(xhr.response));
//                                                                         });
//                                                                         xhr.open("GET", "https://supersimplebackend.dev/products");
//                                                                         xhr.send();
//                         });
// }


// getProducts()
//   .then(products => renderProducts(products))
 
  
//..................................................................................................

// function getProducts() {
//             return new Promise((resolve, reject) => {
//                                                     const xhr = new XMLHttpRequest();

//                                                     xhr.addEventListener("load", () => {
//                                                                                                 resolve(JSON.parse(xhr.response));
//                                                     });

//                                                     xhr.addEventListener("error", () => {
//                                                                                                 reject("Request failed");
//                                                     });

//                                                     xhr.open("GET", "https://supersimplebackend.dev/products");
//                                                     xhr.send();
//             });
// }

// getProducts()
//   .then(products => renderProducts(products))
//   .catch(error =>  console.log(error));


    
