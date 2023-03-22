import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  describe('when isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="First Column"
        textSecondCell=""
      />
    );

    it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
      expect(wrapper.find('td').length).toEqual(1);
      expect(wrapper.find('td').props().colSpan).toEqual(2);
      expect(wrapper.find('td').text()).toEqual('First Column');
    });

    it('renders two cells when textSecondCell is present', () => {
      wrapper.setProps({ textSecondCell: "Second Column" });
      expect(wrapper.find('td').length).toEqual(2);
      expect(wrapper.find('td').at(0).text()).toEqual('First Column');
      expect(wrapper.find('td').at(1).text()).toEqual('Second Column');
    });
  });

  describe('when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="First Column"
        textSecondCell="Second Column"
      />
    );

    it('renders correctly two td elements within a tr element', () => {
      expect(wrapper.find('tr').length).toEqual(1);
      expect(wrapper.find('tr').find('td').length).toEqual(2);
      expect(wrapper.find('tr').find('td').at(0).text()).toEqual('First Column');
      expect(wrapper.find('tr').find('td').at(1).text()).toEqual('Second Column');
    });
  });
});
