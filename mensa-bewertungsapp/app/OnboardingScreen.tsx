import React from 'react';
import { View, Text, Image } from 'react-native';
// @ts-ignore
import Onboarding from 'react-native-onboarding-swiper/src/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function OnboardingScreen() {
  const router = useRouter();

  const handleDone = async () => {
    await AsyncStorage.setItem('onboardingSeen', 'true');
    router.replace('/startseite'); // zurück zur Startseite
  };

  return (
    <Onboarding
      onDone={handleDone}
      onSkip={handleDone}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Ionicons name="heart" size={100} color="red" />,
          title: 'Favoriten',
          subtitle: 'Tippe auf das Herz, um deine Lieblingsgerichte zu speichern.',
        },
        {
          backgroundColor: '#fff',
          image: <Ionicons name="person-circle" size={100} color="#333" />,
          title: 'Dein Profil',
          subtitle: 'Verwalte deine Bewertungen und Einstellungen hier.',
        },
        {
          backgroundColor: '#fff',
          image: <Ionicons name="restaurant-outline" size={100} color="#333" />,
          title: 'Heute in der Mensa',
          subtitle: 'Sieh, was es heute Leckeres gibt.',
        },
        {
          backgroundColor: '#fff',
          image: <Ionicons name="heart-outline" size={100} color="#333" />,
          title: 'Essens-Tinder',
          subtitle: 'Wische durch Gerichte und bewerte mit einem Like.',
        },
      ]}
    />
  );
}
