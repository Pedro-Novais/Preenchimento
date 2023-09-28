    //Aramzenando em variáveis os elementos DOM 
    

    let colorOne = document.getElementById('choose-color-one')
    let colorTwo = document.getElementById('choose-color-two')
    let colorThree = document.getElementById('choose-color-three')

    let time_color;

    colorOne.addEventListener("click", function(){
        time_color = 0;
        changeColor(time_color);
    });

    colorTwo.addEventListener("click", function(){
        time_color = 1;
        changeColor(time_color);
    });


    colorThree.addEventListener("click", function(){
        time_color = 2;
        changeColor(time_color);
    });

    let color_to_choose = [
        ['rgba(0, 238, 255, 0.979)',
        'rgba(0, 204, 255, 0.842)'],
        ['rgb(109, 58, 150)',
        'rgb(97, 21, 158)'],
        ['rgba(33, 204, 33, 0.767)',
        'rgba(101, 219, 101, 0.767)']
    ]

    function changeColor(time){
        let form = document.getElementById('form');
        let container = document.getElementById('container');
        let space = document.getElementById('img-example');

        for(let i =0; i<3;i++){
            if(time == i){
                form = form.style.backgroundColor = `${color_to_choose[i][0]}`;
                container = container.style.backgroundColor=color_to_choose[i][1]
                space = space.style.backgroundColor=color_to_choose[i][0]
            }
        }
    }

        //Coletando os valores dos campos digitados
        const dadosGet = [
        document.getElementById('name-d'),
        document.getElementById('email-d'),
        document.getElementById('key-d'),
        document.getElementById('password-d'),
        document.getElementById('state-d')
        ]

        //Identificando os campos para inserção de dados
        const dadosPut = [
            document.getElementById('put-nome'),
            document.getElementById('put-email'),
            document.getElementById('put-key'),
            document.getElementById('put-password'),
            document.getElementById('put-state'),
        ]

        //Coletando os Id's dos botões
        const btnSub = document.getElementById('btn-sub');
        const btnReset = document.getElementById('btn-reset');

        //Função de apagar os valores dos campos

        btnReset.addEventListener("click", function(){
            for(let i = 0; i < dadosGet.length; i++){ 
                if(dadosGet[i].value != ""){
                    dadosGet[i].value = "";
                }
                if(dadosPut[i].value != ""){
                    dadosPut[i].innerText = "";
                }
                }  
            })
        
        //Função de submeter os itens á lista

        btnSub.addEventListener("click", function(){
            for(let i = 0; i < dadosGet.length; i++){
                if (dadosGet[i].value == ""){
                    window.alert('Preencha todos os dados')
                    return false;
                }
            }
            for(let i = 0; i < dadosGet.length; i++){
                let putting = dadosGet[i].value;
                dadosGet[i].value = "";
                dadosPut[i].innerText = putting;
            }
        })