// App.js
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
  Alert,
} from "react-native";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchUsers = useCallback(async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();
      setData(json);
    } catch (e) {
      Alert.alert("Error", "No se pudo obtener la lista de usuarios.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchUsers();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.card}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.username}>@{item.username}</Text>
        <Text style={styles.contact}>Email: {item.email}</Text>
        <Text style={styles.contact}>Phone: {item.phone}</Text>
        <Text style={styles.address}>
          {item.address.city} — {item.company.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <SafeAreaView style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Cargando usuarios…</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Usuarios (JSONPlaceholder)</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={
          <View style={styles.center}>
            <Text>No hay usuarios para mostrar.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5E6CC" },
  center: { alignItems: "center", justifyContent: "center" },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#8B4513",
    textAlign: "center",
    marginTop: 12,
  },
  sep: { height: 12 },
  card: {
    backgroundColor: "#FFEFD5",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  name: { fontSize: 18, fontWeight: "700", color: "#A0522D" },
  username: { fontSize: 14, color: "#696969", fontStyle: "italic", marginTop: 2 },
  contact: { fontSize: 14, color: "#D2691E", marginTop: 4 },
  address: { fontSize: 12, color: "#8B4513", marginTop: 6 },
});
