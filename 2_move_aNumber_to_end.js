
const arr = [6,1,6,8,10,4,15,6,3,2,6];
const target = 6;

var length = arr.length-1;

for(var i=0;i<length;i++){
    if(arr[i]==target){
        while(arr[length]==target && length>i){
            length=length-1;
        }
        arr[i] = arr[length];
        arr[length] = target;
    }
}
console.log(arr);
