import './App.css';
import logoSeven from './assets/logo-seven7.png'
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modelName: '',
      models: [],
      name: '',
      type: '',
      isOpen: false,
      selectedModel: ''
    }

  }

  //função que adiciona propriedades e atualiza o modelo
  handleAddProperty = () => {
    const { models, selectedModel } = this.state;
    const newField = {
      name: this.state.name,
      type: this.state.type,
    };
    const selectedModelOld = models.find(model => model.name === selectedModel)
    const updatedModel = { ...selectedModelOld, properties: [...selectedModelOld.properties, newField] }
    const updatedModelsArray = models.map(model => model.name === selectedModel ? updatedModel : model)

    this.setState({ models: updatedModelsArray, name: '', type: '' })
  };

  //função que adiciona o modelo, ex: Employees, guardando o modelo em models[]. 
  handleAddModel = () => {
    const { models, modelName } = this.state;
    const newModel = {
      name: modelName,
      properties: [],
    }
    this.setState({ models: [...models, newModel], modelName: '' });
  }


  render() {
    const { modelName, name, type, models, isOpen } = this.state;

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

        {isOpen && (
          <div className="model-properties">
            <button
              className="create-propertie"
              onClick={this.handleAddProperty}>
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
            <button onClick={() => this.setState({ ...this.state, isOpen: false, selectedModel: '', name: '', type: '' })}>Fechar</button>
          </div>
        )}

        <div className="mostrar-modelos">
          {models.map(model => {
            return (
              <div key={model.name}>
                <p>{model.name}</p>

                {model.properties.map(property => {
                  return (
                    <div key={property.name}>
                      <span>Nome: {property.name}, </span>
                      <span>Tipo: {property.type}</span>
                    </div>
                  )
                }
                )}
                <button className="adicionar"
                  onClick={() => this.setState({ ...this.state, isOpen: true, selectedModel: model.name })}
                >Adicionar Propriedades</button>
              </div>
            )
          })}
        </div>
      </>
    );
  }
}

export default App;
