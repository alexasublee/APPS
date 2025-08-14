import { Text, View, Image } from 'react-native';
import styles from './styles/styles';
import Alexa from './assets/alexa.jpeg'; 

export default App = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.box}>
        <Text style={styles.title}>Mi Biografía</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={Alexa} style={styles.foto} />
      </View>

      <View style={styles.textBox}>
        <Text style={styles.texto}>
          Hola, soy Alexa. Me encanta el maquillaje, escuchar música y descubrir cosas nuevas.{"\n"}
          Soy de Querétaro y estudio Ingeniería en Software en la Facultad de Informática.{"\n"}
          Los fines de semana trabajo.
        </Text>
      </View>

    </View>
  );
};
