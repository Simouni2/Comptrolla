import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../navigation/types';
import { useTheme } from '@react-navigation/native';

type Props = BottomTabScreenProps<RootTabParamList, 'Settings'>;

const SettingsScreen: React.FC<Props> = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }] }>
      <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
      <Text style={[styles.subtitle, { color: colors.text }]}>Configure your app here.</Text>

      <View style={[styles.card, { borderColor: colors.primary }] }>
        <Text style={[styles.cardText, { color: colors.text }]}>Notifications, privacy and appearance.</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }] }>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'flex-start', padding: 20 },
  title: { fontSize: 22, fontWeight: '700', marginTop: 24, marginBottom: 6 },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 12 },
  card: { width: '100%', padding: 16, borderRadius: 12, borderWidth: 1, marginTop: 12, backgroundColor: '#fff' },
  cardText: { fontSize: 14, color: '#666', marginBottom: 12 },
  button: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 8, alignSelf: 'flex-start' },
  buttonText: { color: '#fff', fontWeight: '600' }
});