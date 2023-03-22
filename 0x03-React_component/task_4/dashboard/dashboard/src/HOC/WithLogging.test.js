import React from 'react';
import { mount } from 'enzyme';
import HOC from './HOC';

describe('HOC', () => {
  it('should log when pure HTML component is mounted and unmounted', () => {
    const Component = () => <p>Hello World</p>;
    const WrappedComponent = HOC(Component);
    const consoleSpy = jest.spyOn(console, 'log');

    const wrapper = mount(<WrappedComponent />);
    expect(consoleSpy).toHaveBeenCalledWith(`Component WithLogging(Component) is mounted `);

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith(`Component WithLogging(Component) is going to unmount`);

    consoleSpy.mockRestore();
  });

  it('should log when Login component is mounted and unmounted', () => {
    const Login = () => <div>Login Component</div>;
    Login.displayName = 'Login';
    const WrappedLogin = HOC(Login);
    const consoleSpy = jest.spyOn(console, 'log');

    const wrapper = mount(<WrappedLogin />);
    expect(consoleSpy).toHaveBeenCalledWith(`Component WithLogging(Login) is mounted `);

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith(`Component WithLogging(Login) is going to unmount`);

    consoleSpy.mockRestore();
  });
});
