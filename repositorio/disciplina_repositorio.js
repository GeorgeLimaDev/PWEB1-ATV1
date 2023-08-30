class DisciplinaRepositorio {
    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    remover(index) {
        this.disciplinas.splice(index, 1);
    }

    listar() {
        return this.disciplinas;
    }

    inserirAluno(aluno, disciplina) {
        const index = this.disciplinas.indexOf(disciplina);
        this.disciplinas[index].alunos.push(aluno);
    }

    alterarNome(index, novoNome) {
        this.disciplinas[index].nome = novoNome;
    }

}