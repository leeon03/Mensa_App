import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  value: number;
  editable?: boolean;
  onChange?: (value: number) => void;
};

export default function RatingStars({ value, editable = false, onChange }: Props) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <View style={styles.row}>
      {stars.map((star) => (
        <TouchableOpacity
          key={star}
          onPress={() => editable && onChange?.(star)}
          disabled={!editable}
        >
          <Ionicons
            name={star <= value ? 'star' : 'star-outline'}
            size={24}
            color="#FFD700"
            style={styles.star}
          />
        </TouchableOpacity>
      ))}
      <Text style={styles.label}>{value.toFixed(1)} / 5</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 6,
  },
  star: {
    marginHorizontal: 2,
  },
  label: {
    marginLeft: 8,
    fontSize: 14,
    color: '#555',
  },
});
