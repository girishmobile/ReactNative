import React from 'react';
import { AppForm, } from './forms';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(1).label("Message"),
})
function ContactSellerForm(props) {
    const handleSubmit = () => {

    }
    return (
        <AppForm
            initialValues={{ message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >

        </AppForm>
    );
}

export default ContactSellerForm;