import React, { useState, useEffect } from "react";
import Toast from "react-native-toast-message";

const MyContext = React.createContext();

const MyProvider = ({ children }) => {
    const [stage, setStage] = useState("Home");
    const [players, setPlayers] = useState(["Becca", "Jenn", "LT"]);
    const [result, setResult] = useState("");

    useEffect(() => {
        getPayee();
    }, [stage])

    const addPlayerHandler = player => {
        const playerInd = players.map(p => p.toLowerCase()).indexOf(player.toLowerCase());

        if (playerInd !== -1) {
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Hey, no cheating!",
                text2: "You've already added that person",
            });
        } else {
            setPlayers(prevState => [...prevState, player]);
        }
    }

    const removePlayerHandler = player => {
        let playersCopy = [...players];
        const playerInd = players.map(p => p.toLowerCase()).indexOf(player.toLowerCase());

        if (playerInd !== -1) {
            playersCopy.splice(playerInd, 1);

            setPlayers(playersCopy);
        }
    };

    const whosPayingHandler = () => {
        if (players.length < 2) {
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Uh-oh",
                text2: "You need at least 2 players!",
            });
        } else {
            setStage("Result");
        }
    };

    const getPayee = () => {
        if (players && players.length > 2) {
            const payee = players[Math.floor(Math.random() * players.length)];
            setResult(payee);
        }
    };

    const goBackHandler = () => {
        setStage("Home");
    }

    const startOverHandler = () => {
        setPlayers("");
        setResult([]);
        setStage("Home");
    };

    return (
        <MyContext.Provider value={{
            stage,
            players,
            result,
            addPlayer: addPlayerHandler,
            removePlayer: removePlayerHandler,
            whosPaying: whosPayingHandler,
            tryAgain: getPayee,
            startOver: startOverHandler,
            goBack: goBackHandler
        }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyProvider, MyContext };