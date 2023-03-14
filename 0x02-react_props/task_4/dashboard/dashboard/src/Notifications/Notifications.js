import React, { useState } from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer }) {
  const [showNotifications, setShowNotifications] = useState(displayDrawer);

  return (
    <div className="Notifications">
      <div className="menuItem">Your notifications</div>
      <button
        style={{
          color: '#3a3a3a',
          fontWeight: 'bold',
          background: 'none',
          border: 'none',
          fontSize: '15px',
          position: 'absolute',
          right: '3px',
          top: '3px',
          cursor: 'pointer',
          outline: 'none',
        }}
        aria-label="Close"
        onClick={(e) => {
          console.log('Close button has been clicked');
          setShowNotifications(false);
        }}
      >
        <img src={closeIcon} alt="close icon" />
      </button>
      {showNotifications && (
        <>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={getLatestNotification()}
            />
          </ul>
        </>
      )}
    </div>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;
