document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop the page from refreshing

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  alert("Thank you, " + name + "! We will contact you at " + email + ".");

  this.reset(); // Optional: clears the form
});
