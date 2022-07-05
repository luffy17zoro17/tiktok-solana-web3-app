
import styles from '../styles/Signup.module.css';
import {useState} from "react";

export const Signup = ({signup}) => {

  const [username, setUserName] = useState('');
  const [profile, setProfile] = useState('');


  const signUpClicked = () => {
    console.log("SIGNING UP@!");
    signup(username,profile);
  }
  console.log(username,profile);

  return (
    <div className={styles.authContainer}>
        <h1 className={styles.title}>
            Sign Up to use Tiktok
        </h1>
        <div className={styles.signupForm}>
            <div className={styles.inputField}>
               <div className={styles.inputTitle}>
                    Username:
               </div> 
               <div className={styles.inputContainer}>
                    <input
                      className={styles.input}
                      type='text'
                      onChange = {e => setUserName(e.target.value)} 
                    />  
               </div>
            </div>
            <div className={styles.inputField}>
                <div className={styles.inputTitle}>
                    Profile Image:
                </div>
                <div className={styles.inputContainer}>
                    <input
                      className={styles.input}
                      type='text'
                      onChange={e => setProfile(e.target.value)}
                      />
                </div>
            </div>
        </div>

        <div className={styles.loginButton}
         onClick={signUpClicked}>
            Sign up
        </div>     
    </div>
  );
}

