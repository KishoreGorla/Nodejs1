function f1()
{
  console.log('hi');
}
f1();

var abc = function f2(){
  console.log('Hello Kishore');
};
abc();

function callfunc(fun)
{
  fun();
}
callfunc(abc);