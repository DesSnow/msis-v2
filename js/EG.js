document.addEventListener("DOMContentLoaded", function() {
    var div = document.getElementById("madiv");
    var imagePop = document.getElementById("imagePop");
    var timeout;
  
    div.addEventListener("mouseenter", function() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        imagePop.style.display = "block";
        console.log("Image affichée !");
      }, 10000);
    });
  
    div.addEventListener("mouseleave", function() {
      clearTimeout(timeout);
      imagePop.style.display = "none";
      console.log("Image masquée !");
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var div = document.getElementById("madiv-phexa");
    var imagePop = document.getElementById("imagePop-phexa");
    var timeout;
  
    div.addEventListener("mouseenter", function() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        imagePop.style.display = "block";
        console.log("Image affichée !");
      }, 10000);
    });
  
    div.addEventListener("mouseleave", function() {
      clearTimeout(timeout);
      imagePop.style.display = "none";
      console.log("Image masquée !");
    });
  });