import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import type { RootStackScreenProps } from '../types';
import { Button } from 'react-native-paper';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});



const NotFoundScreen = ({ navigation }: RootStackScreenProps<'Home'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <Button onPress={() => navigation.replace('Home')}>
        Back To Home
      </Button>
    </View>
  );
}

NotFoundScreen.title = 'NotFound';

export default NotFoundScreen;