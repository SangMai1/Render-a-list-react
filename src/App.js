import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.th_all = {
    	employees: [
      	{Company: 'Alfreds Futterkiste', Contact: 'Maria Anders', Country: 'Germany'},
        {Company: 'Centro comercial Moctezuma', Contact: 'Francisco Chang', Country: 'Mexico'},
        {Company: 'Ernst Handel', Contact: 'Roland Mendel', Country: 'Austria'},
        {Company: 'Island Trading', Contact: 'Helen Bennett', Country: 'UK'},
        {Company: 'Laughing Bacchus Winecellars', Contact: 'Yoshi Tannamuri', Country: 'Canada'},
        {Company: 'Magazzini Alimentari Riuniti', Contact: 'Giovanni Rovelli	', Country: 'Italy'}
      ]
    }
  }

  renderTableData() {
    return this.th_all.employees.map((employee, index) => {
      const {Company, Contact, Country} = employee
      return (
        <tr key={index}>
          <td>{Company}</td>
          <td>{Contact}</td>
          <td>{Country}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    let header = Object.keys(this.th_all.employees[0])
    return header.map((key, index) => {
      return <th key={index}>{key}</th>
    })
  }

  render() {
    return (
    <div className="App">
      <h1>This is table</h1>
      <table>
        <tbody>
          <tr>{this.renderTableHeader()}</tr>
          {this.renderTableData()}
        </tbody>
      </table>
    
    </div>
  );
  }
}

export default App;
