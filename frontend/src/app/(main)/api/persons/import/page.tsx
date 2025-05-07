'use client';

import { useState } from 'react';
import constants from "@/app/utils/constants";

export default function ImportPersons() {
    let [wronglyFormattedValue, setWronglyFormattedValue] = useState<string | null | Promise<string>>(null);
    let [persons, setPersons] = useState<Array<string>>([]);

    const url = `${constants.baseVismaUrl}/api/persons/import`;

    // should be using env var instead
    const key = '$2b$10$uBJIKkyyAlp0Byv94B.RsuQRiOzYqe4kjSBB1a6.6FpL9rb1onD/q';

    const defValue = ["firstname=value" + "\n" + "lastname=value"];

    const validKeys = ["firstname", "lastname", "ssn", "address", "postcode", "country"];
    const validKeysStr = validKeys.join(",");

    async function parseAndValidatePersons(ev) {
        ev.preventDefault();

        const txtAreaElem = (document.getElementById("txtAreaPersons") as HTMLTextAreaElement).value;

        if (txtAreaElem.length < 1) {
            setWronglyFormattedValue("More keys/values are needed!");
            return;
        }

        const arr = parsePersonsIntoArray(txtAreaElem);

        if (!validatePersons(arr) || !checkKeysAreCorrect(arr)) {
            return;
        }

        await submitPersons(ev);
    }

    function parsePersonsIntoArray(txtAreaElem: string): Array<string> {
        return txtAreaElem.trim().toLowerCase().split("\n");

        // console.log("parsePersonsIntoArray", arr);
        // setPersons(arr);
    }

    function validatePersons(arr: Array<string>): boolean {
        const pattern = /^[a-z]+=[a-z]|[0-9]+$/;

        console.log("validatePersons", arr);

        for (let i = 0; i < arr.length; i++) {
            if (!arr[i].match(pattern)) {
                setWronglyFormattedValue(arr[i] + " is wrongly formatted");
                return false;
            }
        }

        setWronglyFormattedValue(null);
        return true;
    }

    function checkKeysAreCorrect(arr: Array<string>): boolean {
        const lengthOfValidKeys = validKeys.length;

        const quotient = arr.length / lengthOfValidKeys;
        if (arr.length / lengthOfValidKeys % quotient !== 0) {
            setWronglyFormattedValue(`The amount of keys are incorrect since the list contains a total of ${arr.length} keys.`);
            return false;
        }

        let ctr = quotient;
        const keyPattern = /^[a-z]+/;
        const valuePattern = /[a-z]+$/;
        let newPersonsArr = [];

        while (ctr > 0) {
            let obj = {};
            let arrWithDeletedElements = arr.splice(-lengthOfValidKeys);
            arrWithDeletedElements.forEach(el => {
                const nameOfKeyArr = el.match(keyPattern);
                const nameOfValArr = el.match(valuePattern);
                if (nameOfKeyArr && nameOfValArr) {
                    obj[nameOfKeyArr[0]] = nameOfValArr[0];
                }
                else {
                    setWronglyFormattedValue(`Could not find matching key/value from ${el}.`);
                    return false;
                }
            });

            const deletedElementsStr = Object.keys(obj).join(",")
            console.log("checkKeysAreCorrect", obj);

            if (validKeysStr !== deletedElementsStr) {
                setWronglyFormattedValue(`The keys ${deletedElementsStr} do not match the valid keys ${validKeysStr}.`);
                return false;
            }

            ctr--;

            newPersonsArr.push(obj);
        }

        console.log("checkKeysAreCorrect", newPersonsArr);

        persons = newPersonsArr;

        return true;
    }

    async function submitPersons(ev) {
        ev.preventDefault();

        console.log("submitPersons", JSON.stringify({persons}));

        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': key
            },
            body: JSON.stringify(persons)
        });

        if (resp.status === 400) {
            const data = JSON.parse(await resp.text());
            setWronglyFormattedValue(data.detail);
        }

        if (resp.status === 401) {
            setWronglyFormattedValue("Unauthorized!");
        }

        persons = [];
    }


    return (
        <section className="flex-auto mt-10">
            <p className="mb-5">Format: key=value on each line. Mandatory keys are: <span className="text-blue-400">{validKeys.join(' ')}</span></p>
            <textarea id="txtAreaPersons" className="w-200 rounded-md border p-3 h-50"></textarea>
            <button className="block mt-5" type="submit" onClick={parseAndValidatePersons}>Import</button>
            <p className="mt-5 text-red-400">{wronglyFormattedValue}</p>
        </section>
    );
}
