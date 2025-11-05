import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4ec',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  box: {
    backgroundColor: '#ffb6c1',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  imageContainer: {
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#ffb6c1',
    overflow: 'hidden',
  },
  foto: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  textBox: {
    backgroundColor: '#fff0f5',
    borderRadius: 15,
    padding: 15,
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    lineHeight: 24,
  },
});

export default styles;
