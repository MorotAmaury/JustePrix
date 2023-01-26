const field = document.getElementById("field")
const btn = document.getElementById("btn")


let container = document.createElement('section')
container.className = 'container'

let max = 1000
let min = 1

let nb = 0
let randomNb = Math.floor(Math.random() * (max - min + 1)) + min


let action = (nb, nbToFind) => {
    let div = document.createElement('div')
    if(nb == ''){
        div.append("Merci d'entrez une valeur");
        div.className = 'action error'
    }
    else if((nb > max) || (nb < min)){
        div.append(`Votre nombre doit etre compris entre ${min} et ${max}`);
        div.className = 'action error'
    }
    else if (parseInt(nb) < nbToFind){
        div.append(` ${nb} : C'est trop petit !`)
        div.className = 'action short'
    }
    else if(parseInt(nb) > nbToFind){
        div.append(` ${nb} : C'est trop grand !`);
        div.className = 'action big'
    }
    else if(parseInt(nb) == nbToFind){
        div.append(` ${nb} : C'est gagner !`);
        div.className = 'action win'
    }
    return(container.append(div))
}


btn.addEventListener('click', () => {
    nb = field.value
    action(nb, randomNb)
    field.value = null
})


document.body.appendChild(container)