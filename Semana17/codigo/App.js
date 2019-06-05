import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './application/components/AppButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppButton bgColor={'rgba(255,38,74,0.8)'}
                   title={"Prueba"}
                   action={()=>{
                     console.log("Uy!, me presionaron");
                   }}
                   iconName="pencil"
                   iconColor="white"
                   setWidth={true}
                   iconSize={22}
                   />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
