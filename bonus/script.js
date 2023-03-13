const { createApp } = Vue

  createApp({
    data() {
      return {
        nome: '',
        cognome: '',
        fullName: '',
        classe: 'red',
        counter: 0,
      }
    },
    methods: {

        saluta() {
            this.fullName = this.nome + ' ' + this.cognome;
        },

        changeColor() {
            
            this.counter++;

            if (this.counter % 2 == 0) {
                this.classe = 'blue';
            } else {
                this.classe = 'green decoration';
            }
        }
    }
  }).mount('#container')