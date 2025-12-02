console.log("Nazaneen Baguaei")
console.log("---- Example 1: console -----")
console.warn("Warning! check the last line before proceeding!")
console.error("ERROR, port is not available")
console.trace("TRACE LOCATIONS")

setTimeout(()=>{
    console.warn("warning! input string for the next line")
}, 3000)

console.log('----- Example 2: creating a simple module file -----')
// const name = require("./mod")
import helper from "./mod"
console.log(helper("Peter"))