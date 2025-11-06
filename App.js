import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getItem: getSelected, setItem: setSelected, removeItem: removeSelected } =
    useAsyncStorage('@selected_user');
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = useCallback(async () => {
    try {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const json = await resp.json();
      setUsers(json);
    } catch (e) {
      Alert.alert(
        'Sin conexión',
        'No se pudo obtener la lista de usuarios. Revisa tu conexión. Puedes usar la preferencia guardada.'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const readSelectedUserFromStorage = useCallback(async () => {
    try {
      const item = await getSelected();
      if (item) setSelectedUser(JSON.parse(item));
      else setSelectedUser(null);
    } catch (e) {
      Alert.alert(
        'Error al cargar',
        'No se pudo cargar tu preferencia. Conéctate a internet e inténtalo de nuevo.'
      );
    }
  }, [getSelected]);

  const writeSelectedUserToStorage = useCallback(
    async (user) => {
      try {
        await setSelected(JSON.stringify(user));
        setSelectedUser(user);
        Alert.alert('Listo', `Se guardó tu preferencia: ${user.name}`);
      } catch (e) {
        Alert.alert(
          'Error al guardar',
          'No se pudo guardar tu preferencia. Conéctate a internet e inténtalo nuevamente.'
        );
      }
    },
    [setSelected]
  );

  const clearSelectedUser = useCallback(async () => {
    try {
      await removeSelected();
      setSelectedUser(null);
    } catch (e) {
      Alert.alert('Error', 'No se pudo borrar la preferencia.');
    }
  }, [removeSelected]);

  useEffect(() => {
    readSelectedUserFromStorage();
    fetchUsers();
  }, [readSelectedUserFromStorage, fetchUsers]);

  const handleSelect = (user) => writeSelectedUserToStorage(user);

  const renderCard = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelect(item)}>
      <View style={styles.card}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.username}>@{item.username}</Text>
        <Text style={styles.contact}>Email: {item.email}</Text>
        <Text style={styles.contact}>Phone: {item.phone}</Text>
      </View>
    </TouchableOpacity>
  );

  const ProfileHeader = () => (
    <View style={styles.profileContainer}>
      <Text style={styles.title}>Profile / Preferencia</Text>
      {selectedUser ? (
        <View style={styles.profileCard}>
          <Text style={styles.name}>{selectedUser.name}</Text>
          <Text style={styles.username}>@{selectedUser.username}</Text>
          <Text style={styles.contact}>Email: {selectedUser.email}</Text>
          <Text style={styles.contact}>ID: {selectedUser.id}</Text>
          <View style={{ marginTop: 8 }}>
            <Button title="Borrar preferencia" onPress={clearSelectedUser} />
          </View>
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>No hay preferencia guardada</Text>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {loading ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" />
          <Text style={{ marginTop: 10 }}>Cargando usuarios…</Text>
        </View>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(u) => String(u.id)}
          renderItem={renderCard}
          contentContainerStyle={styles.listContainer}
          ListHeaderComponent={<ProfileHeader />}
          ListEmptyComponent={
            <View style={styles.centered}>
              <Text>No hay usuarios para mostrar.</Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5E6CC', paddingTop: 50 },
  profileContainer: { paddingHorizontal: 15, marginBottom: 10 },
  profileCard: {
    backgroundColor: '#FFF5E6',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#8B4513', textAlign: 'center', marginBottom: 12 },
  listContainer: { paddingHorizontal: 15, paddingBottom: 30 },
  card: {
    backgroundColor: '#FFEFD5',
    borderRadius: 10,
    padding: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  name: { fontSize: 20, fontWeight: 'bold', color: '#A0522D', marginBottom: 4 },
  username: { fontSize: 16, color: '#696969', fontStyle: 'italic', marginBottom: 4 },
  contact: { fontSize: 14, color: '#D2691E' },
  loadingContainer: { alignItems: 'center', paddingVertical: 10 },
  loadingText: { fontSize: 16, color: '#D2691E' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
});
