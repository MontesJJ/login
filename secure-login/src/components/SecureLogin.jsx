import { useState } from 'react';
import { generatePass } from './generatePass';

export default function SecureLogin () {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = async () => {
        const generatedPassword = await generatePass();
        setPassword(generatedPassword.password);
    }

    return (
        <form>
            {/*USUARIO*/}
            <div className="input__container username">
            <div className="shadow__input"></div>
            <button className="input__button__shadow" type='button'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000000"
                width="20px"
                height="20px"
                >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                ></path>
                </svg>
            </button>
            <input
                type="text"
                name="username"
                className="input__search"
                placeholder="Enter username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            </div>

            {/*CONTRASEÑA*/}
            <div className="input__container password">
            <div className="shadow__input"></div>
            <button className="input__button__shadow" onClick={handleClick} type='button'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#000000"
                    width="20px"
                    height="20px"
                >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 2C9.79 2 8 3.79 8 6v4H7c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-1V6c0-2.21-1.79-4-4-4zm-1 10v4h2v-4h-2zm1-8c1.1 0 2 .9 2 2v4h-4V6c0-1.1.9-2 2-2z"></path>
                </svg>
            </button>

            <input
                type="text"
                name="password"
                className="input__search"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            
            {/*REGISTRO*/}
            <div className="input__container registrer" onClick={handleClick}>LET'S DO IT!</div>

        </form>
    )
}
