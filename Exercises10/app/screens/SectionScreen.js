import React from 'react';
import { SectionList, StyleSheet, Text, View, StatusBar } from 'react-native';
import Screen from '../components/Screen';
import colors from '../config/colors';
const DATA = [
    {
        title: "Main dishes",
        data: ["Pizza", "Burger", "Risotto"]
    },
    {
        title: "Sides",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "Drinks",
        data: ["Water", "Coke", "Beer"]
    },
    {
        title: "Desserts",
        data: ["Cheese Cake", "Ice Cream"]
    }
];
const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
function SectionScreen() {
    return (
        <Screen style={{ backgroundColor: colors.primary }}>
            <Text>SectionList </Text>
            <SectionList
                sections={[
                    { title: 'A', data: ['ALTERED', 'ABBY', 'ACTION U.S.A.', 'AMUCK', 'ANGUISH'] },
                    { title: 'B', data: ['BEST MEN', 'BEYOND JUSTICE', 'BLACK GUNN', 'BLOOD RANCH', 'BEASTIES'] },
                    { title: 'C', data: ['CARTEL', 'CASTLE OF EVIL', 'CHANCE', 'COP GAME', 'CROSS FIRE',] },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
        </Screen>
    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
})
export default SectionScreen;