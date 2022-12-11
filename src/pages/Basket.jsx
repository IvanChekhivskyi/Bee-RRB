import React, {useState} from 'react';
import {Trash} from "react-bootstrap-icons";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {remove_btn} from "../components/UI/BasketsForm.css";
import {back_btn} from "./pages.css"
import {
    clineBasketProductAction,
    correctProductAction,
    countTotalCostAction,
    removeProductAction
} from "../redux/basketReduser";
import {Link} from "react-router-dom";
import PlaceOrderProductForm from "../components/UI/PlaceOrderProductForm";

const Basket = () => {
    const arrBasket = useSelector(state => state.product.product)
    const totalCost = useSelector(state => state.product.totalCost)
    const [show, setShow] = useState(false);
    const [showAccept, setShowAccept] = useState(false);
    const dispatch = useDispatch();
//__________________________________Описати наадсилання замовлення у БД_________________________________________________
    const sendOrder = () => {
        dispatch(clineBasketProductAction());
    }
//______________________________________________________________________________________________________________________
    const ShowModuleOrder = () => {
        if(show === false){
            setShow(true);
        }else  setShow(false);
    }

    const ShowModuleAccepted = () => {setShowAccept(false); sendOrder();}
    const IsOrderAccepted = () => {setShow(false); setShowAccept(true);}
    const removeProduct = (id) => dispatch(removeProductAction(id));

    const correctQuantity = (id, isQ, value) => {
        if (isQ > value) {
            if (value > 0) {
                dispatch(correctProductAction({id: id, quantity: value}));
            }else dispatch(correctProductAction({id: id, quantity: 1}));
        }else dispatch(correctProductAction({id: id, quantity: isQ}));
    }

    dispatch(countTotalCostAction());

    return (
        <div>
            <h1>Basket</h1>
            <>
                <Container fluid>
                    <Row style={{background: "lightgray", border: "1px solid black", marginBottom: -1}}>
                        <Col className={"col_head_style"}>Назва</Col>
                        <Col sm={2} className={"col_head_style"}>Ціна, грн/одн.</Col>
                        <Col sm={2} className={"col_head_style"}>В наявності, одн.</Col>
                        <Col sm={2} className={"col_head_style"}>Кількість, одн.</Col>
                        <Col sm={2} className={"col_head_style"}>Вартість, грн</Col>
                        <Col sm={1} className={"col_head_style"} style={{width: 40}}></Col>
                    </Row>
                    {arrBasket.length !== 0
                        ?   <>{arrBasket.map(product =>
                            <Row style={{border: "1px solid black", marginBottom: -1}}>
                                <Col>
                                    {product.name}
                                </Col>
                                <Col sm={2} className={"col_head_style"}>
                                    {product.price}
                                </Col>
                                <Col sm={2} className={"col_head_style"}>
                                    <p style={{color: "darkred"}}>{product.isQ}:(<span style={{color: "green"}}>{product.isQ - product.quantity}</span>)</p>
                                </Col>
                                <Col sm={2} className={"col_head_style"}>
                                    <input
                                        style={{width: 60}}
                                        type={"number"}
                                        value={product.quantity}
                                        onChange={(event) => correctQuantity(product.id, product.isQ, event.target.value)}
                                        min={1}
                                    />
                                </Col>
                                <Col sm={2} className={"col_head_style"}>
                                    {Number(product.price) * Number(product.quantity)}
                                </Col>
                                <Col sm={1} className={"col_head_style"} style={{width: 40}}>
                                    <button
                                        className={"remove_btn"}
                                        type={"button"}
                                        onClick={() => removeProduct(product.id)}
                                    >
                                        <Trash color={"red"} size={20}/>
                                    </button>
                                </Col>
                            </Row>
                        )}
                        </>

                        : <h6>Товари відсутні</h6>
                    }
                    {arrBasket.length !== 0
                        ?   <>
                                <Row style={{background:"gold", marginBottom: 5, marginTop: 10}}>
                                    <Col>
                                        Сумма
                                    </Col>
                                    <Col>
                                        {totalCost}
                                    </Col>
                                </Row>
                                <Row style={{marginTop: 30}}>
                                    <Col>
                                        <Link to={'/bee'}>
                                            <Button
                                                style={{position: "relative", left: "10%"}}
                                                size={"sm"}
                                                variant={"primary"}
                                            >
                                                Продовжити покупки
                                            </Button>
                                        </Link>
                                    </Col>
                                    <Col>

                                            <Button
                                                style={{position: "relative", left: "60%"}}
                                                size={"sm"}
                                                variant={"success"}
                                                onClick={ShowModuleOrder}
                                            >
                                                Перейти до оформлення
                                            </Button>

                                    </Col>
                                </Row>
                            </>
                        :    <><Link to={'/head'}><button className={"back_btn"}>Head</button></Link></>
                    }
                </Container>
            </>
            <>
                <Modal size={"xl"} show={show} onHide={ShowModuleOrder}>
                    <PlaceOrderProductForm IsOrderAccepted={IsOrderAccepted}/>
                </Modal>
                <Modal show={showAccept} onHide={ShowModuleAccepted}>
                    <h3 style={{color: "darkred"}}>Замовлення прийнято!</h3>
                    <h5 style={{color: "lightblue"}}>Очікуйте зворотнього звязку протягом вказаного терміну...</h5>
                    <h2 style={{color: "red"}}>Дякуємо за ваш вибір!!!</h2>
                </Modal>
            </>
        </div>
    );
};

export default Basket;