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
                    <img src="//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2F-EqMjbgINU48%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2FHCxYRoomBxs%2Fs900-c-k-no%2Fphoto.jpg&f=1&nofb=1" alt="User" />
                </a>
            </div>
        </header>
    )
}