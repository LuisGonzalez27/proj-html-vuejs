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

    products: [
        {
            name: "Brush",
            price: "$15.00",
            img: "../../assets/img/brush_dark.png",
        },
        {
            name: "Scissors",
            price: "$85.00",
            img: "../../assets/img/scissors.png",
        },
        {
            name: "Hot Oil",
            price: "$15.00",
            img: "../../assets/img/hot_oil_dark.png",
        },
        {
            name: "Straight Razor",
            price: "$30.00",
            img: "../../assets/img/straight_razor_dark.png",
        },
    ],

});