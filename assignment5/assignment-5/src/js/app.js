/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Ashmeet Kaur
 *      Student ID: 122421217
 *      Date:       April 7,2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");
//for menu

function createSongCard(chosenArtist) {
  //document.getElementById("songs").innerHTML = "";
  document.getElementById("container").innerHTML = "";
  //works on id=selected-artist
  const headerId = document.getElementById("selected-artist");
  headerId.innerHTML = chosenArtist.name;
  let lengthOfLinks = chosenArtist.links.length;
  let count = 0;
  var text = document.createTextNode(" (");
  headerId.append(text);
  chosenArtist.links.map((i) => {
    //works on <a href=""></a>
    count++;
    var delim = document.createTextNode(", ");
    let anchorTag = document.createElement("a");
    anchorTag.setAttribute("href", i.url);
    anchorTag.textContent = i.name;
    headerId.append(anchorTag);
    if (count < lengthOfLinks) headerId.append(delim); //add delimiter(',') after each link name
  });
  text = document.createTextNode(")");
  headerId.append(text);
  //id=selected-artist updated
  //the following code snippet works to filter songs by chosen artist using artists[].id and songs.flagged
  var chosenSongs = window.songs.filter(
    (i) => i.artistId === chosenArtist.id && i.flagged === false
  );
  //the following code dynamically adds song cards by chosen artist to id='container'
  chosenSongs.forEach((song) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let cardDetails = document.createElement("div");
    cardDetails.classList.add("cardDetails");
    let productImg = document.createElement("img");
    productImg.src = song.imageUrl;
    card.appendChild(productImg);
    let title = document.createElement("h2");
    title.textContent = song.title;
    let year = document.createElement("time");
    year.textContent = "Year: " + song.year;
    let duration = document.createElement("span");
    let time =
      Math.floor(song.duration / 60) + ":" + (song.duration % 60).toString().padStart(2, "0");
    duration.textContent = "Duration: " + time;
    cardDetails.appendChild(title);
    cardDetails.appendChild(year);
    cardDetails.appendChild(document.createElement("br"));
    cardDetails.appendChild(duration);
    card.appendChild(cardDetails);
    document.getElementById("container").appendChild(card);
  });
}
//the following code invokes dom elements after the page has been loaded
//it creates button and assigns it text
//and then adds click event to call createSongCard() with default parameter as first object in artists[]
//in my browsers I noticed that live-reLoad was only enabled in firefox and not in chrome or microsoft edge
document.addEventListener("DOMContentLoaded", function () {
  window.artists.forEach((artist) => {
    let button = document.createElement("button");
    button.innerHTML = artist.name;
    document.getElementById("menu").appendChild(button);
    button.addEventListener("click", function () {
      createSongCard(artist);
    });
  });
  createSongCard(window.artists[0]);
});
