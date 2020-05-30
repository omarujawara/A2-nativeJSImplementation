/********************* ForEach ****************************/
const myEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};
//test
myEach([1, 2, 3, 4, 5], (element) => console.log(element * 2));

/********************** Map ***************************/
const myMap = (arr, callback) => {
  let mapArr = [];
  for (let i = 0; i < arr.length; i++) {
    mapArr.push(callback(arr[i]));
  }
  return mapArr;
};
//test
console.log(myMap([1, 2, 3, 4, 5], (element) => element * 2));

/********************** Filter ***************************/

const myFilter = (arr, callback) => {
  let filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) filterArr.push(arr[i]);
  }
  return filterArr;
};
//test
console.log(myFilter([1, 2, 3, 4, 5], (element) => element % 2 === 0)); //even?

/********************** Some ***************************/

const mySome = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) return true;
  }
  return false;
};
//test
console.log(mySome([1, 2, 3, 4, 5], (element) => element >= 3));

/************************ Every *************************/

const myEvery = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) return false;
  }
  return true;
};
//test
console.log(myEvery([1, 2, 3, 4, 5], (element) => element >= 3));

/*********************** Reduce **************************/

const myReduce = (iter, callback, acc) => {
  for (let i of iter) {
    acc = callback(acc, i);
  }
  return acc;
};
//test
console.log(myReduce([3, 5, 2], (acc, elem) => acc + elem, 0));

/*********************** Include **************************/
const myIncludes = (arr, target) => {
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) found = true;
  }
  return found;
};
//test
console.log(
  myIncludes([1, 2, 3, 4, 5, 6], 4) + "  " + myIncludes([1, 2, 3, 4, 5, 6], 7)
);

/*********************** IndexOf **************************/
const myIndexOf = (arr, element) => {
  let position = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      position = i;
      break;
    }
  }
  return position;
};
//test
console.log(
  myIndexOf([2, 4, 6, 4, 9], 4) + "  " + myIndexOf([2, 4, 6, 8, 9], 1)
);

/*********************** Push **************************/
const myPush = (arr, element) => {
  arr[arr.length] = element;
};
//test
let ls = [];
myPush(ls, 34);
myPush(ls, 43);
myPush(ls, "Omaru");
console.log(ls);

/*********************** LastOfIndex **************************/
const myUnshift = (arr, element) => {
  let position = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) position = i;
  }
  return position;
};
//test
console.log(
  myUnshift([2, 4, 6, 4, 9], 4) + "  " + myUnshift([2, 4, 6, 8, 9], 1)
);

/*********************** Object.keys() **************************/
var obj = { one: 1, two: 2, three: 3 };

Object.prototype.grabKeys = () => {
  let keys = [];
  for (const key in this) {
    keys.push(this);
  }
  return keys;
};

//test
console.log(obj.grabKeys());

/*********************** Object.values **************************/
Object.prototype.grabValues = () => {
  let vals = [];
  for (const val in this) {
    vals.push(this[val]);
  }
  return vals;
};
//test
console.log(obj.grabValues());

// support function swap
Array.prototype.swap = function (x, y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
};
function moveZeros(nums) {
  for (let j = 0; j < nums.length - 1; ++j) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === 0) {
        nums.swap(nums[i], nums[j]);
        // console.log(nums[i], nums[j]);
      }
    }
  }
}

//test
let lst = [0, 1, 0, 3, 12];
moveZeros(lst);
console.log(lst); // expected output -> [1,3,12,0,0]
