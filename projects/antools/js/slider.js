const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
// Задаємо початковий стан (колір) кнопок < та >
prevBtn.querySelector('path').setAttribute('stroke', 'rgba(255, 255, 255, 0.28)');
nextBtn.querySelector('path').setAttribute('stroke', '#FF6E30');
prevBtn.disabled = true; // Робимо кнопку < неактивной
const slides = document.querySelectorAll('.slider .team-item');
// Пагінація
const paginationFirst = document.getElementById('first');
const paginationSecond = document.getElementById('second');
const paginationThird = document.getElementById('third');
const slideWidth = slides[0].clientWidth;
// console.log("slideWidth:", slideWidth);
let currentIndex = 0;

function slideRight() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
        // console.log("currentIndex->slideRight;", currentIndex);
    }
    updateSlider();
}

function slideLeft() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateSlider();
}

function updateSlider() {
    const newPosition = currentIndex * slideWidth;
    slider.style.transform = `translateX(${newPosition}px)`;
    // +++++ зміна стану та кольору копок "<" і ">" та Пагінація
    if (currentIndex === 0) {
        // зміна кольору:
        prevBtn.querySelector('path').setAttribute('stroke', 'rgba(255, 255, 255, 0.28)');
        nextBtn.querySelector('path').setAttribute('stroke', '#FF6E30');
        // зміна стану:
        prevBtn.disabled = true; // Делаем кнопку неактивной
        nextBtn.disabled = false; // Разблокируем следующую кнопку
        // Пагінація:
        paginationFirst.style.height = '8px';
        paginationFirst.style.backgroundColor = '#FF6E30';
        paginationSecond.style.height = '6px';
        paginationSecond.style.backgroundColor = '#283036';
        paginationThird.style.height = '6px';
        paginationThird.style.backgroundColor = '#283036';

    } else if (currentIndex === 1) {
        // зміна кольору:
        prevBtn.querySelector('path').setAttribute('stroke', '#FF6E30');
        nextBtn.querySelector('path').setAttribute('stroke', '#FF6E30');
        // зміна стану:
        prevBtn.disabled = false; // Разблокируем предыдущую кнопку
        nextBtn.disabled = false; // Разблокируем следующую кнопку
        // Пагінація:
        paginationFirst.style.height = '6px';
        paginationFirst.style.backgroundColor = '#283036';
        paginationSecond.style.height = '8px';
        paginationSecond.style.backgroundColor = '#FF6E30';
        paginationThird.style.height = '6px';
        paginationThird.style.backgroundColor = '#283036';
    } else if (currentIndex === 2) {
        // зміна кольору:
        prevBtn.querySelector('path').setAttribute('stroke', '#FF6E30');
        nextBtn.querySelector('path').setAttribute('stroke', 'rgba(255, 255, 255, 0.28)');
        // зміна стану:
        prevBtn.disabled = false; // Разблокируем предыдущую кнопку
        nextBtn.disabled = true; // Делаем кнопку неактивной
        // Пагінація:
        paginationFirst.style.height = '6px';
        paginationFirst.style.backgroundColor = '#283036';
        paginationSecond.style.height = '6px';
        paginationSecond.style.backgroundColor = '#283036';
        paginationThird.style.height = '8px';
        paginationThird.style.backgroundColor = '#FF6E30';
    }
    // +++++
}

prevBtn.addEventListener('click', slideLeft);
nextBtn.addEventListener('click', slideRight);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Відстежуємо кліки на елементах пагінації:
paginationFirst.addEventListener('click', paginationFirstСlick);
paginationSecond.addEventListener('click', paginationSecondСlick);
paginationThird.addEventListener('click', paginationThirdСlick);

function paginationFirstСlick() {
    currentIndex = 0;
    updateSlider();
}

function paginationSecondСlick() {
    currentIndex = 1;
    updateSlider();
}
function paginationThirdСlick() {
    currentIndex = 2;
    updateSlider();
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Додаємо можливість гортати слайди за допомогою миші, 
// перетягуючи їх у різні боки ліворуч та праворуч
isDragging = false;

function handleMouseDown(event) {
    isDragging = true;
    startX = event.clientX;
    slider.style.cursor = 'pointer';
    // console.log("startX->handleMouseDown:", startX);
}

function handleMouseMove(event) {
    if (!isDragging) return;
    const diffX = event.clientX - startX;
    // console.log("diffX > 50:", diffX);
    if (diffX > 50) {
        // console.log("currentIndex->handleMouseMove(diffX > 50)", currentIndex);
        if (currentIndex === 2) return;
        slideRight();
        // console.log("currentIndex->handleMouseMove(diffX > 50+)", currentIndex);
        startX = event.clientX;
        // console.log("startX->handleMouseMove+:", startX);
    } else if (diffX < -50) {
        // console.log("currentIndex->handleMouseMove(diffX < -50)", currentIndex);
        if (currentIndex === 0) return;
        slideLeft();
        // console.log("currentIndex->handleMouseMove(diffX < -50-)", currentIndex);
        startX = event.clientX;
        // console.log("startX->handleMouseMove-:", startX);
    }
}

function handleMouseUp() {
    isDragging = false;
    slider.style.cursor = 'auto';
}

slider.addEventListener('mousedown', handleMouseDown);
slider.addEventListener('mousemove', handleMouseMove);
slider.addEventListener('mouseup', handleMouseUp);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Додаємо події touchstart, touchmove та touchend 
// для визначення жесту перетягування слайдів у різні боки ліворуч та праворуч:
slider.addEventListener('touchstart', (event) => {
    isDragging = true;
    startX = event.clientX;
});

slider.addEventListener('touchmove', (event) => {
    if (!isDragging) return;
    const diffX = event.clientX - startX;
    if (diffX > 50) {
        if (currentIndex === 2) return;
        slideRight();
        startX = event.clientX;
    } else if (diffX < -50) {
        if (currentIndex === 0) return;
        slideLeft();
        startX = event.clientX;
    }
});

slider.addEventListener('touchend', (event) => {
    isDragging = false;
});