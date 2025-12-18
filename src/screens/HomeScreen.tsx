import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../navigation/types';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

type Props = BottomTabScreenProps<RootTabParamList, 'Home'>;

const HomeScreen: React.FC<Props> = () => {
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <LinearGradient
        colors={['#bdfbb6ff', '#077753ff']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to Comptrolla</Text>
        <Text style={styles.subtitle}>Promoting applications and services across municipalities and communities</Text>
      </LinearGradient>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#FF6B6B', shadowColor: '#FF6B6B' }]}>
          <Ionicons name="apps" size={24} color="#fff" />
          <Text style={styles.actionText}>Explore Apps</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#4ECDC4', shadowColor: '#4ECDC4' }]}>
          <Ionicons name="people" size={24} color="#fff" />
          <Text style={styles.actionText}>Community</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#556270', shadowColor: '#556270' }]}>
          <Ionicons name="notifications" size={24} color="#fff" />
          <Text style={styles.actionText}>Updates</Text>
        </TouchableOpacity>
      </View>

      {/* Promo Card */}
      <LinearGradient
        colors={['#1E3C72', '#2A5298']}
        style={[styles.promoCard, styles.shadow]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.promoTitle}>Empower Your Municipality</Text>
        <Text style={styles.promoText}>Promote services, engage users, and enhance community collaboration.</Text>
        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Stats */}
      <View style={styles.statsContainer}>
        {[
          { icon: 'apps', value: '+50', label: 'Apps Promoted' },
          { icon: 'people', value: '+1200', label: 'Users' },
          { icon: 'notifications', value: '+300', label: 'Updates' },
        ].map((item, index) => (
          <LinearGradient
            key={index}
            colors={['#00c6ff', '#0072ff']}
            style={[styles.statCard, styles.shadow]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Ionicons name={item.icon as any} size={28} color="#fff" />
            <Text style={styles.statValue}>{item.value}</Text>
            <Text style={styles.statLabel}>{item.label}</Text>
          </LinearGradient>
        ))}
      </View>

      {/* Community Facts */}
      <View style={styles.factsContainer}>
        <Text style={[styles.factsTitle, { color: colors.text }]}>Why Comptrolla?</Text>
        <View style={[styles.factCard, styles.shadow]}>
          <MaterialIcons name="apps" size={24} color="#0072ff" />
          <Text style={styles.factText}>Easily promote municipal applications to citizens</Text>
        </View>
        <View style={[styles.factCard, styles.shadow]}>
          <MaterialIcons name="group" size={24} color="#0072ff" />
          <Text style={styles.factText}>Connect users and local services</Text>
        </View>
        <View style={[styles.factCard, styles.shadow]}>
          <MaterialIcons name="analytics" size={24} color="#0072ff" />
          <Text style={styles.factText}>Track adoption and engagement in real-time</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { alignItems: 'center', marginBottom: 20, borderRadius: 16, padding: 20 },
  logo: { width: 400, height: 100, marginBottom: 16 },
  title: { fontSize: 28, fontWeight: '700', color: '#fff', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#eee', textAlign: 'center', marginTop: 4 },

  quickActions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  actionButton: {
    flex: 1,
    marginHorizontal: 4,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  actionText: { color: '#fff', marginTop: 6, fontWeight: '600' },

  promoCard: { borderRadius: 20, padding: 20, alignItems: 'center', marginBottom: 20 },
  promoTitle: { fontSize: 20, fontWeight: '700', color: '#fff', marginTop: 10 },
  promoText: { fontSize: 14, color: '#eee', textAlign: 'center', marginVertical: 10 },
  promoButton: { marginTop: 10, backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 12 },
  buttonText: { color: '#0072ff', fontWeight: '700' },

  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statCard: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  statValue: { fontSize: 20, fontWeight: '700', color: '#fff', marginTop: 4 },
  statLabel: { fontSize: 12, color: '#fff', marginTop: 2, textAlign: 'center' },

  factsContainer: { marginTop: 10 },
  factsTitle: { fontSize: 20, fontWeight: '700', marginBottom: 10 },
  factCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  factText: { marginLeft: 8, fontSize: 14, color: '#333' },

  shadow: {
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
});
