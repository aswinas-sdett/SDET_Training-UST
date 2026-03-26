let names : string[] = ["sghd", "hic","gyufe"];
console.log(names);
names[1] = "gfdh";
console.log(names[1]);

for (let i:number = 1; i<names.length; i++)
{
    console.log(names[i])
}


let nochangenames: readonly number[] = [1,2,3,4]
console.log(nochangenames)

let numbers: number[] = [1,2,3,4,5,6,7,8,9]
console.log(numbers)
let newarray = numbers.map((value) => value*2)
console.log(newarray)

let newarray2 = numbers.filter((value) => value%2 === 0)
console.log(newarray2)

let sum = numbers.reduce((a,b)=> a+b, 0)
console.log(sum)