import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import RatingStars from './RatingStars';

type Props = {
  onSubmit: (data: { text: string; stars: number }) => void;
};

export default function KommentarBox({ onSubmit }: Props) {
  const [text, setText] = useState('');
  const [stars, setStars] = useState(0);

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
        style={styles.input}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    backgroundColor: '#fff',
    minHeight: 60,
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: '#2E8B57',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
