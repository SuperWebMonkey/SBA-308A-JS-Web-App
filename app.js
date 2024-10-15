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
const wishlist = document.querySelector(".wishlist");

function useBookmark() {
  bookmark.showBookmarks();
}

async function searchFilter(title, allItems) {
  let filteredItems = [];

  // check why filter doesn't work

  allItems.forEach((item) => {
    if (item.title.toLowerCase().includes(title.toLowerCase())) {
      filteredItems.push(item);
    }
    // item.title.toLowerCase().includes(title.toLowerCase());
  });

  //   console.log(filteredItems);
  await aniDB.populateGallery(filteredItems);
}

async function main() {
  const storageList = await aniDB.fetchData(url);
  //   console.log(storageList);
  const allItems = storageList.data.products;
  //   console.log(allItems);

  await aniDB.populateGallery(allItems);

  searchBar.addEventListener("input", async (e) => {
    e.preventDefault();
    const searchTerm = e.target.value; //searchBar.value;
    // console.log("search term", searchTerm);
    await searchFilter(searchTerm, allItems); // Call filter function on input
  });

  wishlist.addEventListener("click", (e) => {
    e.preventDefault();
    alert("clicked");
  });
}

// main function
main();

// events
document.addEventListener("DOMContentLoaded ", () => {
  console.log("DOM loading");
  // Add event listener to search bar
  //   searchBar.addEventListener("input", (e) => {
  //     e.preventDefault();
  //     const searchTerm = e.target.value; //searchBar.value;
  //     console.log("search term", searchTerm);
  //     // const storageList = await aniDB.fetchData(url);
  //     // const allItems = storageList.data.products;
  //     // searchFilter(searchTerm, allItems); // Call filter function on input
  //   });
});
