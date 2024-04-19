import React from "react";
import { ErrorToast } from 'react-native-toast-message';
import { Text as RNEText, Button as RNEButton, Icon } from "react-native-elements";

import { styles } from "./styles";

export const Text = ({ style, children }) => (
    <RNEText style={{ ...styles.globalText, ...(style || {}) }}>
        {children}
    </RNEText>
);

export const Button = (props) => (
    <RNEButton
        {...props}
        buttonStyle={{ ...styles.button, ...(props.buttonStyle || {}) }}
        titleStyle={{ ...styles.globalText, ...(props.titleStyle || {}) }}
    />
);

export const toastConfig = {
    error: (props) => (
        <ErrorToast
            {...props}
            text1Style={{
                fontFamily: "Comfortaa-VariableFont_wght",
                fontSize: 18,
                marginLeft: -10,
                ...styles.globalText
            }}
            text2Style={{
                fontSize: 16,
                marginVertical: 0,
                marginLeft: -10,
                ...styles.globalText
            }}
            text2NumberOfLines={2}
            style={{
                height: undefined,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 15,
                paddingHorizontal: 10,
                borderColor: "orange",
            }}
            renderLeadingIcon={
                () => (<Icon type="ionicons" name="warning" color="orange" />)
            }
        />
    ),
};