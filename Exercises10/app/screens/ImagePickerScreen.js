import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, Button, TouchableOpacity, FlatList } from 'react-native';
import Screen from '../components/Screen';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Sharing from 'expo-sharing';
import AppButton from '../components/AppButton';
import ImageInput from '../components/ImageInput';
import ImageInputList from '../components/ImageInputList';
function ImagePickerScreen(props) {
    const [imageUris, setImageUris] = useState([]);
    const handleAddImage = (uri) => {
        setImageUris([...imageUris, uri])
    }
    const handleRemoveImage = (uri) => {
        setImageUris(imageUris.filter(imageUri => imageUri !== uri))
    }
    return (
        <Screen>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAddImage}
                onRemoveImage={uri => handleRemoveImage(uri)}
            />
        </Screen >
    );
}
const styles = StyleSheet.create({
    //this is an image sharing example 
    container: {
        padding: 20,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },
    backgroundcolor: {
        backgroundColor: '#746AB0',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default ImagePickerScreen;
//<ImageInput imageUri={imageUri} onChangeImage={(uri) => setImageUri(uri)} />
// <ActivityIndicator /><ImageInput imageUri={imageUri} onChangeImage={(uri) => setImageUri(uri)} />
//<ActivityIndicator size="small" color="#0000ff" />'
// backgroundColor: '#746AB0'
//  <FlatList
// data={DATA}
// renderItem={renderItem}
// keyExtractor={item => item.id}
//  <Text>This is image Picker</Text>
//                 <AppButton title='select Image' onPress={selectImage} />
//           hkhjkhkjkjhi      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
//     /> 
/*
<View style={[styles.container, styles.backgroundcolor]}>
                <View style={{ height: 10, width: "100%" }}></View>
               
                <Text style={{ padding: 20 }}>This is image from library</Text>
                <AppButton title="SHARE IMAGE" onPress={handlePress} />
                <Text style={{ paddingBottom: 10 }}>This is sharing image from default share openshareDialog </Text>
                <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} />
                <Text style={{ color: '#888', fontSize: 18 }}>
                    To share a photo from your phone with a friend, just press the button abo!
                </Text>


                //   const result  = await   Permissions.askAsync(Permissions.MEDIA_LIBRARY, Permissions.LOCATION_FOREGROUND);
        //   if (result.granted){
        //       // if both permission accepted then return true other vise return false
        //   }
         // useEffect(() => {
    //     requestPermission()
    // }, [])
    SHARE FUNCTION
    const [imageUri, setImageUri] = useState();
    const handlePress = () => {
        openShareDialogAsync();
    }
    const openShareDialogAsync = async () => {
        console.log('openshareDialog');
        if (!(await Sharing.isAvailableAsync())) {
            alert(`Uh oh, sharing isn't available on your platform`);
            return;
        }
        if (!imageUri) {
            alert(`Uh oh, sharing image isn't available on your image list`);
        }
        console.log(imageUri);
        await Sharing.shareAsync(imageUri);
    } const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.cancelled) {
                setImageUri(result.uri)
            }
        } catch (error) {
            console.log('Error reading an image ', error)
        }
    }
            </View>*/
