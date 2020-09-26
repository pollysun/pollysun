const container = document.querySelector('.container');

container.addEventListener('click', handleClik);

// function handleClik (e) {
//     alert(e.clientX); 
//     alert(e.clientY);
// };

// let treasure = {
//     xMin: 829,
//     xMax: 849,
//     yMin: 307,
//     yMax: 327
// };

// let isSaccessX = e.clientX < 849 && e.clientX > 829;
// let isSaccessY = e.clientY < 327 && e.clientY > 307;

function handleClik (e) {
    if((e.clientX < 849 && e.clientX > 829) && (e.clientY < 327 && e.clientY > 307)) {
        alert('Ураааааааа!!! Ты нашел клад! Красавчик!')
    } else {
        alert('Ха - Ха - Ха!!! Попробуй поискать еще, Лопушок!')
    }
};




// if (handleClik) {
//     ;
// } else {
//     ;
// }