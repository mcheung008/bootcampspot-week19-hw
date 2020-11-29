import { useState, useEffect } from 'react';
import Search from './Search';
import DataTable from './DataTable';
import API from '../utils/API';

export default function Body() {
    const [employees, setEmployees] = useState([]);
    const [employeesCopy, setEmployeesCopy] = useState([]);
    useEffect(function () {
        API.getUsers().then(function (response, err) {
            if (err) throw err;
            setEmployees(response.data.results);
            setEmployeesCopy(response.data.results);
        })
    }, []);

    function handleClick(event) {
        event.preventDefault();
        let searchName = document.querySelector('#searchName');
        let filteredEmployees = employees.filter(employee => {
            return (employee.name.first.toUpperCase() === searchName.value.toUpperCase());
        });
        console.log('filterEmployees: ', filteredEmployees);
        if (filteredEmployees.length === 0) {
            setEmployeesCopy(employees);
        } else{
            setEmployeesCopy(filteredEmployees);
        }
    }
    return (
        <>
            <Search handleClick={handleClick} />
            <DataTable employees={employeesCopy} />
        </>
    )
}