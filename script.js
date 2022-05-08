let immagini = {
    'a':[
        name = "Lago",
        img= "img/01.jpg",
        desc = "uomo sul lago"
    ],
    'b':[
        name = "Spagna",
        img= "img/02.jpg",
        desc = "Case belle"
    ],
    'c':[
        name = "Londra",
        img= "img/03.jpg",
        desc = "Orologio"
    ],
    'd':[
        name = "Svizzera",
        img= "img/04.jpg",
        desc = "Palazzi"
    ],
};

// console.log(immagini.c[1]);

let i = 1;

const immagine = document.querySelector('div.principale img');
const titolo = document.getElementById('titolo');

// document.addEventListener('click', function handleClick(event) {
//     const test = document.getElementById('selected');
//     test.removeAttribute('id');
//     event.target.setAttribute('id','selected');
// });
  

function change_img(path, letter){
    immagine.src = path;
    // console.log(immagini[letter][0]);
    titolo.innerHTML = `Nome: ${immagini[letter][0]}`;
}

const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');

button1.addEventListener('click', function(){
    i += 1;
    // console.log(i);
    switch (i) {
        case 1:
            change_img('img/01.jpg', 'a');
            break;
        case 2:
            change_img('img/02.jpg', 'b');
            break;
        case 3:
            change_img('img/03.jpg', 'c');
            break;
        case 4:
            change_img('img/04.jpg', 'd');
            break;
        default:
            change_img('img/01.jpg', 'a');
            i = 1;
    }
});

button2.addEventListener('click', function(){
    i -= 1;
    // console.log(i);
    switch (i) {
        case 1:
            change_img('img/01.jpg', 'a');
            break;
        case 2:
            change_img('img/02.jpg', 'b');
            break;
        case 3:
            change_img('img/03.jpg', 'c');
            break;
        case 4:
            change_img('img/04.jpg', 'd');
            break;
        default:
            change_img('img/04.jpg', 'd');
            i = 4;
    }
});