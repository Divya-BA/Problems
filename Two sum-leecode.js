// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
function sum(nums, target) {
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return[i,j];
            }
        }
    }
}
sum([2,7,11,15],[0,1]);

function Sum(nums,target){
    let map=new Map();
    for(var i=0;i<nums.length;i++){
        let complement=nums[i]-target;
        if(map.has(complement))
        {
            return [map.get(complement),i]
        }
        map.set(num[i],i);
    }

}
Sum([2,7,11,15],[0,1]);