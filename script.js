// ES.1
window.onload = function() {
  let twitter = document.querySelector('.blog-sidebar div:last-child li:nth-of-type(2)');
  switch (twitter) {
      case null:
          console.error("Elemento non trovato.");
          break;
      default:
          twitter.remove();
          break;
  }
};

// ES.2
document.querySelectorAll(".stretched-link").forEach(link => {
  link.addEventListener("click", function(event) {
      event.preventDefault(); // Impedisce al browser di seguire il link
      this.closest(".col-md-6").remove(); // Rimuove l'elemento genitore più vicino con la classe .col-md-6
  });
});
