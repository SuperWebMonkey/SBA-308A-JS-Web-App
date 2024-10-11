console.log("hello world");
const url = "";
const API_KEY = "";

async function getData() {
  const foodData = await axios
    .get(url)
    .then((response) => {
      console.log(response.data); // Handle the data
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
