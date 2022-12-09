import React, {useState} from 'react';
import {Basket} from "react-bootstrap-icons";
import {Col, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {basket_form, op_btn,cl_btn} from "../../components/Basket/BasketsForm.css";

const InSideBasketForm = () => {
    const arrBasket = useSelector(state => state.product.product)
    const [isOpen, setIsOpen] = useState(false);

    const openOrClose = () => {
        if(isOpen) {
            setIsOpen(false);
        }else setIsOpen(true);
    }
    return (
        <>
            {isOpen
                ?   <form className={"basket_form"}>
                        <button className={"cl_btn"} onClick={openOrClose}><Basket color={"yellow"} size={20}/></button>
                        <div className={"positions_basket"}>
                            {arrBasket.length !== 0
                                ?   <>{arrBasket.map(product =>
                                        <Row>
                                            <Col>
                                                {product.name}
                                            </Col>
                                            <Col>
                                                {product.price}
                                            </Col>
                                            <Col>
                                                {product.quantity}
                                            </Col>
                                            <Col>
                                                {Number(product.price) * Number(product.quantity)}
                                            </Col>
                                        </Row>
                                    )}</>

                                : <h6>Товари відсутні</h6>
                            }

                        </div>
                    </form>

                :   <button className={"op_btn"} onClick={openOrClose}><Basket color={"yellow"} size={20}/></button>
            }
        </>
    );
};

export default InSideBasketForm;