document.addEventListener('DOMContentLoaded', () => {
  const dropmenu = document.querySelector('.dropmenu');
  const menu = document.querySelectorAll('.dropmenu li a');
  // Hide all menu items
  const menuArray = Array.from(menu);
  menuArray.forEach(item => {
    item.style.display = 'none';
  });

  // Show/hide menu items on click
  let showMenu = false;
  dropmenu.addEventListener('click', () => {
    if (showMenu) {
      // Hide menu items
      menuArray.forEach((item, index) => {
        item.style.animation = `slideUp 1s ${index * 0.2}s forwards`;
        item.style.display = 'none';
      });
      showMenu = false;
    } else {
      // Show menu items
      menuArray.forEach((item, index) => {
        item.style.display = 'block';
        item.style.animation = `slideDown 2s ${index * 0.1}s forwards`;
      });
      showMenu = true;
    }
  });

  // Hide menu items when the mouse leaves the dropdown
  dropmenu.addEventListener('mouseleave', () => {
    if (showMenu) {
      menuArray.forEach((item, index) => {
        item.style.animation = `slideUp 5s ${index * 5}s forwards`;
        item.style.display = 'none';
      });
      showMenu = false;
    }
  });
  // Получаем элементы меню
const menuUl = document.querySelector("ul");
const menuItems = document.querySelectorAll("li");

// Создаем элементы для бургер-меню
const burgerIcon = document.createElement("div");
const burgerMenu = document.createElement("div");
const burgerItems = document.createElement("div");

// Добавляем классы стилей
burgerIcon.classList.add("burger-icon");
burgerMenu.classList.add("burger-menu");
burgerItems.classList.add("burger-items");

// Добавляем элементы в DOM
menuUl.parentNode.insertBefore(burgerIcon, menu);
burgerMenu.appendChild(burgerItems);
menuUl.parentNode.insertBefore(burgerMenu, menu.nextSibling);

// Заполняем бургер-меню
menuItems.forEach(item => {
  const menuItem = document.createElement("div");
  menuItem.innerText = item.innerText;
  burgerItems.appendChild(menuItem);
});

// Обработчик клика на бургер-иконку
burgerIcon.addEventListener("click", () => {
  burgerMenu.classList.toggle("show");
});

});
