import styles from './Button.module.css';
import {MdMessage} from 'react-icons/md';

const Button = ({text, icon}) => {
  return (
    <button className={styles.primaryBtn}>
<MdMessage fontSize={24}/>
VIA SUPPORT CHAT

    </button>
  );
};

export default Button;