
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

// Обработчик события для кнопки отправки формы
// document.getElementById("form").addEventListener("submit", function(event) {
//   console.log("Отправляет")
//   event.preventDefault(); // Отменяем отправку формы по умолчанию

//   const nameInput = document.getElementById("name");
//   const phoneInput = document.getElementById("phone");

//   // const name = nameInput.value;
//   // const phone = phoneInput.value;
//   // const date = new Date().toISOString();

//   // sendRequestData(name, phone, date);

//   // // Очищаем поля ввода после отправки
//   // nameInput.value = "";
//   // phoneInput.value = "";
// });
document.getElementById("form").addEventListener("submit", function(){
  console.log("Отправляет")
});