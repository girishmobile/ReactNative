import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

import { useFormikContext } from 'formik';


function AppFormField({ name, ...otherProps }) {
    const {
        setFieldTouched,
        setFieldValue,
        errors,
        touched,
        values
    } = useFormikContext();
    return (
        <>
            <AppTextInput
                // autoCapitalize="none"
                // autoCorrect={false}
                // icon='email'
                // keyboardType="email-address"
                onBlur={() => setFieldTouched(name)}
                onChangeText={text => setFieldValue(name, text)}
                value={values[name]}
                {...otherProps}
            // placeholder='Email'
            // textContentType="emailAddress"
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormField;