import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../navigation/types';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

type Props = BottomTabScreenProps<RootTabParamList, 'Profile'>;

const ProfileScreen: React.FC<Props> = () => {
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={[styles.avatar, { borderColor: colors.primary }]}>
          <Text style={[styles.avatarText, { color: colors.primary }]}>JD</Text>
        </View>
        <Text style={[styles.name, { color: colors.text }]}>John Doe</Text>
        <Text style={[styles.role, { color: colors.text }]}>Administrator</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#4ECDC4' }]}>
          <Ionicons name="camera" size={24} color="#fff" />
          <Text style={styles.actionText}>Change Avatar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#FF6B6B' }]}>
          <Ionicons name="document-text" size={24} color="#fff" />
          <Text style={styles.actionText}>My Reports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#556270' }]}>
          <Ionicons name="stats-chart" size={24} color="#fff" />
          <Text style={styles.actionText}>My Activity</Text>
        </TouchableOpacity>
      </View>

      {/* Account Card */}
      <LinearGradient
        colors={['#36D1DC', '#5B86E5']}
        style={styles.card}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Ionicons name="person-circle" size={30} color="#fff" style={{ marginBottom: 8 }} />
        <Text style={styles.cardTitle}>Account Info</Text>
        <Text style={styles.cardText}>Edit your personal information and preferences</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]}>
          <Text style={[styles.buttonText, { color: '#5B86E5' }]}>Edit Profile</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Security Card */}
      <LinearGradient
        colors={['#FF512F', '#DD2476']}
        style={styles.card}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <MaterialIcons name="security" size={30} color="#fff" style={{ marginBottom: 8 }} />
        <Text style={styles.cardTitle}>Security</Text>
        <Text style={styles.cardText}>Manage password, privacy and notifications</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#fff' }]}>
          <Text style={[styles.buttonText, { color: '#DD2476' }]}>Update</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { alignItems: 'center', marginBottom: 20 },
  avatar: { width: 120, height: 120, borderRadius: 60, borderWidth: 3, justifyContent: 'center', alignItems: 'center', marginBottom: 12, backgroundColor: '#fff', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 10, shadowOffset: { width: 0, height: 5 }, elevation: 6 },
  avatarText: { fontSize: 40, fontWeight: '700' },
  name: { fontSize: 24, fontWeight: '700' },
  role: { fontSize: 14, color: '#888' },
  quickActions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  actionButton: { flex: 1, marginHorizontal: 4, padding: 12, borderRadius: 12, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 6, shadowOffset: { width: 0, height: 5 }, elevation: 6 },
  actionText: { color: '#fff', marginTop: 6, fontWeight: '600' },
  card: { padding: 20, borderRadius: 16, marginBottom: 16, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 10, shadowOffset: { width: 0, height: 8 }, elevation: 8 },
  cardTitle: { fontSize: 18, fontWeight: '600', marginBottom: 4, color: '#fff' },
  cardText: { fontSize: 14, textAlign: 'center', marginBottom: 12, color: '#fff' },
  button: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 6, shadowOffset: { width: 0, height: 5 }, elevation: 6 },
  buttonText: { color: '#fff', fontWeight: '600' },
});
