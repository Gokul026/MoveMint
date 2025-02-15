import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flatcard = () => {
    return (
        <View>
            <Text style={styles.Heading}> Cards </Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardone]}>
                    <Text>Card 1</Text>
                </View>

                <View style={[styles.card, styles.cardtwo]}>
                    <Text>Card 2</Text>
                </View>

                <View style={[styles.card, styles.cardthree]}>
                    <Text>Card 3</Text>
                </View>

                <View style={[styles.card, styles.cardfour]}>
                    <Text>Card 4</Text>
                </View>




            </View>
        </View>
    )
}

export default Flatcard

const styles = StyleSheet.create({
    Heading: {
        fontSize: 30,
        fontWeight: 800,
        color: 'black',
        textAlign: 'center',
        backgroundColor: 'white'
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,


    },
    card: {
        height: 100,
        width: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
    },

    cardone: {
        backgroundColor: '#93E9BE',

    },

    cardtwo: {
        backgroundColor: '#B3E5FC',
    },
    cardthree: {
        backgroundColor: '#64A6BD',
    },

    cardfour: {
        backgroundColor: '#D4A5A5',
    }
})