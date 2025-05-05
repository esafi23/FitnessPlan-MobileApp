import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButtons,
    IonBackButton
  } from '@ionic/react';
  
  const tips = [
    { title: "Drink Water", content: "Aim for 2-3 liters of water daily." },
    { title: "Eat Protein", content: "Include a source of protein in every meal." },
    { title: "Limit Sugar", content: "Avoid processed sugars and sweetened drinks." },
    { title: "Balanced Diet", content: "Include fruits, veggies, grains, and healthy fats." },
  ];
  
  const Nutrition: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/home" />
            </IonButtons>
            <IonTitle>Nutrition Tips</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent className="ion-padding">
          {tips.map((tip, index) => (
            <IonCard key={index}>
              <IonCardHeader>
                <IonCardTitle>{tip.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{tip.content}</IonCardContent>
            </IonCard>
          ))}
        </IonContent>
      </IonPage>
    );
  };
  
  export default Nutrition;
  