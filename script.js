
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
  // document.querySelector("show-header").addEventListener("click", showHeader);

// Обработчик отправки формы
const submitForm = async (event) => {
  event.preventDefault();

  // Получение значений полей формы
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  // Ваш токен бота и идентификатор чата
  const botToken = '6831351434:AAEN12lnDeQdaQ_oR8YySxD4FgxynRhqm3I';
  const chatId = '-1001893628986';

  // Сообщение для отправки в телеграм-бота
  const message = `Имя: ${name}\nТелефон: ${phone}`;

  // Отправка сообщения в телеграм-бота
  try {
    await axios.get(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`);
    console.log('Форма успешно отправлена в телеграм-бота!');
  } catch (error) {
    console.error('Произошла ошибка при отправке формы в телеграм-бота:', error);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', submitForm);
});