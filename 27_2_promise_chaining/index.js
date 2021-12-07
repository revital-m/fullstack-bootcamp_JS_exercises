function makeAllCaps(arr) {
  const strOnlyArr = arr.filter((item) => typeof item === "string");
  return new Promise((resolve, reject) => {
    if (strOnlyArr.length === arr.length) {
      const upperArr = arr.join(",").toUpperCase().split(",");
      resolve(upperArr);
    } else {
      reject(arr);
    }
  });
}

function sortWords(arr) {
  return new Promise((resolve, reject) => {
    resolve(arr.sort());
  });
}

const arr1 = ["hello", "world", "learning", "promise"];
const arr2 = ["not", "all", "str", 10];

makeAllCaps(arr1)
  .then((data) => {
    return sortWords(data);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(
      `the array: [${data}], includes at least one item that is not a string.`
    );
  });
