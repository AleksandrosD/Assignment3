function twoSums(arr,target){
let hashmap=new Map();
for(let i=0;i<arr.length;i++){
    
    if(hashmap.has(target-arr[i])){
        return [hashmap.get(target-arr[i]),i]
    }
    
    hashmap.set(arr[i],i);
}
return -1;
}
module.exports=twoSums