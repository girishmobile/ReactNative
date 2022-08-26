import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
    AppForm,
    AppFormPicker as Picker,
    AppFormField as FormField,
    SubmitButton
} from '../components/forms';
import Screen from '../components/Screen';
import * as Yup from 'yup';

import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listings';
import UploadScreen from './UploadScreen';
const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image")
})
const categories = [
    { label: "Furniture", value: 1, backgroundColor: '#fc5c65', icon: 'floor-lamp' },
    { label: "Cars", value: 2, backgroundColor: '#fd9644', icon: 'car' },
    { label: "Cameras", value: 3, backgroundColor: '#fed330', icon: 'camera' },
    { label: "Games", value: 4, backgroundColor: '#26de81', icon: 'cards' },
    { label: "Clothing", value: 5, backgroundColor: '#2bcbba', icon: 'shoe-heel' },
    { label: "Sports", value: 6, backgroundColor: '#45aaf2', icon: 'basketball' },
    { label: "Movies & Music", value: 7, backgroundColor: '#4b7bec', icon: 'headphones' }
]
function ListingEditScreen() {
    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    //here is listing is an array of values it's return from AppForm submit
    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0);
        setUploadVisible(true);
        const result = await listingsApi.addListing(
            { ...listing, location },
            progress => setProgress(progress)
            //progress is call the function
        );
        // setUploadVisible(false);
        if (!result.ok) {
            setUploadVisible(false);
            return alert('Could not save the listing.');
        }
        //alert('Success');
        resetForm();
    }
    return (
        <Screen style={styles.container}>
            <UploadScreen
                onDone={() => setUploadVisible(false)}
                progress={progress}
                visible={uploadVisible} />
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: []
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <FormField maxLength={255} name="title" placeholder="title" />
                <FormField
                    keyboradType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                />
                <Picker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"

                />
                <FormField
                    maxLengt={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
})
export default ListingEditScreen;

//listing.location = location; this is asing location value in listing array 
        // { ...listing, location } is object it is first argumnet of function