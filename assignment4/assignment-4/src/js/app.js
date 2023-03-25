/**
 * WEB222 – Assignment 04
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
 *      Date:       March 24,2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");
//for menu

function tableItems(chosenArtist) {
  document.getElementById("songs").innerHTML = "";
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
  //the following code dynamically adds songs by chosen artist to id='songs'
  chosenSongs.forEach((song) => {
    let tr = document.createElement("tr");
    tr.addEventListener("click", function () {
      console.log(song);
    });
    let title = document.createElement("td");
    title.textContent = song.title;
    let year = document.createElement("td");
    year.textContent = song.year;
    let duration = document.createElement("td");
    let time =
      Math.floor(song.duration / 60) + ":" + (song.duration % 60).toString().padStart(2, "0");
    duration.textContent = time;
    tr.appendChild(title);
    tr.appendChild(year);
    tr.appendChild(duration);
    document.getElementById("songs").appendChild(tr);
  });
}
//the following code invokes dom elements after the page has been loaded
//it creates button and assigns it text
//and then adds click event to call tableItems() with default parameter as first object in artists[]
//in my browsers i noticed that live-reLoad was only enabled in firefox and not in chrome or microsoft edge
document.addEventListener("DOMContentLoaded", function () {
  window.artists.forEach((artist) => {
    let button = document.createElement("button");
    button.innerHTML = artist.name;
    document.getElementById("menu").appendChild(button);
    button.addEventListener("click", function () {
      tableItems(artist);
    });
  });
  tableItems(window.artists[0]);
});
