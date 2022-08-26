import React, { useContext } from 'react';
import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import { FlatList, StyleSheet, View } from 'react-native'
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import useAuth from '../auth/useAuth';
const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        },
        targetScreen: 'Messages'
    },
    {
        title: "My messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: 'Messages'
    }
]
function AccountScreen({ navigation }) {

    //using custom hook
    const { user, logOut } = useAuth();

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subTitle={user.email}
                    image={require('../assets/mosh.jpg')}
                />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    }
                />
            </View>
            <ListItem
                title="Log out"
                IconComponent={
                    <Icon
                        name="logout"
                        backgroundColor='#ffe66d'
                    />
                }
                onPress={() => logOut()}
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20,
    }
})
export default AccountScreen;
/**
 LOGOUT
 const handleLogOut = () => {
       // setUser(null);
        //authStorage.removeToken();
        logOut();
    }
    CONTEXT HOOK
        import React, { useContext } from 'react';
        const authContext = useContext(AuthContext);
        we can destructring it 
        const { user, setUser } = useContext(AuthContext);
 */