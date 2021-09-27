/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { serverResponseForDynamicComponentUI } from './server_json/serverResponse';
import {serverResponse1} from './server_json/serverResponse1'

const numColumns = 2
const WIDTH = Dimensions.get('window').width
const App: () => Node = () => {
  
const image = { uri: 'https://reactjs.org/logo-og.png' };


const CustomComp = (props) => {
  const {type} = props;
  if(type == "View"){
    const {styles, children} = props;
    return <View style={styles}>{children.map((item) => CustomComp(item))}</View>
  } else if(type == "Text") {
    const {styles, text} = props;
    return <Text style={styles} >{text}</Text>
  }
}
  
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemStyle}>
        <ImageBackground
          source={item.btnImage}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.itemText}>{item.btnTitle}</Text>
      </View>
    );
  }

  return (
    // Dynamic entire Component
      // <View style={styles.container}>
      //   {CustomComp(serverResponseForDynamicComponentUI)}
      //   <StatusBar style="auto" />
      // </View>
    // -END- Dynamic entire Component

    //Dynamic UI
      <SafeAreaView style={{flex: 1}}>
      <View
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',
          },
        ]}>
        <StatusBar barStyle="dark-content" />
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          {/* <ImageBackground source={image} resizeMode='cover' style={styles.image}>
            <Text style={styles.Text, {flexWrap:'wrap-reverse'} }> TEST </Text>
          </ImageBackground> */}
          <Text style={styles.sectionTitle}>{serverResponse1.header}</Text>
        </View>
        <View style={{flex: 2, backgroundColor: 'white',}}>
          <FlatList
            data={serverResponse1.actions}
            
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
          />
            
          
        </View>
        {/* <View style={{flex: 3, backgroundColor: 'white'}} /> */}
      </View>
      </SafeAreaView>

    // -END- Dynamic UI
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    margin:50
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    padding: 0,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  itemStyle: {
    backgroundColor: '#3232ff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: WIDTH / numColumns
  },
  itemText: {
    color:'white'
  }
});

export default App;
