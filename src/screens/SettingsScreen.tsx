import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../navigation/types';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

type Props = BottomTabScreenProps<RootTabParamList, 'Settings'>;

const SettingsScreen: React.FC<Props> = () => {
  const { colors } = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [locationEnabled, setLocationEnabled] = React.useState(true);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
      <Text style={[styles.subtitle, { color: colors.text }]}>Customize your Comptrolla experience</Text>

      {/* Notifications */}
      <LinearGradient
        colors={['#ff7e5f', '#feb47b']}
        style={styles.card}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Ionicons name="notifications" size={28} color="#fff" style={{ marginBottom: 8 }} />
        <Text style={styles.cardTitle}>Notifications</Text>
        <Text style={styles.cardText}>Enable or disable alerts</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          thumbColor="#fff"
          trackColor={{ false: '#aaa', true: '#4caf50' }}
        />
      </LinearGradient>

      {/* Dark Mode */}
      <LinearGradient
        colors={['#43cea2', '#185a9d']}
        style={styles.card}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Ionicons name="color-palette" size={28} color="#fff" style={{ marginBottom: 8 }} />
        <Text style={styles.cardTitle}>Theme</Text>
        <Text style={styles.cardText}>Switch between light and dark mode</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          thumbColor="#fff"
          trackColor={{ false: '#aaa', true: '#4caf50' }}
        />
      </LinearGradient>

      {/* Location Access */}
      <LinearGradient
        colors={['#FF5F6D', '#FFC371']}
        style={styles.card}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Ionicons name="location" size={28} color="#fff" style={{ marginBottom: 8 }} />
        <Text style={styles.cardTitle}>Location Access</Text>
        <Text style={styles.cardText}>Allow app to access your location</Text>
        <Switch
          value={locationEnabled}
          onValueChange={setLocationEnabled}
          thumbColor="#fff"
          trackColor={{ false: '#aaa', true: '#4caf50' }}
        />
      </LinearGradient>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#556270' }]}>
          <MaterialIcons name="update" size={24} color="#fff" />
          <Text style={styles.actionText}>App Updates</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#FF6B6B' }]}>
          <MaterialIcons name="restore" size={24} color="#fff" />
          <Text style={styles.actionText}>Reset Data</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: '700', marginTop: 20, marginBottom: 6 },
  subtitle: { fontSize: 16, marginBottom: 20 },
  card: { padding: 20, borderRadius: 16, marginBottom: 16, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 10, shadowOffset: { width: 0, height: 8 }, elevation: 8 },
  cardTitle: { fontSize: 18, fontWeight: '600', marginBottom: 4, color: '#fff' },
  cardText: { fontSize: 14, textAlign: 'center', marginBottom: 12, color: '#fff' },
  quickActions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  actionButton: { flex: 1, marginHorizontal: 4, padding: 12, borderRadius: 12, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 6, shadowOffset: { width: 0, height: 5 }, elevation: 6 },
  actionText: { color: '#fff', marginTop: 6, fontWeight: '600', textAlign: 'center' },
});