import { Button } from '@material-ui/core';
import { AccountCircleOutlined, FavoriteBorder, Search } from '@material-ui/icons';
import React from 'react';
import './css/BottomNavBar.css';

function BottomNavBar() {
    return (
        <div className="bottomNavBar">
            <div className="bottomNavBar__icons">
                <div className="bottomNavBar__iconButton">
                    <Search className="bottomNavBar__iconActive" />
                    <h6>Explore</h6>
                </div>

                <div className="bottomNavBar__iconButton">
                    <FavoriteBorder className="bottomNavBar__icon" />
                    <h6>Saved</h6>
                </div>

                <div className="bottomNavBar__iconButton">
                    <AccountCircleOutlined className="bottomNavBar__icon" />
                    <h6>Log in</h6>
                </div>
            </div>
        </div>
    )
}

export default BottomNavBar;
