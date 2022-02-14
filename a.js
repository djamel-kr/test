 // array
 const array = [9, 1, 2]

 // iterating over array
 for (let i = 0; i < array.length; ) {
     // compare
     if (array[i] >= array[i + 1]) {
         // increase next number by 1
         array[i + 1] += 1
     } else {
      i++
     }
 }

 console.log(array);
