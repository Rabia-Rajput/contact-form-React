import Button from '../../Button/Button';
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";


const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact_btn}> 
        <div className={styles.btn} >
           
           < Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize={24}/>}
           />
           < Button text='VIA CALL' icon={<FaPhoneAlt fontSize={24}/>}
           />
           
        </div>
        <div> 
           < Button isOutline text='VIA EMAIL FORM' icon={<HiMail fontSize={24}/> }
           />

</div>
   <form>
    <div className={styles.contact_form}>
        <label>Name</label>
        <input type='text' name='name'/>
    </div>
    <div className={styles.contact_form}>
        <label>E-mail</label>
        <input type='email' name='email'/>
    </div>
    <div className={styles.contact_form}>
        <label>Text</label>
        <textarea name='text'rows={8} />
    </div>
   <div style={
    {display:'flex',

justifyContent:'end',}
   }>
   < Button  text='SUBMIT' 
           />
   </div>


   </form>
   </div>

        <div className={styles.img}>
            <img src='/images/service.png.png'/>



        
        </div>
    </section>
  )
};

export default ContactForm;