import { Text, View, Image } from 'react-native';
import styles from './styles/styles';
import Mouse from './assets/mymelody.jpeg'; // Assuming you have an image in this path

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hola mundo</Text>
      
//     </View>
//   );
// }
export default App = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title} >Hola mundo</Text> */}
      <View style={styles.box}>
        <Text style={styles.title}>Hola mundo</Text>
      </View>
      <View>
        <Image source={Mouse} style={styles.foto} />
        <Text>Hola todes</Text>
      </View>
    
    </View>
  )
}

//react native docs 