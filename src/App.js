
import './App.css';
import ContactForm from './components/ContactHeader/ContactForm/ContactForm';
import ContactHeader from './components/ContactHeader/ContactHeader';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div>   
    <Navigation/>
    <main className='main-container'>
    <ContactHeader/>
    <ContactForm />

    </main>
   
    </div>
  );
};

export default App;
