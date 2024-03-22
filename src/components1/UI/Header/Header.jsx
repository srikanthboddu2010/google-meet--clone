import React from 'react';
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faQuestionCricle,
    faExclamationCricle,
    faCog,
} from "@fortawesome/free-solid-svg-icons"
const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <img src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png" alt="No" />
            <span className="help-text">
                Meet
            </span>
        </div>
        <div className="action-btn">
         {/* <FontAwesomeIcon className="icon-block" icon={faQuestionCricle} /> */}
         {/* <FontAwesomeIcon className="icon-block" icon={faExclamationCricle} /> */}
         <FontAwesomeIcon className="icon-block" icon={faCog} />
        </div>
    </div>
  );
}

export default Header;
