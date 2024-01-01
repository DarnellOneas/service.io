
document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (var i = 0; i < scrollLinks.length; i++) {
      scrollLinks[i].addEventListener('click', smoothScroll);
    }
    
    function smoothScroll(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      var targetPosition = targetElement.offsetTop;
      var startPosition = window.pageYOffset;
      var distance = targetPosition - startPosition;
      var duration = 1000;  // Продолжительность анимации в миллисекундах
      var startTimestamp = null;
      
      function animation(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        var progress = timestamp - startTimestamp;
        var easing = function(t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t; };  // Функция плавности анимации
        
        window.scrollTo(0, startPosition + (distance * easing(progress / duration)));
        
        if (progress < duration) {
          window.requestAnimationFrame(animation);
        }
      }
      
      window.requestAnimationFrame(animation);
    }
  });


  function showHeader() {
    document.querySelector("header").classList.toggle("collapsed");
    console.log("Привет")
  }
  
  document.querySelector("show-header").addEventListener("click", showHeader);