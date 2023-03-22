import React from 'react';
import CourseListRow from "./CourseListRow.js"
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


it('renders one cell with colspan = 2', () => {
    let textSecondCell = null;
    const wrapper = shallow(<CourseListRow  isHeader textFirstCell= "textFirstCell" {...{textSecondCell}}  />);
    expect(wrapper.html()).toBe('<tr><th colSpan="2">textFirstCell</th></tr>')
});

it('returns two th elements containing textFirstCell and textSecondCell', () => {
    let textSecondCell = 'textSecondCell';
    const wrapper = shallow(<CourseListRow  isHeader textFirstCell= "textFirstCell" {...{textSecondCell}}  />);
    expect(wrapper.html()).toBe('<tr><th>textFirstCell</th><th>textSecondCell</th></tr>')
});

it("returns two td elements containing textFirstCell and textSecondCell",() =>{
    const wrapper = shallow(<CourseListRow textFirstCell = "textFirstCell" textSecondCell = "textSecondCell"/>);
    expect(wrapper.html()).toBe("<tr><td>textFirstCell</td><td>textSecondCell</td></tr>")

})