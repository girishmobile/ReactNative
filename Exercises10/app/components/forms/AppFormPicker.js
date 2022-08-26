import React, { useState } from 'react';
import { useFormikContext } from 'formik';
//import AppPicker from '../AppPicker';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker(
    {
        items,
        name,
        numberOfColumns,
        PickerItemComponent,
        placeholder
    }) {
    const { setFieldValue, errors, touched, values } = useFormikContext();
    return (
        <>
            <AppPicker
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={(item) => setFieldValue(name, item)}  //event 
                placeholder={placeholder}
                PickerItemComponent={PickerItemComponent}
                selectedItem={values[name]}
            />

            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;