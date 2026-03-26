var weight: number = 90;
var height: number = 1.8;
var BMI:number  = weight / (height*height);
if (BMI < 18.5)
{
    console.log("underweight");
}
else if (BMI > 18.5 && BMI <25)
{
    console.log("normal weight");
}
else if ( BMI >= 25 && BMI < 30)
{
    console.log("overweight");
}
else
{
    console.log("obese");
}