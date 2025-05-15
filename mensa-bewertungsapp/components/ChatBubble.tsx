import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RatingStars from './RatingStars';

type Props = {
  user: string;
  text: string;
  stars: number;
};

export default function ChatBubble({ user, text, stars }: Props) {
  return (
    <View style={styles.bubble}>
      <Text style={styles.user}>{user} sagt:</Text>
      <RatingStars value={stars} editable={false} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  user: {
    fontWeight: '600',
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    marginTop: 4,
  },
});
