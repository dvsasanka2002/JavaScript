// Immediately Invoked Function Expression (IIFE)

(function f() {
    console.log(`DB Connected`)
    //Named IIFE
})();
// Here we must always end the IIFE with an ; to let it know where to stop
((name)=>(
    console.log("Hello "+name)
))("Sasanka")
// f()