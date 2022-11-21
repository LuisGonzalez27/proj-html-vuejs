import { reactive } from "vue";

export const store = reactive({

    // stuttura dati 
    services: [
        {
            name: "Trim & Cut",
            text: "Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.",
            img: "../../assets/img/avadabarbers-trimcut-icon-before.png",
        },
        {
            name: "Wash & Dry",
            text: "Take a seat in our fine leather chairs, lean back and us lather you a fresh head in a luxurious fashion.",
            img: "../../assets/img/avadabarbers-washndry-icon.png",
        },
        {
            name: "Beard Tidy",
            text: "Tame the tangles and undity facil hairs like a gentleman with our Beard Tidy services form Avada Barbers.",
            img: "../../assets/img/avadabarbers-beardtrim-icon.png",
        },
    ],

});