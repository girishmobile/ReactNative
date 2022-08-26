import { Platform } from 'react-native';
import colors from './colors';
export default {
    text:
    {
        color: colors.primary,
        fontSize: 16,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        flex: 1,


    }
}
