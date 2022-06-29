'use strict'

const images = [
     {'id':'3', 'url': './img/pepe_003.jpg' },
    {'id':'1', 'url': './img/pepe_001.jpg' },
    {'id':'2', 'url': './img/pepe_002.jpg' },
    {'id':'4', 'url': './img/pepe_004.jpg' },
    {'id':'5', 'url': './img/pepe_005.jpg' },
    {'id':'6', 'url': './img/pepe_006.jpg' },
    {'id':'7', 'url': './img/pepe_007.jpg' },
    {'id':'8', 'url': './img/pepe_008.jpg' },
    {'id':'9', 'url': './img/pepe_009.jpg' },
  
];

const containerItens = document.querySelector('#container-itens');

const loadImages = (images, container)=>{
    images.forEach(image =>{
        container.innerHTML += `
        <div class='item'>
        <img src='${image.url}'
        </div>`
    })
    
}

loadImages(images, containerItens); 

let items = document.querySelectorAll('.item');

const previous = () =>{
    containerItens.appendChild(items[0]);
    items = document.querySelectorAll('.item'); 
}

const next = () =>{ 
    const lastItem = items[items.length - 1 ];
    containerItens.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
    
}
document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);



