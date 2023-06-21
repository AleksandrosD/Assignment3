function containMostWater(arr) {
let final=0,left=0,right=arr.length-1;
while (left < right) {
    final = Math.max(final, Math.min(arr[left], arr[right]) * (right - left))
    if(arr[left] <= arr[right])
        left++;
    else
        right--;
}
return final;
}
module.exports=containMostWater