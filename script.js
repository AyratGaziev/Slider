
// Вводим значения классов из документа
// Значение класса невидимого блока указано как 'hide'

let nextClassName = '.next'; // кнопка вперед
let prevClassName = '.prev'; // кнопка назад
let sliderItemClassName = '.slider-item'; // класс слайдов
let timeInterval = 2000; // интервал переключения слайда

function SliderFunc (nextClass, prevClass, sliderItemClass) {
    let next = document.querySelector(nextClass);
    let prev = document.querySelector(prevClass);
    let sliderItems = document.querySelectorAll(sliderItemClass);
    let currentSlide = 0;
    
    
    function toggleNext () {
        if (currentSlide < sliderItems.length-1 && currentSlide > 0) {
            sliderItems[currentSlide].classList.add('hide');
            currentSlide += 1;
            sliderItems[currentSlide].classList.remove('hide'); 
        } else if (currentSlide === 0){
            sliderItems[currentSlide].classList.add('hide');
            currentSlide += 1;
            sliderItems[currentSlide].classList.remove('hide'); 
        } else {
            sliderItems[currentSlide].classList.add('hide');
            currentSlide = 0
            sliderItems[currentSlide].classList.remove('hide');
        };
                
    };
    
    function togglePrev () {
        if (currentSlide === 0) {
            sliderItems[currentSlide].classList.add('hide');
            currentSlide = sliderItems.length-1;
            sliderItems[currentSlide].classList.remove('hide'); 
        } else if (currentSlide > 0 && currentSlide < sliderItems.length){
            sliderItems[currentSlide].classList.add('hide');
            currentSlide -= 1;
            sliderItems[currentSlide].classList.remove('hide'); 
        } 
    }
    
    next.addEventListener('click', toggleNext);
    prev.addEventListener('click', togglePrev);
    
    setInterval(toggleNext, timeInterval);
};

SliderFunc (nextClassName, prevClassName, sliderItemClassName);




