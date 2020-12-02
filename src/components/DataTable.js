import { Container, Row, Col, Table } from 'react-bootstrap';


export default function DataTable(props) {

    console.log('employees: ', props.employees);
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>DOB</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.employees.map((employee, index) => {
                                let d = new Date(employee.dob.date);
                                let dateOfBirth = d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear();
                                return (
                                    <tr key={index}>
                                        <td><img src={employee.picture.thumbnail} alt='employee avatar' /></td>
                                        <td>{employee.name.first + ' ' + employee.name.last}</td>
                                        <td>{employee.phone}</td>
                                        <td>{employee.email}</td>
                                        <th>{dateOfBirth}</th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>


        // ---> FROM WEEK 19 ACT 19, CODE FOR USING RESULTS FROM ARRAY OF EMPLOYEES TO POPULATE EMPLOYEE LIST

        // import React from "react";

        // function ResultList(props) {
        //   return (
        //     <ul className="list-group">
        //       {props.results.map(result => (
        //         <li className="list-group-item" key={result.id}>
        //           <img alt={result.title} className="img-fluid" src={result.images.original.url} />
        //         </li>
        //       ))}
        //     </ul>
        //   );
        // }

        // export default ResultList;  

    )
}