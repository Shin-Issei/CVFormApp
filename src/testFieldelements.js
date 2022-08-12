import React from "react";

class FormElements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "Input",
      name: "Jordan",
      phone: "8609674119",
      email: "MrJordanCollins@yahoo.com",
    };
    this.updateReactState = this.updateReactState.bind(this);
    this.displayHelloWorld = this.displayHelloWorld.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  displayHelloWorld() {
    this.setState({ mode: "Display" });
  }

  //   updateReactState(event) {
  //     this.setState({ name: event.target.value });
  //   }

  updateReactState(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  }

  goBack() {
    this.setState({ mode: "Input" });
  }

  render() {
    if (this.state.mode === "Display") {
      return (
        <div>
          <div id="cv-display">
            Name: {this.state.name}
            Phone: {this.state.phone}
          </div>
          <button onClick={this.goBack}>goBack</button>
        </div>
      );
    }
    return (
      <div>
        <form>
          <label>Name: </label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.updateReactState}
          />
          <label>Phone Number: </label>
          <input
            required
            name="phone"
            value={this.state.phone}
            onChange={this.updateReactState}
          />
          <button onClick={this.displayHelloWorld}>Submit</button>
        </form>
      </div>
    );
  }
}

export default FormElements;
