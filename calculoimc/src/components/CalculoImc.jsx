import React, { Component } from 'react';

export default class CalculoImc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peso: '',
            altura: '',
            imc: null,
        };
    }

    handlePesoChange = (event) => {
        this.setState({ peso: event.target.value });
    };

    handleAlturaChange = (event) => {
        this.setState({ altura: event.target.value });
    };

    calcularIMC = () => {
        const { peso, altura } = this.state;
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0) {
            alert('Por favor, insira valores válidos para peso e altura.');
            return;
        }

        const alturaMetros = alturaNum / 100;
        const imcCalculado = pesoNum / (alturaMetros * alturaMetros);
        this.setState({ imc: imcCalculado.toFixed(2) });
    }

    render() {
        const { peso, altura, imc } = this.state;

        return (
            <>
                <h3>Cálculo IMC</h3>
                <div>
                    <label>
                        Peso (kg): <input
                            type="number"
                            value={peso}
                            onChange={this.handlePesoChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Altura (cm): <input
                            type="number"
                            value={altura}
                            onChange={this.handleAlturaChange}
                        />
                    </label>
                </div>
                <div style={{marginTop: "10px"}}>
                    <button onClick={this.calcularIMC}>Calcular</button>
                </div>
                <div>
                    <h4>Resultado: {imc}</h4>
                </div>
            </>
        );
    }
}
