var navListDiv = document.getElementById("navListDiv"),
  mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
  "use strict";

  navListDiv.classList.toggle("show_list");
  mediaButton.classList.toggle("active");
};
