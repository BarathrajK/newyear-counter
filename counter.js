
function counter(){
    // var days=document.querySelector(".days")
    var currentYear =new Date().getFullYear();
    var newYear =new Date(`January 1 ${currentYear+1} 00:00:00`);
    var currentDate= new Date ();
    
    var diff = newYear-currentDate;
    console.log(diff)
    var d = Math.floor(diff/1000/60/60/24);
    var h = Math.floor((diff/1000/60/60)%24);
    var m = Math.floor((diff/1000/60)%60);
    var s = Math.floor((diff/1000)%60);
    console.log(d);
    days.innerHTML=d;
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
}
 setInterval(counter,1000);
// counter()

