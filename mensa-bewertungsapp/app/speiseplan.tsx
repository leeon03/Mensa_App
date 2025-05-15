import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
  Modal,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';
import RatingStars from '../components/RatingStars';
import { Ionicons } from '@expo/vector-icons';
import {
  addDays,
  subDays,
  startOfWeek,
  format,
  isSameDay,
} from 'date-fns';

const screenWidth = Dimensions.get('window').width;

const speiseplan: Record<string, any[]> = {
  '2025-05-15': [
    {
      id: 1,
      name: 'Käsespätzle',
      beschreibung: 'Mit Röstzwiebeln und Salat',
      bewertung: 4,
      tags: ['vegetarisch', 'beliebt'],
    },
    {
      id: 2,
      name: 'Chili sin Carne',
      beschreibung: 'Vegan, mit Brot',
      bewertung: 5,
      tags: ['vegan', 'scharf'],
    },
  ],
};

export default function SpeiseplanScreen() {
  const theme = useColorScheme() || 'light';
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});
  const [alerts, setAlerts] = useState<Record<number, boolean>>({});

  const startOfCurrentWeek = startOfWeek(selectedDate, { weekStartsOn: 1 });
  const daysOfWeek = Array.from({ length: 5 }, (_, i) =>
    addDays(startOfCurrentWeek, i)
  );

  const weekLabel = `${format(
    daysOfWeek[0],
    'dd.MM.yyyy'
  )} - ${format(daysOfWeek[4], 'dd.MM.yyyy')}`;
  const speiseplanKey = selectedDate.toISOString().split('T')[0];
  const gerichte = speiseplan[speiseplanKey] || [];

  const handleDateChange = (event: any, date?: Date) => {
    if (event?.type === 'dismissed') {
      setShowDatePicker(false);
      return;
    }
    if (date) setSelectedDate(date);
    setShowDatePicker(false);
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const changeWeek = (direction: 'prev' | 'next') => {
    const change = direction === 'next' ? 7 : -7;
    setSelectedDate(addDays(selectedDate, change));
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAlert = (id: number) => {
    setAlerts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getWeekdayShort = (date: Date) =>
    format(date, 'EEEEEE', { locale: undefined });

  return (
    <View style={[styles.container, { backgroundColor: Colors[theme].background }]}>
      <Text style={[styles.title, { color: Colors[theme].primary }]}>📋 Speiseplan</Text>

      {/* Wochenübersicht */}
      <View style={styles.weekHeader}>
        <TouchableOpacity onPress={() => changeWeek('prev')}>
          <Ionicons name="chevron-back" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openDatePicker}>
          <Text style={styles.weekText}>{weekLabel}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeWeek('next')}>
          <Ionicons name="chevron-forward" size={24} />
        </TouchableOpacity>
      </View>

      {/* Wochentage mit Namen */}
      <View style={styles.dayRow}>
        {daysOfWeek.map((day) => (
          <TouchableOpacity
            key={day.toISOString()}
            onPress={() => setSelectedDate(day)}
            style={[
              styles.dayButton,
              isSameDay(day, selectedDate) && styles.dayButtonActive,
            ]}
          >
            <Text style={isSameDay(day, selectedDate) ? styles.dayTextActive : styles.dayText}>
              {getWeekdayShort(day)}
            </Text>
            <Text style={isSameDay(day, selectedDate) ? styles.dayTextActiveSmall : styles.dayTextSmall}>
              {format(day, 'dd.MM')}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Date Picker (Android / iOS) */}
      {showDatePicker && Platform.OS === 'android' && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      {Platform.OS === 'ios' && (
        <Modal transparent animationType="slide" visible={showDatePicker}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <DateTimePicker
                value={selectedDate}
                mode="date"
                display="spinner"
                onChange={handleDateChange}
              />
              <TouchableOpacity onPress={() => setShowDatePicker(false)} style={styles.doneButton}>
                <Text style={styles.doneText}>Fertig</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {/* Legende */}
      <View style={styles.legende}>
        <View style={styles.legendeItem}><Text>🌱</Text><Text style={styles.legendeText}>Vegan</Text></View>
        <View style={styles.legendeItem}><Text>🥦</Text><Text style={styles.legendeText}>Vegetarisch</Text></View>
        <View style={styles.legendeItem}><Text>🌶️</Text><Text style={styles.legendeText}>Scharf</Text></View>
        <View style={styles.legendeItem}><Text>🔥</Text><Text style={styles.legendeText}>Beliebt</Text></View>
        <View style={styles.legendeItem}><Ionicons name="heart" size={16} color="red" /><Text style={styles.legendeText}>Favorit</Text></View>
        <View style={styles.legendeItem}><Ionicons name="notifications" size={16} color="#007AFF" /><Text style={styles.legendeText}>Erinnerung</Text></View>
      </View>

      {/* Gerichte */}
      {gerichte.length === 0 ? (
        <Text style={styles.emptyText}>Kein Essen eingetragen</Text>
      ) : (
        gerichte.map((gericht) => (
          <GerichtCard
            key={gericht.id}
            gericht={gericht}
            isFavorite={!!favorites[gericht.id]}
            isAlerted={!!alerts[gericht.id]}
            onToggleFavorite={toggleFavorite}
            onToggleAlert={toggleAlert}
          />
        ))
      )}
    </View>
  );
}

function GerichtCard({
  gericht,
  isFavorite,
  isAlerted,
  onToggleFavorite,
  onToggleAlert,
}: {
  gericht: any;
  isFavorite: boolean;
  isAlerted: boolean;
  onToggleFavorite: (id: number) => void;
  onToggleAlert: (id: number) => void;
}) {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.cardTitle}>{gericht.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => onToggleFavorite(gericht.id)} style={{ marginLeft: 8 }}>
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={20}
              color={isFavorite ? 'red' : 'gray'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onToggleAlert(gericht.id)} style={{ marginLeft: 8 }}>
            <Ionicons
              name={isAlerted ? 'notifications' : 'notifications-outline'}
              size={20}
              color={isAlerted ? '#007AFF' : 'gray'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.cardText}>{gericht.beschreibung}</Text>
      <View style={styles.tagRow}>
        {gericht.tags?.includes('vegan') && <Text style={styles.tag}>🌱</Text>}
        {gericht.tags?.includes('vegetarisch') && <Text style={styles.tag}>🥦</Text>}
        {gericht.tags?.includes('scharf') && <Text style={styles.tag}>🌶️</Text>}
        {gericht.tags?.includes('beliebt') && <Text style={styles.tag}>🔥</Text>}
      </View>
      <RatingStars value={gericht.bewertung} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  weekHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  weekText: {
    fontSize: 16,
    fontWeight: '500',
  },
  dayRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  dayButton: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  dayButtonActive: {
    backgroundColor: '#007AFF',
  },
  dayText: {
    color: '#333',
    fontWeight: '600',
  },
  dayTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  dayTextSmall: {
    fontSize: 12,
    color: '#333',
  },
  dayTextActiveSmall: {
    fontSize: 12,
    color: '#fff',
  },
  legende: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 12,
  },
  legendeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 6,
    marginVertical: 4,
  },
  legendeText: {
    fontSize: 14,
    marginLeft: 4,
    color: '#444',
  },
  card: {
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  cardText: {
    fontSize: 14,
    marginTop: 4,
  },
  tagRow: {
    flexDirection: 'row',
    marginTop: 6,
    marginBottom: 4,
  },
  tag: {
    fontSize: 16,
    marginRight: 6,
  },
  emptyText: {
    fontStyle: 'italic',
    color: '#999',
    marginVertical: 16,
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  doneButton: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  doneText: {
    fontSize: 16,
    color: '#007AFF',
  },
});
