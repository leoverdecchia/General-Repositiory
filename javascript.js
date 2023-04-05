function f1(){
    var target1 = parseFloat(document.getElementById("tar1").value);
    
    var current1 = parseFloat(document.getElementById("cur1").value);

    var weeklyDose = parseFloat(document.getElementById("week").value);
  
    var y = target1+current1+weeklyDose;
   
   // document.getElementById('right').innerHTML = y;
    
   rec = "Recommended Weekly Dosage: "

   if(target1 == 2.5){
        if(current1 < 1.5){
            newWeek1 = weeklyDose*1.1;
            newWeek2 = weeklyDose*1.15;
            newWeek3 = weeklyDose*1.2;
            var nextINR = "4 to 8 Days";
            var Message = "Before you change dosage, assess patient compliane - maybe does is right, but patient isn't taking it.";
            
            
            //document.getElementById('change').innerHTML = din;
           // document.getElementById('rec').innerHTML = "Recommended Weekly Dosage: " + newWeek2 + " mg/wk";
           // document.getElementById('dailydose').innerHTML = newWeek2 /7;
            din = "Increase Dosage by 10-20%"
            document.getElementById('right').innerHTML = din;
            document.getElementById('lowball').innerHTML = "10% ONE 
            increase in dosage = " + newWeek1 + " mg/wk";
            document.getElementById('ball').innerHTML = "15% increase in dosage = " + newWeek2 + " mg/wk";
            document.getElementById('highball').innerHTML = "20% increase in dosage = " + newWeek3 + " mg/wk";
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            //document.getElementById('message').innerHTML = "Warning " + Message;
        }
        if(current1 >= 1.5 && current1 < 1.9){
            newWeek1 = weeklyDose*1.05;
            newWeek2 = weeklyDose*1.075;
            newWeek3 = weeklyDose*1.1;
            var nextINR = "7 to 14 Days";
            var Message = "Check App";
            din = "Increase Dosage by 5-10%"

            
            document.getElementById('right').innerHTML = din;
            document.getElementById('lowball').innerHTML = "5% increase in dosage = " + newWeek1 + " mg/wk";
            document.getElementById('ball').innerHTML = "7.5% increase in dosage = " + newWeek2 + " mg/wk";
            document.getElementById('highball').innerHTML = "10% increase in dosage = " + newWeek3 + " mg/wk";
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            //document.getElementById('message').innerHTML = "Warning " + Message;
            
        }
        if(current1 >= 2 && current1 <= 3){
            newWeek1 = weeklyDose*1;
            newWeek2 = weeklyDose*1;
            newWeek3 = weeklyDose*1;
            var nextINR = "# of consecutive in-range INR's x 1 wk, max interval q4 weeks";
            var Message = "Check App";
            din = "INR is Good"

            
            document.getElementById('right').innerHTML = din;
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            
        }
        if(current1 > 3 && current1 < 3.9 ){
            newWeek1 = weeklyDose*0.95;
            newWeek2 = weeklyDose*0.925;
            newWeek3 = weeklyDose*0.9;
            var nextINR = "7 to 14 Days";
            var Message = "Check App";
            din = "Decrease Dosage by 5-10%"

            
            document.getElementById('right').innerHTML = din;
            document.getElementById('lowball').innerHTML = "5% decrease in dosage = " + newWeek1 + " mg/wk";
            document.getElementById('ball').innerHTML = "7.5% decrease in dosage = " + newWeek2 + " mg/wk";
            document.getElementById('highball').innerHTML = "10% decrease in dosage = " + newWeek3 + " mg/wk";
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            //document.getElementById('message').innerHTML = "Warning " + Message;
            
        }
        if(current1 >= 3.9){
            newWeek1 = weeklyDose*0.9;
            newWeek2 = weeklyDose*0.9;
            newWeek3 = weeklyDose*0.9;
            var nextINR = "4 to 8 Days";
            var Message = "Option to hold dose for 1 day, then decrease total weekly dose by 10%";
            din = "Decrease Dosage by 10%"

            
            document.getElementById('right').innerHTML = din;
            document.getElementById('highball').innerHTML = "10% decrease in dosage = " + newWeek3 + " mg/wk";
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            //document.getElementById('message').innerHTML = "Warning " + Message;
        }
    } 

    else if(target1 == 3){
        if(current1 < 1.5){
            newWeek1 = weeklyDose*1.1;
            newWeek2 = weeklyDose*1.15;
            newWeek3 = weeklyDose*1.2;
            var nextINR = "4 to 8 Days";
            var Message = "Before you change dosage, assess patient compliane - maybe does is right, but patient isn't taking it.";
            
            
            //document.getElementById('change').innerHTML = din;
           // document.getElementById('rec').innerHTML = "Recommended Weekly Dosage: " + newWeek2 + " mg/wk";
           // document.getElementById('dailydose').innerHTML = newWeek2 /7;
            din = "Increase Dosage by 10-20%"
            document.getElementById('right').innerHTML = din;
            document.getElementById('lowball').innerHTML = "10% increase in dosage = " + newWeek1 + " mg/wk";
            document.getElementById('ball').innerHTML = "15% increase in dosage = " + newWeek2 + " mg/wk";
            document.getElementById('highball').innerHTML = "20% increase in dosage = " + newWeek3 + " mg/wk";
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            //document.getElementById('message').innerHTML = "Warning " + Message;
        }
        if(current1 >= 1.5 && current1 < 2.5){
            newWeek1 = weeklyDose*1.05;
            newWeek2 = weeklyDose*1.075;
            newWeek3 = weeklyDose*1.1;
            var nextINR = "7 to 14 Days";
            var Message = "Check App";
            din = "Increase Dosage by 5-10%"

            
            document.getElementById('right').innerHTML = din;
            document.getElementById('lowball').innerHTML = "5% increase in dosage = " + newWeek1 + " mg/wk";
            document.getElementById('ball').innerHTML = "7.55% increase in dosage = " + newWeek2 + " mg/wk";
            document.getElementById('highball').innerHTML = "10% increase in dosage = " + newWeek3 + " mg/wk";
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            //document.getElementById('message').innerHTML = "Warning " + Message;
            
        }
        if(current1 >= 2.5 && current1 <= 3.5){
            newWeek1 = weeklyDose*1;
            newWeek2 = weeklyDose*1;
            newWeek3 = weeklyDose*1;
            var nextINR = "# of consecutive in-range INR's x 1 wk, max interval q4 weeks";
            var Message = "Check App";
            din = "INR is Good"

            
            document.getElementById('right').innerHTML = din;
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            
        }
        if(current1 > 3.6 && current1 < 4.5 ){
            newWeek1 = weeklyDose*0.95;
            newWeek2 = weeklyDose*0.925;
            newWeek3 = weeklyDose*0.9;
            var nextINR = "7 to 14 Days";
            var Message = "Check App";
            din = "Decrease Dosage by 5-10%"

            
            document.getElementById('right').innerHTML = din;
            document.getElementById('lowball').innerHTML = "5% decrease in dosage = " + newWeek1 + " mg/wk";
            document.getElementById('ball').innerHTML = "7.5% decrease in dosage = " + newWeek2 + " mg/wk";
            document.getElementById('highball').innerHTML = "10% decrease in dosage = " + newWeek3 + " mg/wk";
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            //document.getElementById('message').innerHTML = "Warning " + Message;
            
        }
        if(current1 >= 4.6){
            newWeek1 = weeklyDose*0.9;
            newWeek2 = weeklyDose*0.9;
            newWeek3 = weeklyDose*0.9;
            var nextINR = "4 to 8 Days";
            var Message = "Option to hold dose for 1 or two days, then decrease total weekly dose by 10%";
            din = "Decrease Dosage by 10%"

            
            document.getElementById('right').innerHTML = din;
            document.getElementById('highball').innerHTML = "10% decrease in dosage = " + newWeek3 + " mg/wk";
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            //document.getElementById('message').innerHTML = "Warning " + Message;
        }
    } 
  
   else{
    alert("Try Again...");
   }


const days = [];
targetdose = newWeek2;
var x = 0;
days[0] = 0;
days[1] = 0;
days[2] = 0;
days[3] = 0;
days[4] = 0;
days[5] = 0;
days[6] = 0;
  
while(targetdose >= 0.5){
    if(x < 6){
        days[x] = days[x] + 0.5;
        targetdose = targetdose - 0.5;
        x++;
    }
    else{
        days[x] = days[x] + 0.5;
        targetdose = targetdose - 0.5;
        x = 0;
    }
} 





document.getElementById('m').innerHTML = "Monday: " + days[0];
document.getElementById('t').innerHTML = "Tuesday: " + days[1];
document.getElementById('w').innerHTML = "Wednesday: " + days[2];
document.getElementById('th').innerHTML = "Thursday: " + days[3];
document.getElementById('f').innerHTML = "Friday: " + days[4];
document.getElementById('s').innerHTML = "Saturday: " + days[5];
document.getElementById('su').innerHTML = "Sunday: " + days[6];


}
    

  
  
  function f2(){
    var target = parseFloat(document.getElementById('tar2').value);
    
    var current1 = parseFloat(document.getElementById("cur2").value);

    var mon = parseFloat(document.getElementById("mon").value);

    var tues = parseFloat(document.getElementById("tues").value);

    var wed = parseFloat(document.getElementById("wed").value);

    var thurs = parseFloat(document.getElementById("thurs").value);

    var fri = parseFloat(document.getElementById("fri").value);

    var sat = parseFloat(document.getElementById("sat").value);

    var sun = parseFloat(document.getElementById("sun").value);
  
    var weeklyDose = mon+tues+wed+thurs+fri+sat+sun;
   
    //document.getElementById('right').innerHTML = weeklyDose;
    
   rec = "Recommended Weekly Dosage: ";

   if(target = 2.5){
        if(current1 < 1.5){
            newWeek1 = weeklyDose*1.1;
            newWeek2 = weeklyDose*1.15;
            newWeek3 = weeklyDose*1.2;
            var nextINR = "4 to 8 Days";
            var Message = "Before you change dosage, assess patient compliane - maybe does is right, but patient isn't taking it.";
            
            
            //document.getElementById('change').innerHTML = din;
           // document.getElementById('rec').innerHTML = "Recommended Weekly Dosage: " + newWeek2 + " mg/wk";
           // document.getElementById('dailydose').innerHTML = newWeek2 /7;
            din = "Increase Dosage by 10-20%"
            document.getElementById('right').innerHTML = din;
            document.getElementById('lowball').innerHTML = "10% increase in dosage = " + newWeek1 + " mg/wk";
            document.getElementById('ball').innerHTML = "15% increase in dosage = " + newWeek2 + " mg/wk";
            document.getElementById('highball').innerHTML = "20% increase in dosage = " + newWeek3 + " mg/wk";
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            //document.getElementById('message').innerHTML = "Warning " + Message;
        }
        if(current1 >= 1.5 && current1 < 1.9){
            newWeek1 = weeklyDose*1.05;
            newWeek2 = weeklyDose*1.075;
            newWeek3 = weeklyDose*1.1;
            var nextINR = "7 to 14 Days";
            var Message = "Check App";
            din = "Increase Dosage by 5-10%"

            
            document.getElementById('right').innerHTML = din;
            document.getElementById('lowball').innerHTML = "5% increase in dosage = " + newWeek1 + " mg/wk";
            document.getElementById('ball').innerHTML = "7.5% increase in dosage = " + newWeek2 + " mg/wk";
            document.getElementById('highball').innerHTML = "10% increase in dosage = " + newWeek3 + " mg/wk";
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            //document.getElementById('message').innerHTML = "Warning " + Message;
            
        }
        if(current1 >= 2 && current1 <= 3){
            newWeek1 = weeklyDose*1;
            newWeek2 = weeklyDose*1;
            newWeek3 = weeklyDose*1;
            var nextINR = "# of consecutive in-range INR's x 1 wk, max interval q4 weeks";
            var Message = "Check App";
            din = "INR is Good"

            
            document.getElementById('right').innerHTML = din;
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            
        }
        if(current1 > 3 && current1 < 3.9 ){
            newWeek1 = weeklyDose*0.95;
            newWeek2 = weeklyDose*0.925;
            newWeek3 = weeklyDose*0.9;
            var nextINR = "7 to 14 Days";
            var Message = "Check App";
            din = "Decrease Dosage by 5-10%"

            
            document.getElementById('right').innerHTML = din;
            document.getElementById('lowball').innerHTML = "5% decrease in dosage = " + newWeek1 + " mg/wk";
            document.getElementById('ball').innerHTML = "7.5% decrease in dosage = " + newWeek2 + " mg/wk";
            document.getElementById('highball').innerHTML = "10% decrease in dosage = " + newWeek3 + " mg/wk";
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            //document.getElementById('message').innerHTML = "Warning " + Message;
            
        }
        if(current1 >= 3.9){
            newWeek1 = weeklyDose*0.9;
            newWeek2 = weeklyDose*0.9;
            newWeek3 = weeklyDose*0.9;
            var nextINR = "4 to 8 Days";
            var Message = "Option to hold dose for 1 day, then decrease total weekly dose by 10%";
            din = "Decrease Dosage by 10%"

            
            document.getElementById('right').innerHTML = din;
            document.getElementById('highball').innerHTML = "10% decrease in dosage = " + newWeek3 + " mg/wk";
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            //document.getElementById('message').innerHTML = "Warning " + Message;
        }
    } 

    else if(target = 3){
        if(current1 < 1.5){
            newWeek1 = weeklyDose*1.1;
            newWeek2 = weeklyDose*1.15;
            newWeek3 = weeklyDose*1.2;
            var nextINR = "4 to 8 Days";
            var Message = "Before you change dosage, assess patient compliane - maybe does is right, but patient isn't taking it.";
            
            
            //document.getElementById('change').innerHTML = din;
           // document.getElementById('rec').innerHTML = "Recommended Weekly Dosage: " + newWeek2 + " mg/wk";
           // document.getElementById('dailydose').innerHTML = newWeek2 /7;
            din = "Increase Dosage by 10-20%"
            document.getElementById('right').innerHTML = din;
            document.getElementById('lowball').innerHTML = "10% increase in dosage = " + newWeek1 + " mg/wk";
            document.getElementById('ball').innerHTML = "15% increase in dosage = " + newWeek2 + " mg/wk";
            document.getElementById('highball').innerHTML = "20% increase in dosage = " + newWeek3 + " mg/wk";
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            //document.getElementById('message').innerHTML = "Warning " + Message;
        }
        if(current1 >= 1.5 && current1 < 2.5){
            newWeek1 = weeklyDose*1.05;
            newWeek2 = weeklyDose*1.075;
            newWeek3 = weeklyDose*1.1;
            var nextINR = "7 to 14 Days";
            var Message = "Check App";
            din = "Increase Dosage by 5-10%"

            
            document.getElementById('right').innerHTML = din;
            document.getElementById('lowball').innerHTML = "5% increase in dosage = " + newWeek1 + " mg/wk";
            document.getElementById('ball').innerHTML = "7.55% increase in dosage = " + newWeek2 + " mg/wk";
            document.getElementById('highball').innerHTML = "10% increase in dosage = " + newWeek3 + " mg/wk";
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            //document.getElementById('message').innerHTML = "Warning " + Message;
            
        }
        if(current1 >= 2.5 && current1 <= 3.5){
            newWeek1 = weeklyDose*1;
            newWeek2 = weeklyDose*1;
            newWeek3 = weeklyDose*1;
            var nextINR = "# of consecutive in-range INR's x 1 wk, max interval q4 weeks";
            var Message = "Check App";
            din = "INR is Good"

            
            document.getElementById('right').innerHTML = din;
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            
        }
        if(current1 > 3.6 && current1 < 4.5 ){
            newWeek1 = weeklyDose*0.95;
            newWeek2 = weeklyDose*0.925;
            newWeek3 = weeklyDose*0.9;
            var nextINR = "7 to 14 Days";
            var Message = "Check App";
            din = "Decrease Dosage by 5-10%"

            
            document.getElementById('right').innerHTML = din;
            document.getElementById('lowball').innerHTML = "5% decrease in dosage = " + newWeek1 + " mg/wk";
            document.getElementById('ball').innerHTML = "7.5% decrease in dosage = " + newWeek2 + " mg/wk";
            document.getElementById('highball').innerHTML = "10% decrease in dosage = " + newWeek3 + " mg/wk";
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            //document.getElementById('message').innerHTML = "Warning " + Message;
            
        }
        if(current1 >= 4.6){
            newWeek1 = weeklyDose*0.9;
            newWeek2 = weeklyDose*0.9;
            newWeek3 = weeklyDose*0.9;
            var nextINR = "4 to 8 Days";
            var Message = "Option to hold dose for 1 or two days, then decrease total weekly dose by 10%";
            din = "Decrease Dosage by 10%"

            
            document.getElementById('right').innerHTML = din;
            document.getElementById('highball').innerHTML = "10% decrease in dosage = " + newWeek3 + " mg/wk";
            document.getElementById('next').innerHTML = "Next INR = " + nextINR;
            //document.getElementById('message').innerHTML = "Warning " + Message;
        
    } 
   } 
}
    





  

