let obj = {
    a: 1,
    b: 3,
    c: 5,
    d: 8
};

let { a, b, ...z } = obj;

console.log(a, b, z);

let map = [
    ['name', 'zhangsan'],
    ['age', '100'],
];
console.log(Object.fromEntries(map));


let str = '    hello world     ';
console.log(str.trimStart());
console.log(str.trimEnd());