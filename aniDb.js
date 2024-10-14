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
    const actionResponse = await axios.get(url);
    console.log(actionResponse.data);
  } catch (e) {
    console.log("Error:", e);
    console.log("Fetching the data has failed.");
  }
}

// put it into a retrievable ds
export async function populateGallery(ary) {
  for (let i = 0; i < ary.length; i++) {}
}

// show all anime/movies
export async function showAll(ary) {}
