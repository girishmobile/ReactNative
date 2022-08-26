import React, { useState } from 'react';
import { FlatList, StyleSheet, View, } from 'react-native';

import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import ListItemSeparator from '../components/lists/ListItemSeparator';


const initialMessages = [
    {
        id: 1,
        title: 'Girish Chauhan',
        description: 'Hey! is this item still available?',
        image: require('../assets/girish.png')
    },
    {
        id: 2,
        title: 'Girish Chauhan',
        description: 'I am interested in this item. When will you be able to post it?',
        image: require('../assets/girish.png')
    },


]
function MessagesScreen() {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        //Delete the message from messages 
        //Call the server 
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);

    }
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log(item.id)}
                        renderRightActions={() =>
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />)}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 4,
                            title: 'T4',
                            description: 'D4',
                            image: require('../assets/mosh.jpg')
                        },
                    ])
                }}
            />
        </Screen>
    );
}
const styles = StyleSheet.create({

})
export default MessagesScreen;