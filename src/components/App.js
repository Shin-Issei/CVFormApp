import "../styles/App.css";
import React from "react";
import Display from "./Display";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "Input",
      name: "Jordan",
      phone: "8609674119",
      email: "MrJordanCollins@yahoo.com",
      education: "",
      degree: "",
      prevJobs: "",
      skills: "",
    };
    this.updateReactState = this.updateReactState.bind(this);
    this.displayMode = this.displayMode.bind(this);
    this.editMode = this.editMode.bind(this);
  }

  displayMode() {
    this.setState({ mode: "Display" });
  }

  updateReactState(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  }

  editMode() {
    this.setState({ mode: "Input" });
  }

  render() {
    if (this.state.mode === "Display") {
      return (
        <div id="main">
          CV App
          <Display
            name={this.state.name}
            phone={this.state.phone}
            email={this.state.email}
            education={this.state.education}
            prevJobs={this.state.prevJobs}
            skills={this.state.skills}
          />
          <button onClick={this.editMode}>Edit</button>
        </div>
      );
    }
    return (
      <div id="main">
        CV App
        <form>
          <label>Name: </label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.updateReactState}
          />
          <label>Phone Number: </label>
          <input
            name="phone"
            value={this.state.phone}
            onChange={this.updateReactState}
          />
          <label>E-mail: </label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.updateReactState}
          />
          <label>College: </label>
          <input
            name="education"
            value={this.state.education}
            onChange={this.updateReactState}
          />
          <label>Previous Employer: </label>
          <input
            name="prevJobs"
            value={this.state.prevJobs}
            onChange={this.updateReactState}
          />
          <label>Relevant Skills: </label>
          <textarea
          rows="10"
          cols="30"
            name="skills"
            value={this.state.skills}
            onChange={this.updateReactState}
          />
          <button onClick={this.displayMode}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
