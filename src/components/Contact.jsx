import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Spinner } from "react-bootstrap";
import { Container, Col, Row, Form, FloatingLabel } from "react-bootstrap";

export default function Contact() {
    const APIKEY = process.env.REACT_APP_APILAYER_KEY;
    const [isFetching, setIsFetching] = useState(false);
    const [isSucceed, setIsSucceed] = useState(false);
    const [emailError, setEmailError] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const form = useRef();
    const onSubmit = () => {
        setIsFetching(true);
        fetch(
            `https://api.apilayer.com/email_verification/${form.current.email.value}`,
            {
                method: "GET",
                headers: {
                    apikey: APIKEY,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log("data.isDeliverable", data);
                if (!data.is_deliverable) {
                    setIsFetching(false);
                    setEmailError("Please enter a deliverable email address");
                    throw new Error("undeliverable email");
                }
                sentEmail();
            });
        const sentEmail = async () => {
            await emailjs
                .sendForm(
                    process.env.REACT_APP_SERVICE_ID,
                    process.env.REACT_APP_TEMPLATE_ID,
                    form.current,
                    process.env.REACT_APP_PUBLIC_KEY
                )
                .then(
                    () => {
                        setIsFetching(false);
                        setEmailError(false);
                        setIsSucceed(true);
                    },
                    (error) => {
                        setIsFetching(false);
                        setEmailError(
                            "Something went wrong, please try again later"
                        );
                    }
                );
        };
    };
    return (
        <Container fluid="xl" className="py-5" id="contact">
            <Row className="d-flex align-items-center">
                <Col
                    md
                    className="left d-flex flex-column justify-content-center align-items-center mb-5 mb-md-0 pb-3"
                >
                    {/* <img src="./assets/keepcalm.jpg" className="" alt="keep calm" /> */}
                    <img src="./assets/star.svg" className="mb-3" alt="star" />
                    <h3>KEEP</h3>
                    <h3>LEARNING</h3>
                    <p>AND</p>
                    <h3>KEEP</h3>
                    <h3>CODING</h3>
                </Col>
                <Col
                    md
                    className="d-flex flex-column justify-content-center align-items-center"
                >
                    <h1 className="text-center">CONTACT ME</h1>
                    <p className="text-secondary text-center">
                        Leave your message here. I will get back to you ASAP.
                    </p>
                    <Form ref={form} className="w-100 px-4">
                        <FloatingLabel className="mb-3" label="Name">
                            <Form.Control
                                placeholder="Name"
                                {...register("name", {
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^[a-zA-Z]*$/,
                                })}
                            />
                            <span className="mt-1 text-danger">
                                {errors.name &&
                                    "name can not be empty and max lenth is 20."}
                            </span>
                        </FloatingLabel>
                        <FloatingLabel className="mb-3" label="Email">
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Email can not be empty",
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Please enter a valid email",
                                    },
                                })}
                            />
                            <span className="mt-1 text-danger">
                                {errors.email && errors.email.message}
                            </span>
                        </FloatingLabel>
                        <FloatingLabel className="mb-3" label="Subject">
                            <Form.Control
                                type="text"
                                placeholder="Subject"
                                {...register("subject", {
                                    required: true,
                                    maxLength: 50,
                                })}
                            />
                            <span className="mt-1 text-danger">
                                {errors.subject &&
                                    "subject can not be empty and max lenth is 50."}
                            </span>
                        </FloatingLabel>
                        <FloatingLabel className="mb-3" label="Message">
                            <Form.Control
                                as="textarea"
                                placeholder="Message"
                                {...register("message", {
                                    required: true,
                                    maxLength: 1000,
                                })}
                            />
                            <span className="mt-1 text-danger">
                                {errors.name &&
                                    "message can not be empty and max lenth is 1000."}
                            </span>
                        </FloatingLabel>
                        <div className="d-flex justify-content-center justify-content-md-end">
                            <button onClick={handleSubmit(onSubmit)}>
                                {isFetching ? (
                                    <Spinner
                                        animation="border"
                                        variant="secondary"
                                        size="sm"
                                    />
                                ) : (
                                    <span>Submit</span>
                                )}
                            </button>
                        </div>
                    </Form>
                    <div
                        className={`fs-5 d-flex w-100 ${
                            !isSucceed && !emailError && "invisible"
                        }
             justify-content-center align-items-center
             border text-secondary mt-3 px-4 py-2 messageBox border-${
                 isSucceed ? "success" : "danger"
             }
             `}
                    >
                        {isSucceed && (
                            <p className="text-secondary text-center">
                                Thank you for your contact, I will get back to
                                you in 48 hours.
                            </p>
                        )}
                        {emailError && (
                            <p className="text-danger text-center">
                                {emailError}
                            </p>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
