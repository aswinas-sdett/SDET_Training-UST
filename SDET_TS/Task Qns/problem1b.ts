var xtime:number = 9*60 + 30;
var arrivalhr: number = 9;
var arrivalmin: number = 20;
var arrivaltime = arrivalhr*60 + arrivalmin;

if (arrivaltime< xtime)
{
    console.log("Student is early");
}
else if (arrivaltime> xtime)
{
    console.log("Student is late");

}
else
{
    console.log("Student is on time");
}