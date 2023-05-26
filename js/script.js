// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {

    // Add a click event listener to each navigation link
    var navLinks = document.querySelectorAll('nav a');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function(event) {
        // Prevent the default behavior of the link
        event.preventDefault();
        // Get the target page URL from the link's href attribute
        var targetUrl = this.getAttribute('href');
        // Use the History API to change the URL without reloading the page
        window.history.pushState(null, null, targetUrl);
        // Load the target page using AJAX and replace the content of the <main> element
        var xhr = new XMLHttpRequest();
        xhr.open('GET', targetUrl, true);
        xhr.onload = function() {
          if (this.status == 200) {
            document.querySelector('main').innerHTML = this.responseText;
          }
        };
        xhr.send();
      });
    }
  
  });
  