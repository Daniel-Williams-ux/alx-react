import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Notifications />);
    expect(getByRole('list')).toBeInTheDocument();
  });

  it('renders NotificationItem elements', () => {
    const { getAllByRole } = render(<Notifications />);
    const notificationItems = getAllByRole('listitem');
    expect(notificationItems).toHaveLength(3);
  });

  it('renders the correct HTML for the first NotificationItem', () => {
    const { getByRole } = render(<Notifications />);
    const notificationItem = getByRole('listitem');
    expect(notificationItem).toHaveAttribute('data-notification-type', 'default');
    expect(notificationItem).toHaveTextContent('New course available');
  });
});
