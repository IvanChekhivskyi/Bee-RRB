import React, {useState} from 'react';
import {Basket, Trash} from "react-bootstrap-icons";
import {Button, Col, Container, Offcanvas, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {basket_form, op_btn,cl_btn, remove_btn} from "./BasketsForm.css";
import {correctProductAction, countTotalCostAction, removeProductAction} from "../../redux/basketReduser";
import {Link} from "react-router-dom";

const InSideBasketForm = () => {
    const availableUnitsProduct = 100; //значень кількості наявних одиниць товару
    const arrBasket = useSelector(state => state.product.product)
    const totalCost = useSelector(state => state.product.totalCost)
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const openOrClose = () => {
        if(isOpen) {
            setIsOpen(false);
        }else setIsOpen(true);
    }

    const removeProduct = (id) => {
        dispatch(removeProductAction(id));
        dispatch(countTotalCostAction());
    }

    const correctQuantity = (id, value) => {
        if (availableUnitsProduct > value) {
            if (value > 0) {
                dispatch(correctProductAction({id: id, quantity: value}));
            }else{
                dispatch(correctProductAction({id: id, quantity: 1}));
            }
        }else{
            dispatch(correctProductAction({id: id, quantity: availableUnitsProduct}));
        }
        dispatch(countTotalCostAction());
    }

    return (
        <>
            <Offcanvas show={isOpen} placement={'end'} onHide={openOrClose} className={"basket_form"}>
                        <button className={"cl_btn"} onClick={openOrClose}><Basket color={"yellow"} size={20}/></button>
                        <div className={"positions_basket"}>
                            <Container>
                                {arrBasket.length !== 0
                                    ?   <>{arrBasket.map(product =>
                                            <Row style={{borderBottom: "1px solid black"}}>
                                                <Col>
                                                    {product.name}
                                                </Col>
                                                <Col>
                                                    {product.price}
                                                </Col>
                                                <Col style={{width: 60}}>
                                                    <input
                                                        style={{width: 60}}
                                                        type={"number"}
                                                        value={product.quantity}
                                                        onChange={(event) => correctQuantity(product.id, event.target.value)}
                                                        min={1}
                                                    />
                                                </Col>
                                                <Col>
                                                    {Number(product.price) * Number(product.quantity)}
                                                </Col>
                                                <Col>
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
                                    ?   <><Row style={{background:"gold", marginBottom: 5, marginTop: 10}}>
                                            <Col>
                                                Сумма
                                            </Col>
                                            <Col>
                                                {totalCost}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Link to={'/basket'}>
                                                <Button
                                                    style={{position: "relative", left: "70%"}}
                                                    size={"sm"}
                                                    variant={"success"}
                                                >
                                                    У кошик
                                                </Button>
                                            </Link>
                                        </Row></>
                                   :    <></>
                                }
                            </Container>
                        </div>
                </Offcanvas>
            {isOpen ?<></> :<button className={"op_btn"} onClick={openOrClose}><Basket color={"yellow"} size={20}/></button>}
        </>
    );
};

export default InSideBasketForm;