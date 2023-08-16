//find the pairs of numbers whose sum is given number

var array = [6,5,4,3,9,8,0]
const givenNumb = 11;

//finding

for(var i=0;i<array.length;i++){

    for(var j=i;j<array.length;j++){
        if(i!=j&&array[i]+array[j]==givenNumb){
            console.log(`${array[i]},${array[j]}`);
        }
    }

}


//WE CAN ALSO FIND THIS USING SET variable in java and python and c#
//https://youtu.be/W8epk2Do3YA?t=1347