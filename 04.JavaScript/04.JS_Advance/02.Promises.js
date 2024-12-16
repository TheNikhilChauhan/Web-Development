function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let succes = true;
      if (succes) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

//consume promises
fetchData()
  .then((data) => {
    console.log(data);
    return data.toUpperCase();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });
