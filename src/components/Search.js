import react from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

export default function Search(props) {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col lg={4}>
                    <InputGroup className="mb-3">
                        <FormControl id="searchName"
                            placeholder="Employee Name"
                            aria-label="Employee Name"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={props.handleClick}>Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
        </Container>

    )
}