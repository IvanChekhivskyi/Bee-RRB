import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle} from "react-bootstrap";
import {form_module_style, form_cost_style, form_price_style} from "./ProductModule.css"

//======================================================================================================================

const ProductModule = ({show, setShow, quantity, setQuantity, infoProduct, addProductInBasket}) => {
    const availableUnitsProduct = 100; //значень кількості наявних одиниць товару
    const [errorQuantity, setErrorQuantity] = useState(" ");
    const inputQuantity = (value) => {setErrorQuantity(" ");
        setQuantity(value)
    }

//----------------------------------------------------------------------------------------------------------------------

    const addQuantity = () => {
        if(0 < quantity && quantity < availableUnitsProduct + 1){
            setShow(false);
            addProductInBasket();
        }else setErrorQuantity("Недопустиме значення!!!");
    }

//----------------------------------------------------------------------------------------------------------------------

    return (
        <>
            <Modal
                show={show}
            >
                <ModalHeader>
                    <ModalTitle>
                        {infoProduct.name}
                    </ModalTitle>
                    <button
                        style={{width: 25, height:25, borderRadius: 10, color: "red"}}
                        onClick={() => setShow(false)}
                    >
                        X
                    </button>
                </ModalHeader>
                <ModalBody>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: 10}}>
                        <form className={"form_module_style"}>Ціна за одиницю / грн.</form>
                        <form className={"form_module_style"} style={{color: "darkred"}}>{errorQuantity}</form>
                        <form className={"form_module_style"}>Вартість  / грн.</form>
                    </div>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <form className={"form_price_style"}>{infoProduct.price}</form>
                        <input
                            style={{width: 140, background: "lightblue", borderRadius: 5}}
                            value={quantity}
                            type={"number"}
                            onChange={(event) => inputQuantity(event.target.value)}
                            min={1}
                            max={availableUnitsProduct}
                        />
                        <form className={"form_cost_style"}>{Number(infoProduct.price) * Number(quantity)}</form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        variant={"success"}
                        onClick={addQuantity}
                    >
                        Купити
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default ProductModule;
