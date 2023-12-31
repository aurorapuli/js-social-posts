// Descrizione**
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed, prendendo le informazioni che ci servono dall’array di oggetti che già trovate.
// Milestone 2 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.




const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// riporto l'elemento in cui andrò a inserire l'HTML

const container = document.getElementById('container');

posts.forEach(element => {


    // creo l'Html da inserire in pagina
    
    const postUtente =
    `
        <div class="post">
           <div class="post__header">
               <div class="post-meta">                    
                   <div class="post-meta__icon">
                       <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">                    
                   </div>
                   <div class="post-meta__data">
                       <div class="post-meta__author">${element.author.name}</div>
                       <div class="post-meta__time">${element.created}</div>
                   </div>                    
               </div>
           </div>
           <div class="post__text">${element.content}</div>
           <div class="post__image">
               <img src="${element.media}" alt="">
           </div>
           <div class="post__footer">
               <div class="likes js-likes">
                   <div class="likes__cta">
                       <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                           <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                           <span class="like-button__label">Mi Piace</span>
                       </a>
                   </div>
                   <div class="likes__counter">
                       Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                   </div>
               </div> 
           </div>
        </div>   
    `

    container.innerHTML += postUtente;

});

const buttonLike = document.getElementsByClassName("js-like-button");

const contatoreLike = document.querySelectorAll('.js-likes-counter');

console.log(contatoreLike);

const idLike = [];


// Converte l'HTMLCollection in un array e aggiunge un gestore degli eventi di clic a ciascun elemento
Array.from(buttonLike).forEach(function(bottone, i) {
  bottone.addEventListener("click", function() {
    // Il tuo codice per gestire l'evento di clic per ciascun pulsante va qui
    console.log("Pulsante cliccato!");
    // Aggiungi più codice secondo necessità
     
    

    const postId = parseInt(bottone.getAttribute("data-postid"));

    const contatoreAttuale = parseInt(contatoreLike[i].textContent);

    if (idLike.includes(postId)) {
        idLike.pop(postId);
        bottone.style.color = "black";
        contatoreLike[i].textContent = contatoreAttuale - 1;
        
    } else {
        idLike.push(postId);
        bottone.style.color = "red";
        contatoreLike[i].textContent = contatoreAttuale + 1;
    }
});

    console.log(idLike);
    

  });
           
















 
 



  

