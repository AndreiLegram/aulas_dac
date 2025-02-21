import React from 'react';
export default class TabelaImc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: 75,
            height: 1.65,
        };
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Abaixo do Peso</td>
                        <td>Abaixo de 18,5</td>
                    </tr>
                    <tr>
                        <td>Abaixo do Peso</td>
                        <td>Abaixo de 18,5</td>
                    </tr>
                    <tr>
                        <td>Abaixo do Peso</td>
                        <td>Abaixo de 18,5</td>
                    </tr>
                    <tr>
                        <td>Abaixo do Peso</td>
                        <td>Abaixo de 18,5</td>
                    </tr>
                    <tr>
                        <td>Abaixo do Peso</td>
                        <td>Abaixo de 18,5</td>
                    </tr>
                    <tr>
                        <td>Abaixo do Peso</td>
                        <td>Abaixo de 18,5</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
