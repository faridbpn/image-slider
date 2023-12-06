let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function () {
    let slide = document.querySelector('.slide');
    let items = document.querySelectorAll('.item');
    let firstItem = items[0].cloneNode(true); // Clone the first item
    slide.appendChild(firstItem);
    slide.removeChild(items[0]);
});
