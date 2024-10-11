/**
 *
 * main application
 *
 */
import * as aniDB from "./aniDb.js";

console.log("hello world");
const url = `https://api.jikan.moe/v4/anime?genres=1&limit=8`;
const searchBar = document.getElementById("search-bar");
const foodGallery = document.querySelector(".food-gallery");

aniDB.fetchData(url);
