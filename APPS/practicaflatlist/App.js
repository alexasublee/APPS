import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const Item = ({ item }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.url }} style={styles.image} />
    <Text style={styles.name}>{item.nombre}</Text>
  </View>
);

const data = [
  {
    id: 1,
    nombre: 'Chiles en Nogada',
    url: 'practicaflatlist/antojitos-mexicanos-15-septiembre.jpg',
  },
  {
    id: 2,
    nombre: 'Pozole',
    url: 'practicaflatlist/antojitos-mexicanos-15-septiembre.jpg',
  },
  {
    id: 3,
    nombre: 'Tostadas de Tinga',
    url: 'practicaflatlist/antojitos-mexicanos-15-septiembre.jpg',
  },
  {
    id: 4,
    nombre: 'Tamales',
    url: 'practicaflatlist/antojitos-mexicanos-15-septiembre.jpg',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🇲🇽 Platillos Mexicanos 🇲🇽</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf2',
    alignItems: 'center',
    paddingTop: 80,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#006400',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffe4e1',
    borderRadius: 15,
    alignItems: 'center',
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  image: {
    width: 220,
    height: 180,
    borderRadius: 12,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
});
