import React from 'react';
export default class CalculoImc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: 75,
            height: 1.65,
        };
    }
    handleSubmit = (event) => {
        console.log("nigger");
        let nam = event.target.weight;
        let val = event.target.height;
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <>
                <h3>Cálculo IMC</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Peso: </label>
                        <input type='number' name='weight' />
                    </div>
                    <div>
                        <label>Altura: </label>
                        <input type='number' name='height' />
                    </div>
                    <input type="submit" value="Calcular" />
                </form>
                <br/>
                <label>Resultado: </label><span></span>
                <br/>
            </>
        );
    }
}
