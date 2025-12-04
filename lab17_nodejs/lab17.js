console.log("Nazaneen Baguaei")
console.log("---- Example 1: console -----")
console.warn("Warning! check the last line before proceeding!")
console.error("ERROR, port is not available")
console.trace("TRACE LOCATIONS")

setTimeout(()=>{
    console.warn("warning! input string for the next line")
}, 3000)

console.log('----- Example 2: creating a simple module file -----')
// const name = require("./mod.js")
import name from "./mod.js"

console.log(name.helper("peter"))
console.log(name.id(12345))
console.log(name.email("peter@neverland.edu"))

console.log('---- Example 3: event emitter -----')
const events = reuqire('events')

let eventEmitter = new events.EventEmitter()

eventEmitter.on('test', function(a){
    console.log(a)
})

eventEmitter.emit('test', 'EVENTS IN NODEJS')
