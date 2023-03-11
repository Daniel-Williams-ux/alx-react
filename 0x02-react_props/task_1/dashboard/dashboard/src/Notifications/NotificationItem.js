import React from 'react';

function NotificationItem(props) {
  const { type, html, value } = props;

  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html ? { __html: html } : null}>
      {value}
    </li>
  );
}

export default NotificationItem;
