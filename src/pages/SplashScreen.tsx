import {
    IonContent,
    IonPage,
    IonButton
  } from '@ionic/react';
  import { useHistory } from 'react-router';
  import './SplashScreen.css';
  
  const SplashScreen: React.FC = () => {
    const history = useHistory();
  
    return (
      <IonPage>
        <IonContent fullscreen className="splash-content">
          <div className="overlay">
            <h1>FitnessPlan</h1>
            <p>Your personal fitness tracker</p>
            <IonButton expand="block" onClick={() => history.push('/login')}>
              Get Started
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default SplashScreen;
  