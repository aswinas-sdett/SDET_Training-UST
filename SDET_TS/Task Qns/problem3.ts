let string1: string = "TypeScript";
let rev:string = "";
for (let i: number = string1.length-1; i>=0; i--)
{
    rev += string1[i];
}
console.log(rev);

//2
let string2:string = "correspondence";
let result:string = "";
for (let s:number = 0; s<string2.length-1; s++)
{
    let count = 0;
    for (let s2: number= 0; s2< string2.length-1; s2++)
    {
        if (string2[s] == string2[s2])
        {
                count++;
        }
    }
    if (count ==1 )
    {
        result += string2[s]
    }
}
console.log(result)

//3
let string3:string = "correspondence";
let result3:string = "";

function isvowel(s:string)
{
let vowels:string = "aeiou";
let val:boolean = false;
for (let v:number = 0; v<vowels.length-1; v++)
{
    if (s == vowels[v])
    {
        val = true;
        
    }
}
return val;
}

for (let s:number = 0; s<string3.length; s++)
{
    if (isvowel(string3[s]))
    {
    let count = 0;
    for (let s2: number= 0; s2< string3.length; s2++)
    {
        if (string3[s] == string3[s2])
        {
                count++;
        }
    }
    if (count == 1 )
    {
        result3 += string3[s]
    }}
    else
    {
        result3 += string3[s];
    }
   
}
console.log(result3)



//4
let numbers4: number[] = [8,2,5,1,4,9,7,6,3]
for (let i:number = 0 ; i< numbers4.length; i++)
{
    for (let j: number = i+1; j < numbers4.length; j++)
    {
        if (numbers4[i] > numbers4[j])
        {
            let temp:number = numbers4[i]
            numbers4[i] = numbers4[j]
            numbers4[j] = temp
        }
    }
}
console.log(numbers4)


//5
let string5:string = "correspondence";
let result5:string = "";
let count5:number = 0;
function isvowel1(s:string)
{
let vowels:string = "aeiou";
let val:boolean = false;
for (let v:number = 0; v<vowels.length-1; v++)
{
    if (s == vowels[v])
    {
        val = true;
        
    }
}
return val;
}

for (let s:number = 0; s<string5.length; s++)
{
    if (isvowel1(string5[s]))
    {
    let count = 0;
    for (let s2: number= 0; s2< string5.length; s2++)
    {
        if (string5[s] == string5[s2])
        {
                count++;
        }
    }
    if (count == 1 )
    {
        result5 += string5[s]
    }}
    count5 = result5.length
   
}
console.log(count5, "unique vowels")
