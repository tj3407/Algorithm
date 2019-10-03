const height = [0,1,0,2,1,0,1,3,2,1,2,1]

function trappingWater(height) {
    let water = 0;
    let left = 0;
    let right = height.length-1;

    let leftWall = 0;
    let rightWall = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] > leftWall) {
                leftWall = height[left];
            } else {
                water += leftWall - height[left];
            }
            left++;
        } else {
            if (height[right] > rightWall) {
                rightWall = height[right];
            } else {
                water += rightWall - height[right];
            }
            right--;
        }
    }
    return water
}

console.log(trappingWater(height))