let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')


let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')



// QUANDO EU CLICAR NO BOTÃO, A FUNÇÃO MOVEITENSONCLICK VAI SER CHAMADA E ESTARÁ PASSANDO OS PARAMETROS, SEJA BACK OU NEXT
btnNext.onclick = () => moveItemsOnclick('next')
btnBack.onclick = () => moveItemsOnclick('back')

// FUNÇÃO PARA MOVIMENTAR OS ITENS QUANDO ELA FOR CHAMADA
// TYPE: DEFINIR SE É NEXT OU BACK
function moveItemsOnclick(type){
    console.log(type)
}
