function distanceFromHqInBlocks(y,x=42){
    return Math.abs(x-y);
}
function distanceFromHqInFeet(y){
    const blocks=distanceFromHqInBlocks(y);
    const feet= blocks * 264
    return feet
    }
 function distanceTravelledInFeet(start,destination){

return Math.abs(start-destination)*264;
 }
 function calculatesFarePrice(start,destination){
const distance= Math.abs (destination-start)*264 
    let charge;
    if(distance<=400){
        charge= 0;
    }
    else if (distance > 400 && distance <= 2000){
        charge= (distance - 400)*0.02;//cents to dollars//
    }
    else if (distance > 2000 && distance <= 2500){
        charge = 25;
    }
    else {
        charge = "cannot travel that far";
    }
    return charge;
}

        
   