let formulario=document.getElementById('cadastroform');
let nome=document.getElementById('nome');
let email=docuiment.getElementById('email');
let cpf=document.getElementById('cpf');
let curso=document.getElementById('curso');

form.addEventListener('submit', validate);



window.onload = function () {
  if (localStorage.length > 0) {
    let alunosCadastrados = JSON.parse(localStorage.getItem('listaalunos'));
    atualizaAlunos(alunosCadastrados);
  }
};


//validacao dos campos
// CPF 

function mascara_cpf() {
    var cpf = document.getElementById('cpf')
    if(cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += "."
    } else if(cpf.value.length == 11) {
        cpf.value += "-"
    }
}





  //CRUD
function atualizaAlunos(alunos) {
  alunos.forEach(aluno => {
    let nome = aluno.nome;
    let emaiL = aluno.email;
    let cpf = aluno.cpf;
    let curso = aluno.curso;
    let tableBody = document.querySelector('.table-body');
  

    let tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${nome}</td>
      <td>${email}</td>
      <td>${cpf}</td>
      <td>${curso}</td>
      <td id="delete" class="text-center" onclick="deletealuno(this)">
      <button  class="btn btn-danger">
          <i class="fa fa-remove"></i>
          </button>
      
    `;

    listaalunos.appendChild(tr);
  });
}
//cadastro
function cadastraestudante() {
    let nome = nome.value;
    let email = email.value;
    let cpf = cpf.value;
    let curso = curso.value;
    let tableBody = document.querySelector('.table-body');
    let tr = document.createElement('tr');
  
    tr.innerHTML = `
        <td>${nome}</td>
        <td>${email}</td>
        <td class="cpf-number">${cpf}</td>
        <td>${curso}</td>
        <td id="delete" class="text-center" onclick="deletealuno(this)">
        <button  class="btn btn-danger">
            <i class="fa fa-remove"></i>
            </button>
      `;
  
    listaalunos.appendChild(tr);
  
   
  
    saveOnLocalStorage();
  }


//DELETA
  function deletealuno(event) {
    
    let confirmacao = confirm('Deseja realmente excluir?');
    if (confirmacao) {
      event.parentNode.remove();
     
    }
  }

  function saveOnLocalStorage() {
    let listaalunos = JSON.parse(localStorage.getItem('listaalunos') || '[]');
  
    listadealuno.push({
      nome: nome.value,
      email: email.value,
      cpf: cpf.value,
      curso: curso.value
    });
  
    localStorage.setItem('listaalunos', JSON.stringify(listaalunos));
  }
  