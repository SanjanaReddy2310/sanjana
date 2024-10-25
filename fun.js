function sayhello()
{
    function sayhello1(){
        console.log("this is nested function")
    }
    console.log("this is sayhello function")
    sayhello1();
}
function sayhi(){
    console.log("this is sayhi function")
}
sayhi();
sayhello();