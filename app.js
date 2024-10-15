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
const bmEl = document.querySelector(".bookmark");

function search(name, allItems) {
  aniDB.search(name, allItems);
}

function useBookmark() {
  bookmark.showBookmarks();
}

async function searchFilter(title, allItems) {
  const searchedItems = allItems.filter((item) => {
    item.title.toLowerCase().includes(title.toLowerCase());
  });

  await aniDB.populateGallery(searchedItems);
}

async function main() {
  const storageList = await aniDB.fetchData(url);
  //   console.log(storageList);
  const allItems = storageList.data.products;
  //   console.log(allItems);

  await aniDB.populateGallery(allItems);
}

// events
document.addEventListener("DOMContentLoaded ", async () => {
  // Add event listener to search bar
  searchBar.addEventListener("input", async (e) => {
    e.preventDefault();
    const searchTerm = searchBar.value;
    const storageList = await aniDB.fetchData(url);
    const allItems = storageList.data.products;
    searchFilter(searchTerm, allItems); // Call filter function on input
  });
});

main();
