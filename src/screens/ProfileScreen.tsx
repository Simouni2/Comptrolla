import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../navigation/types';
import { useTheme } from '@react-navigation/native';

type Props = BottomTabScreenProps<RootTabParamList, 'Profile'>;

const ProfileScreen: React.FC<Props> = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }] }>
      <View style={styles.header}>
        <View style={[styles.avatar, { borderColor: colors.primary }]}>
          <Text style={[styles.avatarText, { color: colors.primary }]}>JD</Text>
        </View>
        <Text style={[styles.title, { color: colors.text }]}>John Doe</Text>
      </View>

      <View style={[styles.card, { borderColor: colors.primary }] }>
        <Text style={[styles.cardText, { color: colors.text }]}>Personal details and preferences.</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }] }>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'flex-start', padding: 20 },
  header: { width: '100%', alignItems: 'center', marginTop: 24, marginBottom: 12 },
  avatar: { width: 96, height: 96, borderRadius: 48, borderWidth: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', marginBottom: 12 },
  avatarText: { fontSize: 28, fontWeight: '700' },
  title: { fontSize: 20, fontWeight: '700' },
  card: { width: '100%', padding: 16, borderRadius: 12, borderWidth: 1, marginTop: 12, backgroundColor: '#fff' },
  cardText: { fontSize: 14, color: '#666', marginBottom: 12 },
  button: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 8, alignSelf: 'flex-start' },
  buttonText: { color: '#fff', fontWeight: '600' }
});