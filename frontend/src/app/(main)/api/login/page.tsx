'use client';

import { useState } from 'react';
import constants from '@/app/utils/constants';

export default function Login() {
    let [data, setData] = useState("");

    async function submitForm(ev) {
        ev.preventDefault();

        const url = `${constants.baseVismaUrl}/api/login`;

        const form = ev.target;
        const formData = new FormData(form);

        const request = new Request(url, {
            method: form.method,
            body: JSON.stringify({ username: formData.get('email'), password: formData.get('password') }),
            headers: { 'Content-Type': 'application/json' }
        });

        const response = await fetch(request);
        data = await response.text();

        if (response.ok) {
            form.reset();
        }

        setData(data);
    }

    return (
        <section className="flex-auto">
            <h1>Login</h1>
            <form method="post" onSubmit={submitForm}>
                <label>Email</label>
                <input type="email" name="email" required={true} placeholder="email@example.com" />
                <label>Password</label>
                <input type="password" name="password" required={true} placeholder="xxxxxx" />
                <br />
                <br />
                <button type="submit">Login</button>

                <h2 style={{
                    margin: '20px 0 10px',
                    color: 'yellow',
                    fontSize: '1rem',
                }}>{data}</h2>
            </form>
        </section>
    );
}
