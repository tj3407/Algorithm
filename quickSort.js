// Pick a pivot element randomly
// all int less than pivot goes to left
// all int more than pivot goes to right
// O(nlogn) - average
// O(n2) - worst case

const arr = [15, 3, 9, 8, 5, 2, 7, 1, 6]

const quickSort = (arr, left, right) => {
    if (left >= right) return
    let pivot = arr[Math.floor((left+right) / 2)];
    console.log('pivot', pivot)
    let partitionIndex = partition(arr, left, right, pivot)
    console.log('partitionIndex', partitionIndex)
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex, right);
    return arr;
}

const partition = (arr, left, right, pivot) => {
    while (left < right) {
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

console.log(quickSort(arr, 0, arr.length-1))

const quickSort2 = (arr) => {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }


    return [...quickSort2(left), pivot, ...quickSort2(right)];
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