import {
    IonButton,
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonText,
  } from '@ionic/react';
  import { useState } from 'react';
  import { useHistory } from 'react-router';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../firebaseConfig';
  
  const Register: React.FC = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleRegister = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        history.push('/home');
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Registration failed');
        }
      }
    };
  
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <h2>Register</h2>
  
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              type="email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
            />
          </IonItem>
  
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
          </IonItem>
  
          {error && <IonText color="danger">{error}</IonText>}
  
          <IonButton expand="block" className="ion-margin-top" onClick={handleRegister}>
            Register
          </IonButton>
  
          <IonButton
            expand="block"
            fill="clear"
            onClick={() => history.push('/login')}
          >
            Already have an account? Log in
          </IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Register;
  