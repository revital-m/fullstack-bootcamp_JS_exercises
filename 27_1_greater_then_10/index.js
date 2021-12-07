function greaterThan10(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(num);
    } else {
      reject(num);
    }
  });
}

greaterThan10(11)
  .then((data) => {
    console.log(`${data} is greater than 10.`);
  })
  .catch((data) => {
    console.log(`${data} is smaller or equal to 10.`);
  });
