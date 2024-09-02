import { Component } from "react";

class Contador extends Component {
    constructor(props) {
        super(props);
        // Inicializa el estado con un valor de contador en 0
        this.state = {
            contador: 0
        };
    }

    // Método para manejar el evento de sumar
    sumar = () => {
        this.setState((prevState) => ({
            contador: prevState.contador + 1
        }));
    };
    restar = () => {
        this.setState((prevState) => ({
            contador: prevState.contador - 1
        }));
    };

    render() {
        return (
            <div>
                <p>Mi contador: {this.state.contador}</p>
                <button onClick={this.sumar}>Sumar</button>
                <button onClick={this.restar}>Restar</button>
            </div>
        );
    }
}

export default Contador;
