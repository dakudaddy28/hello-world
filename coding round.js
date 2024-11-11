function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    
    
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }
    
    
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
}


const nums = [4,3,2,1];
console.log(productExceptSelf(nums)); 