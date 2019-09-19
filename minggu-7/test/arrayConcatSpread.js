const arr1 = [1, 2, 3 ];
const arr2 = [4, 5, 6];

const obj1 ={name: 'Coba', age: 25};
const obj2 ={address: 'Jakarta', gender: 'Men'};

//Penggabungan object menggunakan spread operator
const merge = {...obj1, ...obj2};

/*Console log array concat, untuk menampilkan penggabungan arr1 & arr2*/
console.log(arr1.concat(arr2));
console.log(merge);