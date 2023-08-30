class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(nome, codigo) {
        const repetida = this.repositorio.listar().filter(disciplina => disciplina.codigo == codigo);
        if(repetida.length > 0) {
            window.alert("Esta disciplina já foi cadastrada.");
        }

        const novaDisciplina = new Disciplina(codigo, nome);
        this.repositorio.inserir(novaDisciplina);
    }

    inserirAluno(matricula, codDiscpl) {
        const disciplina = this.repositorio.listar().filter(disciplina => disciplina.codigo === codDiscpl);
        if(disciplina.length === 0) {
            window.alert("Disciplina não encontrada.");
        }

        const aluno = controladorAluno.servico.pesquisarPorMatricula(matricula);
        if(aluno.length == 0) {
            window.alert("Aluno não encontrado.");
        }

        if(disciplina[0].alunos.indexOf(aluno[0]) != -1) {
            window.alert("Aluno já foi cadastrado nesta disciplina!");
        }

        this.repositorio.inserirAluno(aluno[0], disciplina[0])
        return aluno[0];
    }

    pesquisarPorCodigo(codigo) {
        const resultado = this.repositorio.listar().filter(disciplina => disciplina.codigo === codigo);

        if (resultado.length == 0) {
            window.alert("Disciplina não encontrada.");
        }

        return resultado[0];
    }

    alterarNome(novoNome, codigo) {
        const disciplina = this.pesquisarPorCodigo(codigo);
        const index = this.repositorio.disciplinas.indexOf(disciplina);
        this.repositorio.alterarNome(index, novoNome);
    }

    remover(codigo) {
        const disciplina = this.pesquisarPorCodigo(codigo);
        const index = this.repositorio.disciplinas.indexOf(disciplina);
        this.repositorio.remover(index);
    }

    listar() {
        return this.repositorio.listar();
    }
}