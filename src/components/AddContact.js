import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Form, Button, Segment } from "semantic-ui-react";
import cuid from "cuid";
import { addContact } from "../actions/contact";

class AddContact extends Component {
  state = {
    name: "",
    phone: ""
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = () => {
    const data = {
      name: this.state.name,
      phone: this.state.phone,
      id: cuid()
    };
    this.props.addContact(data, this.props.history.push("/"));
  };
  render() {
    const { name, phone } = this.state;
    return (
      <Container>
        <Segment className="form" color="teal">
          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Name</label>
              <input
                name="name"
                value={name}
                onChange={this.onInputChange}
                placeholder="Name"
              />
            </Form.Field>
            <Form.Field>
              <label>Phone Number</label>
              <input
                onChange={this.onInputChange}
                type="number"
                value={phone}
                name="phone"
                placeholder="Phone Number"
              />
            </Form.Field>
            <h3>Subscriber to be added: </h3>
            Name: {name}
            <br />
            Phone: {phone}
            <br />
            <br />
            <Button type="submit" color="teal">
              Submit
            </Button>
            <Button onClick={() => this.props.history.push("/")} color="red">
              Cancel
            </Button>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default connect(
  null,
  { addContact }
)(AddContact);
