function longestSubstring(arr){
let left=0,right=0,final=0;
let cha;
let ans=[]
let hashmap=new Map();
for (right=0;right<arr.length;right++){
cha=arr[right];
if(hashmap.has(cha) && hashmap.get(cha)>=left){
    left=hashmap.get(cha)+1;
}
else{
    final=Math.max(final,right-left+1)
}
hashmap.set(arr[right],right);
}
return final;
}
module.exports=longestSubstring