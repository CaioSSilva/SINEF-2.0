const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const loginButton = document.getElementById('loginButton')
const usuarios = [
    {
        email: "marcosalmeida@fumec.br",
        senha: "marcos1234"
    },
]

if(loginButton){
    loginButton.addEventListener('click', () =>{
        if(email.value === usuarios[0].email && senha.value === usuarios[0].senha){
            location.href = "Area do Aluno/index.html"
        }else{
            alert("Dados Incorretos!")
            location.reload()
        }
    })
}
function forgotData(){
    alert(" Email: marcosalmeida@fumec.br    Senha: marcos1234")
}