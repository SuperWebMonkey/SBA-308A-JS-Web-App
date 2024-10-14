/**
 *
 * main application
 *
 */
import * as aniDB from "./aniDb.js";
import * as bookmark from "./bookmark.js";

console.log("hello world");
const url = `https://dummyjson.com/products/category/smartphones`;
const searchBar = document.getElementById("search-bar");
const foodGallery = document.querySelector(".food-gallery");

aniDB.fetchData(url);
