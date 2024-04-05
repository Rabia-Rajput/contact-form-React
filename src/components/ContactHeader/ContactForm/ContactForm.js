import Button from '../../Button/Button';
import styles from './Contact.module.css';
import {MdMessage} from 'react-icons/md';


const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div >
           
           < Button text='VIA SUPPORT CHAT' icon={MdMessage}
           />
           < Button text='VIA CALL' icon={MdMessage}
           />
           < Button text='VIA EMAIL FORM' icon={MdMessage}
           />



        </div>
        <div className={styles.img}>



        </div>
    </section>
  )
};

export default ContactForm;