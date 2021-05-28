import React, { useState } from 'react'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import SimpleModal from '../components/SimpleModal'

import style from '../styles/Form.module.scss'



export default function ContactForm() {

    const [showModal, setShowModal] = useState(false);

    const [initialValues, setInitialValues] = useState ({
        name: "",
        email: "",
        message: ""
    });
    const contactSchema = Yup.object().shape({
        name: Yup.string().required("Let me know your name"),
        email: Yup.string().email("This Email is not valid").required("Your email is required"),
        message: Yup.string().required("Tell me more about your needs")
    });

    const MyTextField = ({label, ...props}) => {
        const [field, meta] = useField(props);
        return (
            <>
                <label htmlFor={props.id || props.name} className="form-label">{label}</label>
                <input className="text-input" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className={style.error}>{meta.error}</div>
                ) : null}
            </>
        )
    }

    const MyTextArea = ({label, ...props}) => {
        const [field, meta] = useField(props);
        return (
            <>
                <label htmlFor={props.id || props.name} className="form-label">{label}</label>
                <textarea className="text-area" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className={style.error}>{meta.error}</div>
                ) : null}
            </>
        );
    };

    const handleSubmit = (values) => {
        fetch('/api/email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then((res) => {
            console.log('Res received');
            if (res.status === 200) {
                console.log('Success');
                setInitialValues({name: '', email: '', message: ''});
                setShowModal(true);
            }
        })
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <>
        <Formik
            initialValues={initialValues}
            validationSchema={contactSchema}
            onSubmit={handleSubmit}>
            {(formik) => {
                const {errors, touched, isValid, dirty } = formik;
                return (
                    <div className="container col-lg-5">
                    <h1 className="second">Let's Keep in Touch</h1>
                        <Form>
                            <div className={`${style["form-row"]} form-row`}>
                                <MyTextField
                                    label="Name" 
                                    placeholder="Enter your Name"
                                    type="text"
                                    name="name"
                                    className={errors.name && touched.name ? "input-error" : null, "form-control"}
                                />
                            </div>
                            <div className={`${style["form-row"]} form-row`}>
                                <MyTextField
                                    label="Email"
                                    placeholder="Enter your Email"
                                    type="text"
                                    name="email"
                                    className={errors.email && touched.email ? 
                                    "input-error" : null, "form-control"}
                                />
                            </div>

                            <div className={`${style["form-row"]} form-row`}>
                                <MyTextArea
                                    label="Message"
                                    placeholder="Leave me a message"
                                    name="message"
                                    rows="5"
                                    className={errors.message && touched.message ? 
                                    "error" : null, "form-control"}
                                />
                            </div>
                            <div className={style.submit}>
                            <Button type="submit" disabled={!(dirty && isValid)}
                            className={!(dirty && isValid) ? style.hidden : null}>
                                <Zoom in={isValid} >
                                    <FontAwesomeIcon icon={faPaperPlane} color="#209B29" />
                                </Zoom> 
                            </Button>
                            </div>
                        </Form>
                    </div>
                )
            }}
        </Formik>
        <SimpleModal 
        title={"Thank You!"}
        bodyTxt={"Your message has been sent, I will contact you shortly "}
        handleCloseModal={handleCloseModal}
        showModal={showModal}
        />
        </>
    )
}
