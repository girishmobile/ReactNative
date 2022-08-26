import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';


const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
        const response = await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
        return response;
    } catch (error) {
        console.log(error);
    }
}
const isExpired = (item) => {
    const now = dayjs() //moment(Date.now());
    const storedTime = dayjs(item.timestamp);
    const isExpired = now.diff(storedTime, 'minute') > expiryInMinutes;
    return isExpired;
}
const get = async (key) => {

    try {
        const value = await AsyncStorage.getItem(prefix + key);
        const item = JSON.parse(value);
        if (!item) return null;

        if (isExpired(item)) {
            //Command Query Sepration (CQS)
            await AsyncStorage.removeItem(prefix + key); // cleanup the cache
            return null
        }

        return item.value;

    } catch (error) {
        console.log(error)
    }
}
export default {
    store,
    get
}

// const diff = now.diff(storedTime, 'minute');
// get diffrent between two date in minutes 
