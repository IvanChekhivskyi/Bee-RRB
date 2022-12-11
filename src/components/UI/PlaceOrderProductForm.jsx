import React, {useState} from 'react';
import {Row, Col, Form, Card, Button, Container, Image, Navbar} from "react-bootstrap";
import {
    ButtonFacebook, ButtonSkype,
    ButtonsTwitter,
    ButtonTelegram
} from "./ButtonsSocialNetworks/ButtonsSocialNetworks";


const PlaceOrderProductForm = ({IsOrderAccepted}) => {
    const textEvent = {text: "Event-text"};
    const [phoneNumber, setPhoneNumber] = useState(0);
    const OrderAccepted = () => IsOrderAccepted(true);

    return (

            <Container>
                <Row className="mb-3" style={{justifyContent: "center"}}>
                    <Col sm={1} style={{background: "yellowgreen"}}>
                        <Col style={{margin: 10, background: "yellow"}}>
                            <Row style={{justifyContent: "center"}}>
                                <ButtonsTwitter phoneNumber={+380985160167}/>
                            </Row>
                            <Row style={{justifyContent: "center"}}>
                                <ButtonFacebook phoneNumber={+380985160167}/>
                            </Row>
                            <Row style={{justifyContent: "center"}}>
                                <ButtonTelegram phoneNumber={+380985160167}/>
                            </Row>
                            <Row style={{justifyContent: "center"}}>
                                <ButtonSkype phoneNumber={+380985160167}/>
                            </Row>
                        </Col>
                    </Col>
                    <Col sm={8} style={{background: "yellow"}}>
                        <Row>
                            <Form style={{height: 30, display: "flex", justifyContent: "center"}}>
                                {textEvent.text}
                            </Form>
                        </Row>
                        <Row>
                            <Form style={{background: "blue", height: 130}}>
                                <input
                                    style={{width: 140}}
                                    type={"tel"}
                                    defaultValue={"+380"}
                                    onChange={(event) =>  setPhoneNumber(event.target.value)}
                                />
                            </Form>
                        </Row>
                    </Col>
                    <Col sm={3} style={{background: "darkgreen"}}>
                        <Card style={{width: 265, position: "relative", marginTop: 12}}>
                            <p style={{border: "1px solid lightgrey", marginBottom: 1, textAlign: "justify"}}>
                                Авторизуйтеся і отримайте змогу переглядати історію і поточний стан виконання ваших замовлень
                            </p>
                        <Row style={{display: "flex", justifyContent: "center"}}>
                            <Col sm={1} style={{width: "55%", display: "flex", justifyContent: "center"}}>
                                <Button size={"sm"} s variant={"primary"}>Зареєструватися</Button>
                            </Col>
                            <Col sm={1} style={{width: "35%", display: "flex", justifyContent: "center"}}>
                                <Button size={"sm"} variant={"success"}>Увійти</Button>
                            </Col>
                        </Row>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button
                        variant="primary"
                        type="button"
                        onClick={OrderAccepted}
                >
                    підтвердити
                </Button>
            </Container>

    );
};

export default PlaceOrderProductForm;