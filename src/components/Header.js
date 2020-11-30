import react from 'react';
import { Jumbotron } from 'react-bootstrap';

export default function Header() {
    return (
        <Jumbotron className="text-center">
            <h1>Employee Directory</h1>
            <p>
                Click on column name to filter by heading or use the search box to narrow your results.
            </p>
        </Jumbotron>
    )
}

