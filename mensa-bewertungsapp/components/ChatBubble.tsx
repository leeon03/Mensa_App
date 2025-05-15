import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  user: string;
  text: string;
};

export default function ChatBubble({ user, text }: Props) {
  return (
    <View style={styles.bubble}>
      <Text style={styles.user}>{user} sagt:</Text>
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
  },
});
