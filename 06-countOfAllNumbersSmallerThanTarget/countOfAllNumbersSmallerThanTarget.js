function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
   let count = 0;
  for(var i = 0; i < nums.length; i++){
    if(nums[i] < target){
      count++;
    }
  }
  //console.log(count);
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
