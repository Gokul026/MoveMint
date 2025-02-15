import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Flatcard from './Src/Flatcard'
import HeartShape from './Src/Flatcard'
const App = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Flatcard/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({})