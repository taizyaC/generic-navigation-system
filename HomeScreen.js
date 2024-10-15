
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      Alert.alert('Logged out', 'You have been successfully logged out.');
      navigation.replace('Login'); 
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      {/* You can add more dashboard items here */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome!</Text>
        <Text style={styles.cardContent}>
          This is where you can display data or navigate to other screens.
        </Text>
      </View>

      {/* Add more cards or dashboard components below */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Feature 1</Text>
        <Button title="Go to Feature 1" onPress={() => Alert.alert('Feature 1')} />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Feature 2</Text>
        <Button title="Go to Feature 2" onPress={() => Alert.alert('Feature 2')} />
      </View>
     
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Feature 3</Text>
        <Button title="Go to Feature 3" onPress={() => Alert.alert('Feature 3')} />
      </View>

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 14,
  },
});

export default HomeScreen;
