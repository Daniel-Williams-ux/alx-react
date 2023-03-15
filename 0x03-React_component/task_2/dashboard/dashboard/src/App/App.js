import React from 'react';
import PropTypes from 'prop-types';
import Notifications from './Notifications';
import Header from './Header';
import Login from './Login';
import CourseList from './CourseList';
import Footer from './Footer';
import './App.css';

class App extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };
  
  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    return (
      <div>
        <Notifications />
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <CourseList listCourses={listCourses} />
        <Footer />
      </div>
    );
  }
}

export default App;
