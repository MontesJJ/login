import { useState } from 'react';

export default function SecureLogin () {

    const [email, setEmail] = useState("");

    return (
        <form>
            <input
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            >
            </input>
        </form>
    )
}
