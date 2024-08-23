// Выбираем все элементы, которые нужно анимировать
const sections = document.querySelectorAll('section');

// Функция для добавления класса анимации
function animateSection(el) {
  el.classList.add('animate');
}

// Функция для проверки видимости элемента
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight + document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth + document.documentElement.clientWidth)
  );
}

// Проверяем видимость элементов при прокрутке страницы
window.addEventListener('scroll', () => {
  sections.forEach((el, index) => {
    if (isElementInViewport(el)) {
      setTimeout(() => {
        animateSection(el);
      }, index * 200); // Задержка в 200 миллисекунд для каждого элемента
    }
  });
});

// Параллакс
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const header = document.querySelector('header');
  header.style.backgroundPositionY = `${scrollPosition * 0.3}px`; // Изменяем положение фона 
});

