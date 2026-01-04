import { text1 } from "./file1.js";
import { nameToBeChanged as newName } from "./file2.js";
import { firstPart, secondPart, thirdPart } from "./file3.js";
import * as objectExports from "./file4.js";
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js'; 
import defaultExport from "./file5.js";
import "./file6.js" // this just runs the code from this file , it doesn't inport




                                                //file6 is running!
console.log(text1);                             //The named export!
console.log(newName);                           //Import and change the name.
console.log(firstPart + secondPart + thirdPart);//Import multiple files using comma.
console.log(  objectExports.variable1
            + objectExports.variable2
            + objectExports.expMethod()); //This imports everything from a file and groops it together inside an object. And then we can access each import as a property or a method.

console.log("External library")
hello();// ESM version of the library EcmaScript module, (Ecmascript = Javascript)
defaultExport();

// In order modules to work , we need to do 2 stapes:
// 1. Add    type="module"     atribute to the    ENTRY POINT FILE.
// 2. Export.
// 3. Inport.


// Put all imports at the top of the file.
// And in order all this to work we need to use LIFE SERVER.



