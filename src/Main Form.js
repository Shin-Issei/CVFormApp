import React from "react";

class FormElements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "Input",
      name: "Jordan",
      phone: "8609674119",
      email: "MrJordanCollins@yahoo.com",
      allInfo: this.phone
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
        // <div>
        //   <div id="cv-display">
        //     <p id="info">
        //     Name: {this.state.name} 
        //     Phone: {this.state.phone} 
        //     Email: {this.state.email} 
        //     </p>
        //   </div>
        //   <button onClick={this.editMode}>Edit</button>
        // </div>
        <div>
          {this.state.allInfo}
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
          <button onClick={this.displayMode}>Submit</button>
        </form>
      </div>
    );
  }
}

export default FormElements;
