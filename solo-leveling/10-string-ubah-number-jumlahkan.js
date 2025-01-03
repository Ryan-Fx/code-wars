const sumMix = (x) => x.reduce((acc, cur) => acc + +cur, 0); // +cur is the same as Number(cur)

console.log(sumMix([9, 3, "7", "3"])); // 22
