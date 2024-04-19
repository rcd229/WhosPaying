import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import Toast from "react-native-toast-message";

import { MyContext } from "./src/context";

import Home from "./src/components/Home";
import Result from "./src/components/Result";

import { toastConfig } from './src/utils';

import { styles } from './src/styles';

const App = () => {
  const context = useContext(MyContext);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Who Pays the Bill?</Text>
      {
        context.stage === 'Home'
          ? <Home />
          : <Result />
      }
      <Toast config={toastConfig} />
    </View>
  );
};

export default App;