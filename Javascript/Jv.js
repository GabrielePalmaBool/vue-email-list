 /*
    
    Descrizione:
    Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
    generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

    Bonus
    Far comparire gli indirizzi email solamente quando sono stati tutti generati.
 
 */


//SVOLGIMENTO

const { createApp } = Vue;

createApp({

    data() {

        return {

            mail: 0,

            Arraymails : []
   
        }
    },
    methods: {
        
        
    },

    mounted() {

      for(let i = 0; i < 10;i++){

         this.mail = 0;

         //chiamata tramite libreria axios all'Api ()
         axios.get("https://flynn.boolean.careers/exercises/api/random/mail")

            .then((risposta) => {

               console.log(risposta.data.response);

               this.Arraymails[i] = risposta.data.response;

               console.log(this.Arraymails);
            });

      }

      this.mail = 10;
  }

}).mount('#app');