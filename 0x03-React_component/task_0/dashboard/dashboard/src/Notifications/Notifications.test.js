import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Notifications from './Notifications';

describe("Testing the <Notifications /> Component", () => {
  
  let wrapper;
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    wrapper = shallow(<Notifications />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("<Notifications /> is rendered without crashing", () => {
    expect(wrapper).to.not.be.an('undefined');
  });

  it("<Notifications /> renders three list items", () => {
    expect(wrapper.find('li')).to.have.lengthOf(3);
  });

  it("<Notifications /> render the text 'Here is the list of notifications'", () => {
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
  });

  it("<Notifications /> should display the menuItem when displayDrawer is false", () => {
    wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem')).to.have.lengthOf(1);
  });

  it("<Notifications /> should not display the div.Notifications when displayDrawer is false", () => {
    wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications')).to.have.lengthOf(0);
  });

  it("<Notifications /> should display the div.Notifications and hide the menuItem when displayDrawer is true", () => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).to.have.lengthOf(1);
    expect(wrapper.find('.menuItem')).to.have.lengthOf(0);
  });

  it("<Notifications /> should call handleDisplayDrawer when the menuItem is clicked", () => {
    const handleDisplayDrawer = sandbox.spy(Notifications.prototype, 'handleDisplayDrawer');
    wrapper = shallow(<Notifications />);
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).to.have.been.calledOnce;
  });

  it("<Notifications /> should call handleHideDrawer when the close button is clicked", () => {
    const handleHideDrawer = sandbox.spy(Notifications.prototype, 'handleHideDrawer');
    wrapper = shallow(<Notifications displayDrawer={true} />);
    wrapper.find('.Notifications button').simulate('click');
    expect(handleHideDrawer).to.have.been.calledOnce;
  });

});
