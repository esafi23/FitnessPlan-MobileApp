import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonText,
    IonButtons,
    IonBackButton,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
  } from '@ionic/react';
  import { checkmarkCircleOutline, bodyOutline, walkOutline, flameOutline, accessibilityOutline } from 'ionicons/icons';
  
  const Workout: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/home" />
            </IonButtons>
            <IonTitle>Workout Plan</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent className="ion-padding">
          <IonText>
            <h2>Today's Fitness Plan</h2>
          </IonText>
  
          <IonList>
            <IonItem>
              <IonIcon icon={bodyOutline} slot="start" />
              <IonLabel>10 Push-ups</IonLabel>
              <IonIcon icon={checkmarkCircleOutline} slot="end" />
            </IonItem>
            <IonItem>
              <IonIcon icon={walkOutline} slot="start" />
              <IonLabel>20 Squats</IonLabel>
              <IonIcon icon={checkmarkCircleOutline} slot="end" />
            </IonItem>
            <IonItem>
              <IonIcon icon={accessibilityOutline} slot="start" />
              <IonLabel>15 Sit-ups</IonLabel>
              <IonIcon icon={checkmarkCircleOutline} slot="end" />
            </IonItem>
            <IonItem>
              <IonIcon icon={flameOutline} slot="start" />
              <IonLabel>1-Minute Plank</IonLabel>
              <IonIcon icon={checkmarkCircleOutline} slot="end" />
            </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Workout;
  