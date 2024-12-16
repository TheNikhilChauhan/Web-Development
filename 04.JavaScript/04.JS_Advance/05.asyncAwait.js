function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Chandler", url: "www.google.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data....");
    let data = await fetchUserData();
    console.log(`User data fetched: `, data);
  } catch (error) {
    throw new Error("Failed to fetch the data");
  }
}

getUserData();
