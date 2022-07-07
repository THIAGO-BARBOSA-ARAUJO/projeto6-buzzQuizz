
const app = document.querySelector(".app")


function tela1(){
    app.innerHTML = `
    
    <div class="nao_criou_quizz">
        <div class="container_nao_criou_quizz">
            <h2>Você não criou nenhum <br> quizz ainda :(</h2>
            <div class="btn_criar_quizz">Criar Quizz</div><!--btn_criar_quizz-->
        </div><!--container_nao_criou_quizz-->
    </div><!--nao_criou_quizz-->


    <div class="seus_quizzes invisivel">
        <div class="title">
            <h2>Seus quizzes</h2>
            <div class="bolinha_criar_quizz">
                <img src="/img/Vector.svg">
            </div><!--bolinha_criar_quizz-->
        </div><!--title-->
        <div class="galeria_seus_quizzes">
            <div class="quizz" onclick="chamar_tela2(this)">
                <img src="img/Rectangle 34.svg">
                <p>Acerte os personagens corretos dos Simpsons e prove seu amor!</p>
            </div><!--quizz-->

            <div class="quizz" onclick="chamar_tela2(this)">
                <img src="img/Rectangle 34.svg">
                <p>Acerte os personagens corretos dos Simpsons e prove seu amor!</p>
            </div><!--quizz-->

            <div class="quizz" onclick="chamar_tela2(this)">
                <img src="img/Rectangle 34.svg">
                <p>Acerte os personagens corretos dos Simpsons e prove seu amor!</p>
            </div><!--quizz-->

        </div><!--galeria_todos_os_quizzes-->
    </div><!--todos_os_quizzes-->


    <div class="todos_os_quizzes">
        <h2>todos os quizzes</h2>
        <div class="galeria_todos_os_quizzes">

        </div><!--galeria_todos_os_quizzes-->
    </div><!--todos_os_quizzes-->
    
    `
    pega_todos_os_quizzes()
}

tela1()

const div_nao_criou_quizz = document.querySelector(".nao_criou_quizz")

let user_quizz = localStorage.getItem('user_quizz');

const div_seus_quizzes = document.querySelector(".seus_quizzes")

const btn_criar_quizz = document.querySelector(".btn_criar_quizz")

const div_quizz = document.querySelectorAll(".quizz")

if(user_quizz != 0 && user_quizz !== null){
    div_nao_criou_quizz.classList.add("invisivel")
    div_seus_quizzes.classList.remove("invisivel")
}




btn_criar_quizz.addEventListener("click", tela3)

function pega_todos_os_quizzes(){
    const galeria_todos_os_quizzes = document.querySelector(".galeria_todos_os_quizzes")
    const promessa = axios.get("https://mock-api.driven.com.br/api/vs/buzzquizz/quizzes")
    promessa.then((res)=>{
        let resposta = res.data
        // console.log(resposta.length)
        for(let i = 0; i < resposta.length; i++){
            galeria_todos_os_quizzes.innerHTML += `
            
            <div class="quizz" onclick="chamar_tela2(this, ${resposta[i].id})">
                <img src="${resposta[i].image}">
                <p>${resposta[i].title}</p>
            </div><!--quizz-->
            `
        }
    })
}





function tela3(){
    console.log("tela3")
}


//************************************* tela 2 *********************************************


function tela2(){
    app.innerHTML = `
    <div class="apresen">
        <p>O quão Potterhead é você?</p>
    </div><!--apresen-->

        <div class="quizz">
            <div class="container-quizz">
                <div class="titulo">
                    <p>Em qual animal Olho-Tonto Moody transfigurou Malfoy?</p>
                </div>
                <div class="container_respostas">
                    <div class="resposta">
                        <img src="../img/image 3.svg">
                        <p>Gatíneo</p>
                    </div><!--resposta-->
    
                    <div class="resposta">
                        <img src="../img/image 4.svg">
                        <p>Ratata</p>
                    </div><!--resposta-->
    
                    <div class="resposta">
                        <img src="../img/image 7.svg">
                        <p>Sapo gordo</p>
                    </div><!--resposta-->
    
                    <div class="resposta">
                        <img src="../img/image 8.svg">
                        <p>Mustela putorius (o Furão)</p>
                    </div><!--resposta-->
                </div><!--container_respostas-->
            </div><!--container-quizz-->


            <div class="container-quizz">
                <div class="titulo">
                    <p>Em qual animal Olho-Tonto Moody transfigurou Malfoy?</p>
                </div>
                <div class="container_respostas">
                    <div class="resposta">
                        <img src="../img/image 3.svg">
                        <p>Gatíneo</p>
                    </div><!--resposta-->
    
                    <div class="resposta">
                        <img src="../img/image 4.svg">
                        <p>Ratata</p>
                    </div><!--resposta-->
    
                    <div class="resposta">
                        <img src="../img/image 7.svg">
                        <p>Sapo gordo</p>
                    </div><!--resposta-->
    
                    <div class="resposta">
                        <img src="../img/image 8.svg">
                        <p>Mustela putorius (o Furão)</p>
                    </div><!--resposta-->
                </div><!--container_respostas-->
            </div><!--container-quizz-->


        </div><!--quizz-->
    </div><!--galeria-->

    `
}




function chamar_tela2(e, id){
    tela2()
    // localStorage.setItem('id_quizz_clicado', id)
    // const quizz_clicado = Number(localStorage.getItem('id_quizz_clicado'))
    // console.log(quizz_clicado)
    const promessa = axios.get(`https://mock-api.driven.com.br/api/vs/buzzquizz/quizzes/${id}`)

     promessa.then((res)=>{
         console.log(res.data)
     })
    // window.location.href = "html/tela2.html"
}