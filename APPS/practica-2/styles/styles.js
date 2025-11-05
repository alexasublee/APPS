import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff1f2', // rosa pastel de fondo
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: '#aec6cf', 
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 10,
    textAlign: 'center',
  },
  box: {
    backgroundColor: '#ffe066', // amarillo pastel
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  boxImage: {
    backgroundColor: '#ffd6e0', // fondo rosa claro
    width: '100%',
    height: '100%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foto: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#f59eb5', // borde rosa
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#d62828',
    marginTop: 20,
    marginBottom: 6,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    lineHeight: 22,
  },
});
