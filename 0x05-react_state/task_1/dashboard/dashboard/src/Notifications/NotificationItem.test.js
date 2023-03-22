import React from 'react';
import NotificationItem from "./NotificationItem.js"
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


it(" rendering of the component", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test"/>)
    expect(wrapper.exists()).toEqual(true);
})

it("renders the correct Props ", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test"/>)
    expect(wrapper.props()).toContain('{"children": "test", "data-priority": "default", "onClick": [Function onClick]}')
})

it("renders the correct html", () => {
    const wrapper = shallow(< NotificationItem type="urgent" html={{ __html: '<u>test</u>' }} />)
    expect(wrapper.html()).toEqual('<li data-priority=\"urgent\"><u>test</u></li>')
})