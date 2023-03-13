//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Bonus: aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'Vue',
        imgSrc: 'https://picsum.photos/500/300',
      }
    }
  }).mount('#app')  