/**
 *
 * Bookmarks/favorite the item
 *
 */

import * as aniDB from "./aniDb.js";

const bmUrl = `https://dummyjson.com/products/add`;
let bmList = [];

function noBookmarks() {
  aniDB.clear();
  const gallery = document.querySelector(".foody-gallery");
  // console.log("reached");
  const item = document.createElement("div");
  item.classList.add("item-box");

  const h2 = document.createElement("h2");
  h2.textContent = "Book Marks is Empty";
  h2.style.color = "red";
  item.appendChild(h2);

  gallery.appendChild(item);
}

// use post
export async function addBookmark(item) {
  const inList = bmList.some((obj) => obj.title === item.title);
  if (!inList) {
    const newItem = createItem(item);
    console.log(newItem);
    const dummyPost = await postItem(newItem);
    // console.log("post list:", dummyPost);
    dummyPost.images = [];
    dummyPost.images.push("random image data");
    dummyPost.images.push(item.images[1]);
    // console.log(dummyPost.img);
    bmList.push(dummyPost);
  }

  console.log(bmList);
}

function createItem(item) {
  return {
    id: item.id,
    title: item.title,
    // img: item.images[1],
    description: item.description,
  };
}

// Post the newly created object to add of dummyjson
async function postItem(obj) {
  const data = await fetch(bmUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: obj.id,
      title: obj.title,
      img: obj.img,
      description: obj.description,
    }),
  }).then((res) => res.json());

  return data;
}

// use delete
export async function removeBookmark(item) {
  bmList.forEach((bmItem, index) => {
    if (bmItem.title === item.title) {
      bmList.splice(index, 1);
    }
  });

  console.log(bmList);
}

export async function showBookmarks() {
  if (bmList.length !== 0) {
    await aniDB.populateGallery(bmList);
  } else {
    noBookmarks();
  }
}
