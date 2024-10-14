/**
 *
 * main application
 *
 */
import * as aniDB from "./aniDb.js";
import * as bookmark from "./bookmark.js";

console.log("Starting the application");
const url = `https://dummyjson.com/products/category/smartphones`;
const searchBar = document.getElementById("search-bar");

function search(name, allItems) {
  aniDB.search(name, allItems);
}

async function main() {
  const storageList = await aniDB.fetchData(url);
  //   console.log(storageList);
  const allItems = storageList.data.products;
  //   console.log(allItems);

  await aniDB.populateGallery(allItems);
}

main();
