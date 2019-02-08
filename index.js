// 1
const arr = [777771,17,71,7,3,27];
function getSevenCol(arr){
    let newStr = arr.join('');
    return newStr.split('7').length - 1;


}
console.log(getSevenCol(arr));


// 2
const arrStr = ["a", "b", "c", "d", "e", "f"];
function arrToString(arr) {
    let newStr = [];


    arr.forEach((value, i, arr)=>{
            newStr.push(arr[i]);
            newStr.push(arr[arr.length - i - 1])

    });

    return newStr.slice(0, newStr.length/2).join('')
}
console.log(arrToString(arrStr));