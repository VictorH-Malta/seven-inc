import './App.css';
import logoSeven from './assets/logo-seven7.png'
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modelName: '',
      models: [],
      modelProperties: [],
      name: '',
      type: '',
    }
 
  }

  //função que tenta adicionar os campos name e type em modelProperties, guardando as informações
  //função retorna no console o array ModelProperties.
  handleAddPropertie = () => {
    const {modelProperties} = this.state;
    const newField = {
      name: this.state.name,
      type: this.state.type,
    };
    this.setState({ modelProperties: [...this.state.modelProperties, newField], name: '', type: '' })
    console.log(modelProperties);
  };

  //função que adiciona o modelo, ex: Employees, guardando o modelo em models[]. 
  //função retorna models[] no console.
  handleAddModel = () => {
    const { models, modelName } = this.state;
    this.setState({ models: [...models, modelName], modelName: '' });
    console.log(models);
  }


  render() {
    const { modelName, name, type } = this.state;

    return (
      <>
        <div className="menu-bar">
          <img src={logoSeven} alt="seven-logo" className="logo-seven" />
          <nav className="nav-bar">
            <ul>
              <a href="#"><li>Home</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Help</li></a>
            </ul>

          </nav>
        </div>

        <h1 className="models">Modelos</h1>

        <div className="model-employees">
          <button
            className="create-model"
            onClick={this.handleAddModel}>
            Criar novo modelo
          </button>
          <input
            type="text"
            placeholder="Nome do modelo"
            value={modelName}
            onChange={(event) => this.setState({ ...this.state, modelName: event.target.value })}
          />
        </div>
        <div className="model-properties">
          <button
            className="create-propertie"
            onClick={this.handleAddPropertie}>
            Criar Propriedades
          </button>
          <input
            type="text"
            placeholder="Propriedade"
            value={name}
            onChange={(event) => this.setState({ ...this.state, name: event.target.value })}
          />
           <input
            type="text"
            placeholder="Tipo"
            value={type}
            onChange={(event) => this.setState({ ...this.state, type: event.target.value })}
          />
        </div>
      </>
    );
  }
}

export default App;
