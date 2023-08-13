// call stack: calling the functions with along the synced order
/*

main(){
    a(){
        console.log('f(a) called')
    }
    b(){
        a()
    }
    b() // calling b()
}

// call stack as follows:-
b() --> a() --> console.log()

*/




// event loop: loupe by Robert Philip
/*

console.log("execution no. 1");
$0.addEventListener('click',function funC(){
    console.log('execution no. 2, funC');
})
console.log('execution no.3');

console3 <-- addEventListener <-- console1
    |
    V
click on --> console2_funC() 

*/




// setTimeout function: majorly used
// try it in Loupe
// in console port: setTimeout(fn(),5000)
/*

setTimeout(a(), 7000)
console.log('timer ends')

function a(){    
    console.log('timer starts');
}

 */