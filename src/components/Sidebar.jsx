import React from 'react';

const Sidebar = () => {
    return ( 
        <nav className="nav">
        <div className="a-wrap">
          <a href="#">Profile</a>
        </div>
        <div className="a-wrap">
          <a href="#">Messages</a>
        </div>
        <div className="a-wrap">
          <a href="#">News</a>
        </div>
        <div className="a-wrap">
          <a href="#">Music</a>
        </div>
        <div className="a-wrap">
          <a href="#">Settings</a>
        </div>
      </nav>
    );
}

export default Sidebar;