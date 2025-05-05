import {
  IonButton,
  IonContent,
  IonPage,
  
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { useHistory } from 'react-router';
import { getAuth, signOut } from 'firebase/auth';

const Home: React.FC = () => {
  const history = useHistory();
  const auth = getAuth();
  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
    history.push('/login');
  };

  return (
    <IonPage>
      <IonContent
        fullscreen
        style={{
          background: 'linear-gradient(to bottom, #1e3c72, #2a5298)',
          color: 'white',
        }}
        className="ion-padding"
      >
        <IonCard style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
          <IonCardHeader>
            <IonCardTitle style={{ color: '#1e3c72' }}>
              Welcome, {user?.email}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent style={{ color: '#333' }}>
            Start your fitness journey with daily workouts and healthy habits.
          </IonCardContent>
        </IonCard>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                expand="block"
                color="light"
                onClick={() => history.push('/workout')}
              >
                Workout Plan
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                expand="block"
                color="light"
                onClick={() => history.push('/nutrition')}
              >
                Nutrition Tips
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonButton
          expand="block"
          color="danger"
          className="ion-margin-top"
          onClick={handleLogout}
        >
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
