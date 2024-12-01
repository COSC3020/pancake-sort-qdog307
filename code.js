function flip(array, n) {
    let left = 0;
    let right = n - 1;
    while (left < right) {
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
    }
}

function pancakeSort(array) {
    const n = array.length;
    for (let size = n; size > 1; size--) {
        let maxIndex = 0;
        for (let i = 1; i < size; i++) {
            if (array[i] > array[maxIndex]) {
                maxIndex = i;
            }
        }
        if (maxIndex === size - 1) continue;
        if (maxIndex > 0) {
            flip(array, maxIndex + 1);
        }
        flip(array, size);
    }
    return array;
}

