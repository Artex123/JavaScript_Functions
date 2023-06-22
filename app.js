console.log("Hello World!\n==========\n");

// Exercise 1 Section
function printOdds(count){
    for(let i = 1; i <= count; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}
printOdds(10);
// Exercise 2 Section
function checkAge(name, age){
    let drive = `Neat ${name}, you can drive (hopefully safely).`;
    let noDrive = `Access denied ${name}, you do not have the age clearance to drive`;
    if (age < 16){
    console.log(noDrive)   
    }else{
        console.log(drive)
    }
}
checkAge("Ben",13)
checkAge("Josh",18)

//Exercise 3 Section
function areaCheck(x,y){
    if(x > 0 && y > 0){
        return 1;
    }else if(x < 0 && y > 0){
        return 2;
    }else if(x < 0 && y < 0){
        return 3;
    }else if(x > 0 && y < 0){
        return 4;
    }else if(x == 0 && y != 0){
        return "X Axis"
    }else if(x != 0 && y == 0){
        return "Y Axis"
    }else{
        return "Center"
    }
}
console.log(areaCheck(1,1));
console.log(areaCheck(-1,1));
console.log(areaCheck(-1,-1));
console.log(areaCheck(1,-1));
console.log(areaCheck(0,-1));
console.log(areaCheck(1,0));
console.log(areaCheck(0,0));