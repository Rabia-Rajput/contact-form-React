import styles from './Button.module.css';



const Button = ({text, icon , isOutline , ...rest }) => {
  return ( <div> 
    <button {...rest} className={isOutline ?styles.outline_Btn: styles.primaryBtn}>
    {icon}
      {text}
    </button>
    </div>
   
  );
};

export default Button;