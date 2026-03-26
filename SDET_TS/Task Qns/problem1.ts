var atime: String = "9:30 pm"

var [arrtime, ampm] = atime.split(" ");
var [hr, min] = arrtime.split(":").map(Number);

if (ampm == "am")
{
    if (hr == 9){
        if(min < 30)
        {
         console.log("early");
          }
        else if (min == 30)
        {
            console.log("on time");
        }
        else{
            console.log("late");
        }}
    else if(hr < 9)
    {
        console.log("early");

    }
    else
    {
        console.log("late")
        
    }}
else
{
    console.log("late")
}





