const randomNumber = (Math.random() * 100);

//iterative fib sequence

function fibs(n) {

    if(n === 1) {
        return [0]
    } else if (n === 2){
        return [0, 1];
    } else {
        let fibArray = [];

        let fib1 = 0;
        let fib2 = 1; 

        fibArray.push(fib1);
        fibArray.push(fib2);
        

        for(let i=0; i < n-2; i++){
            let fib3 = fib1 + fib2;
            fib1 = fib2;
            fib2 = fib3;
            
            fibArray.push(fib3);
        }

        console.log(fibArray);

        return fibArray;
    }
}
function fibsRecursive(n){
    console.log("this was printed recursively");
     
    if(n < 2){
        return [1]; 
    } else if (n < 3) {
        return [1, 1];
    }
    else {
        const arr = fibsRecursive(n-1);
        arr.push(arr[n-2] + arr[n-3]);
        return arr;
    }
}

// console.log(fibs(8));
// console.log(fibsRecursive(7));

function mergeSort(arr){
    const mid = Math.floor(arr.length / 2);
    const leftList = arr.slice(0, mid);
    const rightList = arr.slice(mid);

    if (arr.length === 1){
        return arr;
    } else {
        const result = merge(mergeSort(leftList), (mergeSort(rightList)));
        console.log(result);
        return result;
    }
}

function merge(leftList, rightList){
    const sortedArray = [];
    let i = 0;
    let j = 0;

    while (i < leftList.length && j < rightList.length) {
        if (leftList[i] < rightList[j]) {
            sortedArray.push(leftList[i]);
            i++;
        } else {
            sortedArray.push(rightList[j]);
            j++;
        }
    }

    const leftUnfinished = leftList.slice(i);
    const rightUnfinished = rightList.slice(j);

    return sortedArray.concat(leftUnfinished).concat(rightUnfinished);
}

mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
mergeSort([105, 79, 100, 110]);