// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

const areYouPlayingBanjo = (name) => {
  // Implement me
  return name[0] === "R" || name[0] === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
};

console.log(areYouPlayingBanjo("Ryan"));

// cek huruf awal, apakah 'r' atau 'R', menggunakan array (name[0]).
