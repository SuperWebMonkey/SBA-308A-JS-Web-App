/**
 *
 * @param {*} url
 *
 * Use dummy json in case this doesn't work: https://dummyjson.com/docs
 * The api that is use is jikan.moe: https://jikan.moe/ - not using
 *
 */

// fetch the data
export async function fetchData(url) {
  console.log("Retrieving the data");
  try {
    const storage = await axios.get(url);
    // console.log(storage.data.products);
    return storage;
  } catch (e) {
    console.log("Error:", e);
    console.log("Fetching the data has failed.");
  }
  return;
}

// Populate the gallery
export async function populateGallery(itemAry) {
  clear();
  const gallery = document.querySelector(".foody-gallery");
  // console.log(gallery);

  for (let i = 0; i < itemAry.length; i++) {
    const item = document.createElement("div");
    item.classList.add("item-box");

    const ul = document.createElement("ul");
    ul.textContent = itemAry[i].title;
    ul.style.fontWeight = "bold";
    item.appendChild(ul);

    const img = document.createElement("img");
    // console.log(itemAry[i].images[1]);
    img.src = itemAry[i].images[1];
    img.alt = "item image";
    item.appendChild(img);

    const p = document.createElement("p");
    p.textContent = itemAry[i].description;
    p.style.fontStyle = "italic";
    item.appendChild(p);

    const favButton = document.createElement("button");
    favButton.textContent = "fav";
    item.appendChild(favButton);

    gallery.appendChild(item);
  }
}

export function clear() {
  const gallery = document.querySelector(".foody-gallery");
  // console.log(gallery);

  if (gallery.childNodes.length === 0) {
    return;
  } else {
    while (gallery.firstChild) {
      gallery.removeChild(gallery.firstChild);
    }
  }
}

// Show all items
export async function search(name, ary) {}
