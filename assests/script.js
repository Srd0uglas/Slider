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
         // o move ou back entra dentro desse parenteses
function moveItemsOnclick(type){
    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')


    // se for "next" vai fazer uma determinada ação
      // se eu clicar no botão next
    if(type === 'next'){
        // appendChild coloca o item no começo da lista
        list.appendChild(listItems [0])
        thumb.appendChild(thumbItems [0])
        // vamos usar uma classListserve para adicionar uma classe temporária 
        container.classList.add('next')
    }else{
        // prepend coloca o item no final da lista
        list.prepend(listItems[3])
        thumb.prepend(thumbItems[3])
        container.classList.add('back')
    }
    // as fotos tem 4 posições = 0 1 2 3 

    


    // vai fazer a animação que está definida na classe add ou back e vai ser excluida após um determinado tempo
    setTimeout(() =>{
        // remover as classes após 3s
        container.classList.remove('next')
        container.classList.remove('back')
    },3000); 
    // 3 seg = 3000 pois está em milesegundos
}
