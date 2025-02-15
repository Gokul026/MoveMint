import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Flatcard from './components/Flatcard'
import HeartShape from './components/Flatcard'
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