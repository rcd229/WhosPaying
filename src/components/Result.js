import React, { useContext } from "react";
import { View } from 'react-native';

import { styles } from "../styles";
import { MyContext } from "../context";

import { Text, Button } from "../utils";

const Result = () => {
    const { result, tryAgain, startOver, goBack } = useContext(MyContext);

    return (
        <View>
            <Text style={styles.payee}>{result}</Text>
            <Button
                title="Try Again"
                onPress={tryAgain}
            />
            <Button
                title="Go Back"
                onPress={goBack}
            />
            <Button
                title="Start Over"
                onPress={startOver}
            />
        </View>
    )
};

export default Result;