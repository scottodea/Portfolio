window.onscroll = function() {myFunction()};
        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;
        function myFunction() {
          if (window.pageYOffset >= 10)
           {
            navbar.classList.add("sticky")
          } else {
            navbar.classList.remove("sticky");
          }
        }
particlesJS.load('particles-js', 'https://api.myjson.com/bins/197pms', function() {
console.log('callback - particles.js config loaded');
  });