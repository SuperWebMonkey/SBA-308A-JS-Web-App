/**
 *
 * @param {*} url
 *
 * Use dummy json in case this doesn't work: https://dummyjson.com/docs
 * The api that is use is jikan.moe: https://jikan.moe/
 *
 * coding resource:
 * 1) https://www.youtube.com/watch?v=yVGFvr-TAwg
 *
 */

// fetch the data
export async function fetchData(url) {
  console.log("Retrieving the data");
  try {
    const actionResponse = await axios.get(url);
    console.log(actionResponse.data.data);
  } catch (e) {
    console.log("Error:", e);
    console.log("Fetching the data has failed.");
  }
}

// put it into a retrievable ds
export async function populateGallery(ary) {
  for (let i = 0; i < ary.length; i++) {}
}
