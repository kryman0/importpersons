'use client';

import { useState } from 'react';
import constants from '@/app/utils/constants';

export default function Persons() {
    let [data, setData] = useState([]);
    let [noDataFound, setNoDataFound] = useState("");

    async function getPersons() {
        const url = `${constants.baseVismaUrl}/api/persons`;

        const request = new Request(url, {
            method: "GET",
        });

        let response = await fetch(request);
        if (response.status === 204) {
            noDataFound = "No persons registered! Please import at least one person."
            setNoDataFound(noDataFound);
        }
        else {
            data = await response.json();
            setData(data);
            noDataFound = "";
            setNoDataFound(noDataFound);
        }
    }

    return (
        <section className="flex-auto">
            <p onClick={getPersons}><span className="hover">Get Persons</span></p>
            <table>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>SSN</th>
                        <th>Address</th>
                        <th>Postcode</th>
                        <th>Country</th>
                    </tr>
                </thead>
                    <tbody>
                    {data.map((person) =>
                        <tr key={person.id}>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.ssn}</td>
                            <td>{person.address}</td>
                            <td>{person.postCode}</td>
                            <td>{person.country}</td>
                        </tr>
                    )}
                    </tbody>
            </table>
            <p className="text-red-400">{noDataFound}</p>
        </section>
    );
}
