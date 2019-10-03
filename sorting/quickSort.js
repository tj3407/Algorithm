// Pick a pivot element randomly
// all int less than pivot goes to left
// all int more than pivot goes to right
// O(nlogn) - average
// O(n2) - worst case

const arr = [100,77,5,2,4,1,3,6,0,67,203]

const quickSort = (arr) => {
    let left = 0;
    let right = arr.length-1;
    recursion(arr, left, right);
    return arr; 
}

const recursion = (arr, left, right) => {
    if (left >= right) return

    let partitionIndex = partition(arr, left, right)

    recursion(arr, left, partitionIndex - 1);
    recursion(arr, partitionIndex, right);
    return arr;
}

const partition = (arr, left, right) => {
    let pivot = arr[Math.floor((left+right) / 2)];
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
                                            // [15, 1, 2, 5, 8, 9, 7, 3, 6]
        while (arr[right] > pivot) {
            right--;
        }

        if (left <= right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return left;        
}

console.log('quicksort1:', quickSort(arr))

const quickSort2 = (arr) => {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // console.log(left, right)

    return [...left, ...right];
}

console.log('quicksort2', quickSort2(arr));

const quickSort3 = (arr, left, right) => {
    if (left >= right) return;
    if (left < right) {
        let pivot = partition3(arr, left, right);
        quickSort3(arr, left, pivot -1);
        quickSort3(arr, pivot + 1, right);
    }
}

const partition3 = (arr, left, right) => {
    if (arr.length <= 1) return;

    while (left !== right) {
        // while (left !== right) {
            if (arr[left] < arr[right]) {
                left++;
            } else {
                right--;
            }
        // } 
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
    return left;
}

console.log('quicksort3', quickSort3(arr, 0, arr.length-1))