const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function merge(arr1, arr2) {
    
    let newArr = [];
    let indexA = 0;
    let indexB = 0;

    while(indexA < arr1.length && indexB < arr2.length) {
        let elementA = arr1[indexA];
        let elementB = arr2[indexB];

        if (elementA <= elementB) {
            newArr.push(elementA);
            indexA++;
        } else {
            newArr.push(elementB);
            indexB++;
        }
    }

    while(indexA < arr1.length) {
        newArr.push(arr1[indexA]);
        indexA++;
    }

    while(indexB < arr2.length) {
        newArr.push(arr2[indexB])
        indexB++;
    }

    return newArr;
}

console.log(mergeSort(['2','1','5','3','7']))
console.log(mergeSort(['1','4','5','2','3','0']))