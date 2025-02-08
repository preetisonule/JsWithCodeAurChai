document.getElementById("title").getAttribute("id");
// 'title'
document.getElementById("title").getAttribute("class");
// heading
document.getElementById("title").setAttribute("class", "test");
// overwrites original code
const title = document.getElementById("title");
title.style.backgroundColor = "green"
// .style ==> all styling tags

// title.textContent  ==> all text content even hidden also.
// title.innerText  ==> only visible text.
// title.innerHTML  ==> manipulate HTML.

document.querySelector("h1");
// selects first h1.
ocument.querySelector("#title");
// selects first id named title.