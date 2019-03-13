import React from "react";
import { connect } from "react-redux";
import { Button, Container, Table, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import { deleteContact } from "../actions/contact";

class Home extends React.Component {
  onDeleteContact = id => {
    this.props.deleteContact(id);
  };
  renderContactList = () => {
    return this.props.contacts.map(contact => (
      <Table.Row key={contact.id}>
        <Table.Cell>{contact.name}</Table.Cell>
        <Table.Cell>{contact.phone}</Table.Cell>
        <Table.Cell>
          <Button onClick={() => this.onDeleteContact(contact.id)} color="red">
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    ));
  };
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Column textAlign="center">
            <Button as={Link} to="/new" color="teal" size="massive">
              Add New Contact!
            </Button>
          </Grid.Column>
        </Grid>

        <Table style={{ marginTop: "3rem" }} color="teal" unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>

          <Table.Body>{this.renderContactList()}</Table.Body>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = ({ contacts }) => {
  return { contacts };
};

export default connect(
  mapStateToProps,
  { deleteContact }
)(Home);
