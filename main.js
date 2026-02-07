$(document).ready(function(){
//    document.querySelector('header button').addEventListener('click', function(){})
    //                      ADICIONANDO EVENTOS AOS ELEMENTOS USANDO JQUERY
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //a seguir veremos a primeira forma de adicionar um evento a um elemento:


    $('header button').click(function(){
//anteriormente no css fomos no "form" e utilizamos a função "display:none;"que impede que o formuario seja mostrado.
//pois agora vamos mostrar ao formulario em que momento que ele deve ser mostrado.
        $('form').slideDown();
        //usamos a função slideDown pois ele tem um efeito de slide mesmo e simplismente por meio dela temos esse efeito de slide
    })

    //Da mesma maneira que criamos uma função para  formulario descer, vamos criar uma para ele subir;
$('#botao-cancelar').click(function(){
    //usamos o # para chamarmos um id;
    //este aqui é calbeke
    $('form').slideUp();
    //Obs: sempre escreva os comandos da forma correta, até mesmo se é maiúscula ou minúscula, pois isso poderá impedir que o comando seja executado
})

    
    //segunda forma de adicionar um evento a um elemento, que é através da função ".on"
    //iremos usalá para remover a função do formulario que quando submetido costuma atualizar a página:
    $('form').on('submit',function(e){
    e.preventDefault();//ele previne o comportamento padrão do formulario 
    // que atualiza a página quando ele é submetido
    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
    const novoItem = $('<li style="display:none"></li>');//com apenas o style="display:none" quando adicionarmos uma imagem ela não será mostrada.
    $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);//dessa maneira criamos um elemento no jquery
        /*o appendTo ele pega o elemento($(`<img src="${enderecoDaNovaImagem}"/>)e
        insere ele na abertura e no fechamento dele) */
    $(`
        <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="ver imagem em tamanho real">
                    ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).fadeIn(2000);
        $(novoItem).appendTo('ul');
})
/*todo essa jogada que fizemos no js por meio do dquery é para podermos ter a opção
de jogar imagens novas dentro da nossa galeria que criamos */
})

//anteriormente utilizamos o "form" como seletor e o "submit" é o nosso evento
//essa função que foi chamada aqui ".addEventListener('click',function(){})"depois dessa primeira função recebe o nome de calbeke(o calbek é a referente ao 'click')
//$ este cifão é para chamar a dquery e aqui estou dizendo ao dquery que toda vez que este documento for carregado ele deve executar essa
//fução
//este comando funciona da seguinte forma:
//quando o documento for carregado, o dquery vai acionar este comado que 
//tem por objetivo acionar o queryselector e o queryselector neste codigo irá procurar a primeira class ou item no html
//que tem as caracteristicas espicificadas;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
