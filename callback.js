function greet(name,callback){
    console.log(name);
    callback();
}
function sum(){
    console.log("this is callback function")
}
greet("sanjana",sum)