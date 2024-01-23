import { Form } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
function SearchPlayers() {
  return (
    <div>
    <div className="searchPlayerContainer">
    <h2>Search for a player</h2>
        <InputGroup hasValidation>
        <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
        <Form.Control type="text" required isInvalid />
            <Form.Control.Feedback type="invalid">
                Please write a player's name.
            </Form.Control.Feedback>
        </InputGroup>
        <br></br>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Player ID</th>
          <th>Nickname</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>4523698521</td>
          <td>riancoper12</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
    );
}

export default SearchPlayers;