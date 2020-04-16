declare function sayHello(): void;

sayHello();

export function add(x: i32, y: i32): i32 {
  return x + y;
}

export function test(): void {
  var a = new Map<string,string>()
  a.set("prop", "hello world")
}