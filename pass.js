function verificaLogin(){
    const email = document.querySelector('.email').value;
    const senha = document.querySelector('.senha').value;
    if(email == "aluno" && senha == "aluno"){
            location.href = "Area do Aluno/index.html"
        }else{
                alert("Erro! Dados Incorretos")
            }
        }
function esqueciDados(){
    alert("(Email: aluno) (Senha: aluno)  Por Favor, guarde seus dados!")
}