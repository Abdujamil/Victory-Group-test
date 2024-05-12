// Функция обновления отображения таймера обратного отсчета
function updateCountdown() {
  // Получаем текущую дату и время
  const now = new Date();

  // Вычисляем будущую дату и время
  const futureDate = new Date(now);
  futureDate.setDate(now.getDate() + 11);
  futureDate.setHours(now.getHours() + 17);
  futureDate.setMinutes(now.getMinutes() + 19);
  futureDate.setSeconds(now.getSeconds() + 1); // Увеличиваем секунды на 1

  // Вычисляем разницу между будущей и текущей датой в миллисекундах
  const timeDifference = futureDate - now;

  // Вычисляем количество дней, часов, минут и секунд до будущей даты
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Обновляем отображение таймера на странице
  const countdownContainer = document.querySelector(".countdown-container");
  countdownContainer.innerHTML = `
        <div class="countdown-item">
          <div class="countdown-number">${days}</div>
          <div class="countdown-label">Дней</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-number">${hours}</div>
          <div class="countdown-label">Часов</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-number">${minutes}</div>
          <div class="countdown-label">Минут</div>
        </div>
        <div class="countdown-item">
          <div class="countdown-number">${seconds}</div>
          <div class="countdown-label">Секунд</div>
        </div>
      `;
}

// Обновляем таймер каждую секунду
// setInterval(updateCountdown, 1000);

// Запускаем функцию обновления таймера для первоначальной установки значений
updateCountdown();

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger_menu");
  const menu = document.querySelector(".menu");
  const menuCloseBtn = document.querySelector(".menu_close_btn");

  // Обработчик события для кнопки бургера
  burgerMenu.addEventListener("click", function () {
    menu.style.display = "flex";
  });

  // Обработчик события для кнопки закрытия меню
  menuCloseBtn.addEventListener("click", function () {
    menu.style.display = "none";
  });


  // Modal block open/close script

  const openModalBtn = document.querySelector(".form_block1_car_inpt");
  const closeModalBtn = document.querySelector(".cars_modal_btn_close");
  const modal = document.querySelector(".cars_modal_block");

  openModalBtn.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // END

  // Modal block category scripts

  const modalBtns = document.querySelectorAll(".modal-btn");
  const modalTabs = document.querySelectorAll(".modal-tab");

  // По умолчанию скрываем все блоки содержимого кроме первого и делаем первую кнопку активной
  for (let i = 1; i < modalTabs.length; i++) {
    modalTabs[i].style.display = "none";
  }
  modalBtns[0].classList.add("active");

  modalBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault(); // Предотвращаем стандартное действие браузера

      // Удаляем класс active у всех кнопок и скрываем все блоки содержимого
      modalBtns.forEach((btn) => btn.classList.remove("active"));
      modalTabs.forEach((tab) => (tab.style.display = "none"));

      // Добавляем класс active к текущей кнопке
      this.classList.add("active");

      const targetId = this.getAttribute("data-target");

      modalTabs.forEach((tab) => {
        if (tab.id === targetId) {
          tab.style.display = "grid";
        }
      });
    });
  });

  // END

  // Input type range

  const loanDurationInput = document.getElementById("range1");
  const loanDurationValue = document.getElementById("loan-duration-value1");

  loanDurationInput.addEventListener("input", function () {
    const currentValue = parseFloat(this.value);
    const maxValue = 80;
    const maxValuePercent = 10;
    const rublesValue = (currentValue / maxValue) * maxValuePercent * 50000;

    loanDurationValue.textContent = rublesValue.toLocaleString() + " ₽";
  });

  const sliders = document.querySelectorAll("input[type='range']");
  const sliderValues = document.querySelectorAll(".value");

  sliders.forEach((slider, index) => {
    slider.addEventListener("input", (event) => {
      updateSlider(event.target, sliderValues[index]);
    });
  });

  function updateSlider(slider, sliderValue) {
    const tempSliderValue = slider.value;

    sliderValue.textContent = tempSliderValue;

    const progress = (tempSliderValue / slider.max) * 100;

    slider.style.background = `linear-gradient(to right, #D40200 ${progress}%, #ccc ${progress}%)`;
  }
});
