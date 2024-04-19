import React, { useContext } from "react";
import { View, ScrollView } from 'react-native';

import { Formik } from "formik";
import * as Yup from 'yup';

import { Input, ListItem, Icon } from "react-native-elements";

import { MyContext } from "../context";
import { Text, Button } from "../utils";

import { styles } from "../styles";

const Home = () => {
    const { players, addPlayer, removePlayer, whosPaying } = useContext(MyContext);

    const renderPlayers = () => (
        <ScrollView style={{ maxHeight: 230 }}>
            {
                players.map((player, i) => {
                    return (
                        <ListItem
                            key={i}
                            bottomDivider
                            style={styles.listItem}
                        >
                            <Icon name="user" type="ant-design" />
                            <ListItem.Content>
                                <ListItem.Title style={styles.globalText}>
                                    {player}
                                </ListItem.Title>
                            </ListItem.Content>
                            <Button
                                icon={{ type: 'antdesign', name: 'delete' }}
                                buttonStyle={{ backgroundColor: "transparent", padding: 0 }}
                                onPress={() => removePlayer(player)}
                            />
                        </ListItem>
                    )
                })
            }
        </ScrollView>
    );

    return (
        <>
            <Formik
                initialValues={{ player: '' }}
                validationSchema={Yup.object({
                    player: Yup.string()
                        .min(3, 'Name must be at least 3 characters')
                        .max(15, 'Name must be shorter than 15 characters')
                        .required('Please enter a name')
                })}
                onSubmit={(values, { resetForm }) => {
                    addPlayer(values.player);
                    resetForm();
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <>
                        <Input
                            placeholder="Enter a name"
                            leftIcon={{ type: 'antdesign', name: 'adduser' }}
                            renderErrorMessage={errors.player}
                            errorMessage={errors.player}
                            onChangeText={handleChange('player')}
                            onBlur={handleBlur('player')}
                            value={values.player}
                            inputStyle={styles.globalText}
                        />
                        <Button
                            title="Add Player"
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
            <View style={styles.list}>
                {players && players.length > 0
                    ?
                    <>
                        <Text style={styles.h2}>List of Players</Text>
                        {renderPlayers()}
                        <Button
                            title="Who's paying?"
                            onPress={whosPaying}
                            buttonStyle={{ ...styles.button, marginTop: 50, width: "100%" }}
                        />
                    </>
                    : null
                }
            </View>
        </>
    )
};

export default Home;