import React from "react";
import "./Header.css"

export default ({black}) => {
    return (
        <header className={black ? 'black': ""}>
            <div className="header--logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png?20170904093427" alt="Netflix" />
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdh_400x400.png" alt="User" />
                </a>
            </div>
        </header>
    )
}