import React from "react";
import "./style.css";

// Will eventually take in friend props
function GeneralChat() {
    return (
        <div className="card m-4">
        <div className="card-body text-center">
            <h5 className="header card-title">General Chat</h5>
        </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Messages</li>
            </ul>
        </div>
    );
}

export default GeneralChat;