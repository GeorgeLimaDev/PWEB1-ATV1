class DisciplinaControlador {
    constructor() {
        this.service = new DisciplinaService();
    }

    inserir() {
        const nome = document.querySelector("#nome");
        const codigo = document.querySelector("#codigo");

        try{
            this.service.inserir(nome.value, Number(codigo.value));
            window.alert("Disciplina cadastrada com sucesso.");
        } catch (error) {
            window.alert("Erro ao cadastrar disciplina.")
        }
    }

    alterarNome() {
        const nome = document.querySelector("#nome");
        const codigo = document.querySelector("#codigo");

        try{
            this.service.alterarNome(nome.value, Number(codigo.value));
            window.alert("Disciplina alterada com sucesso.");
        } catch (error) {
            window.alert("Erro ao alterar disciplina.")
        }
    }

    remover() {
        const codigo = document.querySelector("#codigo");

        try{
            this.service.remover(Number(codigo.value));
            window.alert("Disciplina removida com sucesso.");
        } catch (error) {
            window.alert("Erro ao remover disciplina.")
        }
    }

    listarDisciplinas() {
        const listaDisciplinas = document.querySelector("#listaDisciplinas");
        listaDisciplinas.innerHTML = "";
        const disciplinas = this.service.listar();

        disciplinas.forEach(disciplina => {const elementoDisciplina = document.createElement("li");
        elementoDisciplina.textContent = `Nome: ${disciplina.nome} - Codigo: ${disciplina.codigo}`;
        listaDisciplinas.appendChild(elementoDisciplina);})
        
    }

    inserirAlunoNaDisciplina(aluno, disciplina) {
        this.service.repositorio.inserirAluno(aluno, disciplina);
    }
}