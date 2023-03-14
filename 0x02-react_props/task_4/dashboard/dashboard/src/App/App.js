import './App.css'
import Header from './components/Header';
import Notifications from './components/Notifications';
import Login from './components/Login';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </div>
  )
}
