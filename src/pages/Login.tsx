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
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../firebaseConfig';
  
  const Login: React.FC = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        history.push('/home');
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Login failed. Please try again.');
        }
      }
    };
  
    return (
      <IonPage>
        <IonContent className="ion-padding">
          <h2>Login</h2>
  
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
  
          {error && (
            <IonText color="danger">
              <p>{error}</p>
            </IonText>
          )}
  
          <IonButton expand="block" className="ion-margin-top" onClick={handleLogin}>
            Log In
          </IonButton>
  
          <IonButton
            expand="block"
            fill="clear"
            onClick={() => history.push('/register')}
          >
            Don’t have an account? Register
          </IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;
  