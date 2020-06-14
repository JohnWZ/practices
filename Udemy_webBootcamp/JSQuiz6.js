
function printReverse(arr) {
    for (var i = arr.length-1; i >=0; i-- ) {
        console.log(arr[i]);
    }
}

printReverse([1,2,3,4]);

function isUniform(arr) {
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false;
        }
    }
    return true;
}

console.log(isUniform([1,1,1,1]));
console.log(isUniform(['a','a','b']));
// 在console输入isUniform([1,2,3])进行测试

function sumArray(arr) {
    var sum=0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1,2,3,4]));

function sumArray2(arr) {
    var sum=0;
    arr.forEach(function (i) {
        sum += arr[i];
    })
}
console.log(sumArray([1,3,5,7]));

function max(arr) {
    var theMax = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (theMax < arr[i]) {
            theMax = arr[i]
        }
    }
    return theMax;
}

console.log(max([9,14,3,4,54,3]));
