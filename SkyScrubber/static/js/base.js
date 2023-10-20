// Получаем все элементы с классом "element"
var elements = document.querySelectorAll(".main-box-pain-m");
var elements_image = document.getElementsByClassName("image")
console.log(elements_image)
// Создаём функцию для обработки события наведения мыши

function removeClassList(el) {
    el.classList.remove('image-no-activ');
}

function addClassList(el) {
    el.classList.add('image-no-activ');
}
console.log(elements)
// Добавляем обработчик события наведения мыши к каждому элементу

elements.forEach(element => {
    console.log(element)
    element.addEventListener('mouseover', removeClassList(element));
  
    element.addEventListener('mouseout', addClassList(element));
  });


// Добавляем обработчики событий для каждого элемента
