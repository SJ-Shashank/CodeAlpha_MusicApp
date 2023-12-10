import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                
                    <div className={"Card-details"}>
                        <h3>xoxo</h3>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <div className="Card-btn">
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;