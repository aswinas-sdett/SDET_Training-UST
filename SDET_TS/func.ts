function addnumbers()
{
    let number1  = 10;
    let number2 = 20;
    console.log(`sum is ${number1+number2}`)
}

function subnumbers(num1: number, num2: number)
{
    console.log(`diff is ${num1 - num2}`)
    return (num1-num2)
}

function prodnumbers(num1: number, num2: number) : number
{
    return (num1*num2)
}

//addnumbers()
//console.log(subnumbers(20, 10))
//console.log(prodnumbers(10,20))


function details(name: string, city : string, age? : number)
{
    if(age)
    {
        console.log(`name: ${name}
        age:${age}
        city:${city}`)
    }
    else
    {
         console.log(`name: ${name}
                    city:${city}`)
    }
}
details("Aswin", "Kerala", 22)
details("bhsdj","bhfj")


function overloadingdemo(num1: number, num2 :  number) : number;
function overloadingdemo(str1 : string, str2 : string) : string;
function overloadingdemo(arg1: any, arg2 : any) : any
{
    if (typeof arg1 === "number" && typeof arg2 === "number")
    {
        return arg1+arg2;
    }

    if (typeof arg1 === "string" && typeof arg2 === "string")
    {
        return arg1.concat(arg2);
    }
    throw new Error ("invalid Argument")
}

console.log(overloadingdemo(10,20))
console.log(overloadingdemo("hello", " world"))

const showname = (name: string) : void => 
{
    console.log(`Welcome ${name}`)
}
showname("aswin")

const addd = (v1: number) : number => v1 * v1;
console.log(addd(20))