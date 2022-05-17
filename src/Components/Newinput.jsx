import React, { Component } from 'react'
import './Styles.css'

export class Newinput extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: " ",
          department: " ",
          rating: " ",
          employees: [],
        };
      }
    
      handleNameChange = (i) => {
        this.setState({
          name: i.target.value,
        });
      };
      handleDepartmentChange = (i) => {
        this.setState({
          department: i.target.value,
        });
      };
      handleRatingChange = (i) => {
        this.setState({
          rating: i.target.value,
        });
      };

      handleSubmitClick = (i) => {
        i.preventDefault();
        const Newobj = {
          name: this.state.name,
          department: this.state.department,
          rating: this.state.rating,
        };
        const tempo = this.state.employees;
        tempo.push(Newobj);
        this.setState({ employees: tempo });
      }; 


  render() {
    return (
       <div>
        <from action="">
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <div>
            <label class="label">Name :</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            ></input>
          </div>
          <br />
          <div>
            <lable class="label">Department :</lable>
            <input
              type="text"
              value={this.state.department}
              onChange={this.handleDepartmentChange}
            ></input>
          </div>
          <br />
          <div>
            <lable class="label">Rating :</lable>
            <input
              type="text"
              value={this.state.rating}
              onChange={this.handleRatingChange}
            ></input>
          </div>
          <br />
          <br />
          <button type="Submit" onClick={this.handleSubmitClick}>
            Submit
          </button>
        </from>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          {this.state.employees.map((value, index) => {
            return (
              <div className="box">
                {index + 1}. Name : {value.name} | Department :{" "}
                {value.department} | Rating : {value.rating}
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}

export default Newinput