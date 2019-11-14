import React, {Component} from 'react'; //importando objeto React 
import '../App.css'; // importando css
import Rodape from '../components/Rodape';//importando o componente Rodape

class Categoria extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listaCategorias : [],
      titulo : ''
    }
  }

  // Função que faz a requisição para a api
  // Atribui os dados recebidos ao state listaCategorias
  // Caso ocorra um erro, exibe no console do navegador 
  buscarCategorias(){
    fetch('http://localhost:5000/api/categorias')
    .then(resposta => resposta.json())
    .then(data => this.setState({ listaCategorias : data}))
    .catch((erro) => console.log(erro))
  }

  // Assim que a página for carregada, chama a função buscarCategorias
  componentDidMount(){
    this.buscarCategorias();
  }

    render(){
        return (
            <div>
                <header className="cabecalhoPrincipal">
        <div className="container">
          <img src="./assets/img/icon-login.png" />

          <nav className="cabecalhoPrincipal-nav">
            Administrador
          </nav>
        </div>
      </header>

      <main className="conteudoPrincipal">
        <section className="conteudoPrincipal-cadastro">
          <h1 className="conteudoPrincipal-cadastro-titulo">Categorias</h1>
          <div className="container" id="conteudoPrincipal-lista">
            <table id="tabela-lista">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Título</th>
                </tr>
              </thead>

              <tbody id="tabela-lista-corpo">
                {/* Utilizar função e map para preencher a lista */}
                {
                  // Percorre o array listaCategorias e preenche o corpo da tabela
                  // com o ID e o titulo de cada categoria
                  this.state.listaCategorias.map(function(categoria){
                    return (
                      <tr key={categoria.categoriaId}>
                        <td>{categoria.categoriaId}</td>
                        <td>{categoria.titulo}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>

          <div className="container" id="conteudoPrincipal-cadastro">
            <h2 className="conteudoPrincipal-cadastro-titulo">
              Cadastrar Tipo de Evento
            </h2>
            <form>
              <div className="container">
                <input
                  type="text"
                  id="nome-tipo-evento"
                  placeholder="tipo do evento"
                />
                <button
                  className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                >
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
                <Rodape/>{/*Usando o componente rodape*/}
            </div>
        )
    }
}
export default Categoria; //por padrao recebe o return e envia para o navegador 
