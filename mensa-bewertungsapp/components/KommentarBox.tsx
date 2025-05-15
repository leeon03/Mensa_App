import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import RatingStars from './RatingStars';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

type Props = {
  onSubmit: (data: { text: string; stars: number }) => void;
};

export default function KommentarBox({ onSubmit }: Props) {
  const [text, setText] = useState('');
  const [stars, setStars] = useState(0);
  const theme = useColorScheme() || 'light';

  const handleSubmit = () => {
    if (text.trim().length > 0 && stars > 0) {
      onSubmit({ text, stars });
      setText('');
      setStars(0);
    }
  };

  return (
    <View style={styles.container}>
      <RatingStars value={stars} editable onChange={setStars} />
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Wie hat es dir geschmeckt?"
        placeholderTextColor={Colors[theme].icon}
        style={[styles.input, {
          color: Colors[theme].text,
          backgroundColor: Colors[theme].surface,
          borderColor: Colors[theme].icon,
        }]}
        multiline
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: Colors[theme].primary }]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Absenden</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    minHeight: 60,
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
