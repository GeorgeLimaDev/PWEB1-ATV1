class AlunoService {
    constructor() {
        this.repositorio = new AlunoRepositorio();
    }

    inserir(nome, idade, matricula) {
        if (idade < 18) {
            window.alert("Não é possível inserir menores de idade.")
            return null;
        }
        const alunoPesquisado = this.pesquisarPorMatricula(matricula);
        if (alunoPesquisado.length > 0) {
            window.alert('Aluno já cadastrado(a).');
        }
        const alunoNovo = new Aluno(nome, idade, matricula);
        this.repositorio.inserir(alunoNovo);
        return alunoNovo;
    }

    pesquisarPorMatricula(matricula) {
        return this.repositorio.listar().filter(
            aluno => aluno.matricula === matricula);
    }

    remover(matricula) {
        this.repositorio.remover(matricula);
    }

    listarMenoresIdade() {
        return this.repositorio.listar().filter(aluno => aluno.idade < 18);
    }
}