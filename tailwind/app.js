// function outer(){
//     let a="5"
//     function inner(){
//         console.log(a);
//     }
//     return inner
// }

// outer()()

// const myarr1=[true ,false, false ,true]
// let count=0
// function myarr(){
//     let index

//     for ( index = 0; index < myarr1.length; index++) {
//         if(myarr1[index] === true){
//             count++
//         }

//     }
//     return count
    
// }
// myarr()
// console.log(count);


let arr=[1,2,3,4,5]

// function reverse (arr){
//         let temp=[]
//         console.log(arr);
//         for(let i = arr.length - 1; i >= 0; i--)
//         {
//             temp.push(arr[i])
//             console.log(arr[i]);
//         }
//         return temp
// }

// let newarr=reverse([1,2,3,4])
// console.log(newarr);

// function Dupllicate (arr){
//         let temp=[]
//         console.log(arr);
//         for (let index = 0; index < arr.length; index++) {
//             // const element = arr[index];
//             if (!temp.includes(arr[index])){
//                 temp.push(arr[index])
//             }
            
//         }
//         return temp
// }

// let newarr=Dupllicate([1,2,3,4,3,5,4,4])
// console.log(newarr);
// function flattenArray(arr) {
//     let temp = [];

//     for (let index = 0; index < arr.length; index++) {
//         if (Array.isArray(arr[index])) { // Check if element is an array
//             // Flatten the nested array and concatenate it with the temp array
//             temp = temp.concat(flattenArray(arr[index]));
//         } else {
//             // If not an array, just push the element to temp
//             temp.push(arr[index]);
//         }
//     }

//     return temp;
// }

// let newarr = flattenArray([1, [2, 3], [4, [5]]]);
// console.log(newarr); // Output: [1, 2, 3, 4, 5]

// function Findindex(arr,num) {

//     for (let index = 0; index < arr.length; index++) {
//             if(arr[index] === num ){
//                 return index
//             }
//     }
//     return  -1

// }

// let newarr = Findindex([1,2,3,4,5],2);
// console.log(newarr);
// function Rotate(arr, num) {
//     // Normalize the number of rotations
//     num = num % arr.length;  // In case num is greater than the length of the array
//     console.log(num);
//     // Slice and concatenate the array
//     let temp = arr.slice(-num).concat(arr.slice(0, -num));
    
//     return temp;
// }

// let newarr = Rotate([1, 2, 3, 4, 5],8);
// console.log(newarr); // Output: [4, 5, 1, 2, 3]

function mergeSortedArrays(arr1, arr2) {
    //    const temp= [...arr1,...arr2]
       return  [...arr1,...arr2]
}

let newarr = mergeSortedArrays([1, 3, 5], [2, 4, 6]);
console.log(newarr); // Output: [4, 5, 1, 2, 3]
