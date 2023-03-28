// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue;   //Salviamo in una variabile locale la funzione createApp, presa dalla variabile globale Vue.                              
createApp({                     //Inizializziamo un'instanza dell'applicazione Vue invocando la funzione createApp
    data(){
        return{
            username: "Buongiorno scrivi come ti chiami",
            imgUrl: "https://www.orientsoftware.com/Media/Default/Images/BlogPost/2022-12-19/software-engineer-burnout.jpg",
            classCommon : "text-center mx-auto my-3" ,             
            hiddenClass: "hidden w-100"   // creo una key di proposito con un nome utile in css cosi da poterla richiamare come classe poi nel methods per farla comparire o meno
        }
    },
    methods: {
        hide() {
            if (this.hiddenClass === ""){
                this.hiddenClass = "hidden";
            }else{
                this.hiddenClass = "";
            }

        }
    }
    
}).mount("#app");        //Invochiamo il metodo .mount() per connettere l'istanza al tag HTML con id #app e renderizzare l'app