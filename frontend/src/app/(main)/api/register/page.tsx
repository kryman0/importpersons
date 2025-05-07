'use client';

import { useState } from 'react';
import constants from '@/app/utils/constants';

export default function Register() {
    let [data, setData] = useState("");

    async function submitForm(ev) {
        ev.preventDefault();

        const url = `${constants.baseVismaUrl}/api/register`;

        const form = ev.target;
        const formData = new FormData(form);

        const request = new Request(url, {
            method: form.method,
            body: JSON.stringify({ username: formData.get('email'), password: formData.get('password') }),
            headers: { "Content-Type": "application/json" },
        });

        const resp = await fetch(request);
        data = await resp.text();

        if (resp.ok) {
            form.reset();
        }

        setData(data);
    }

    return (
        <section className="flex-auto">
            <h1>Register new User</h1>
            <form method="post" onSubmit={submitForm}>
                <label>Email</label>
                <input type="email" name="email" required={true} placeholder="email@example.com" />
                <label>Password</label>
                <input type="password" name="password" required={true} placeholder="xxxxxx" />
                <br />
                <br />
                <button type="submit">Register</button>
            </form>

            <h2 style={{
                margin: '20px 0 10px',
                color: 'yellow',
                fontSize: '1rem',
            }}>{data}</h2>
        </section>
    );
}
