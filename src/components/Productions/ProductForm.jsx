import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {arrBee, arrMead, arrQueens} from "./productionArray";
import {Button, Col, Container, Row, Tooltip,OverlayTrigger} from "react-bootstrap";
import {Link} from "react-router-dom";
import ProductModule from "../UI/ProductModule";
import {addProductAction, correctProductAction, countTotalCostAction} from "../../redux/basketReduser";
import {sendReferentsForInfo} from "../../redux/basketReduser";
import {Info} from "react-bootstrap-icons";

//======================================================================================================================

const ProductForm = ({CategoryName, link}) => {
    const dispatch = useDispatch();
    const [arr, setArr] = useState([]);
    const [correctQuantity, setCorrectQuantity] = useState(false)
    const [show, setShow] = useState(false);
    const [quantity, setQuantity] = useState(1)
    const [infoProduct, setInfoProduct] = useState({name: " ", price: " "});
    const arrBasket = useSelector(state => state.product.product)
    const info = [  {id: "1Q", text: "ftufuyfuf iugiyg, yfyutf guygy. guyg"},
                    {id: "2Q", text: "ftufuyguygy. guyg"},
                    {id: "3Q", text: "ftufuyf guygy. guyg"},
                 ]

//----------------------------------------------------------------------------------------------------------------------

    const textAboutProduct = (id) => {
        for(let i = 0; i < info.length; i++){
            if (info[i].id === id){
                if(info[i].text !== "") {
                    return (<>{info[i].text}</>);
                }else return (<>Опис відсутній</>);
            }
        }

    }

//----------------------------------------------------------------------------------------------------------------------

    const giveValueQuantity = (id) => {
        for(let i = 0; i < arrBasket.length; i++){
            if(arrBasket[i].id === id){
                    setQuantity(arrBasket[i].quantity)
            }
        }
    }


//----------------------------------------------------------------------------------------------------------------------

    const clickAddProduct = (id, name, price) => {
        if(id !== " ") {
            if(arrBasket.some(product => product.id === id)) {
                giveValueQuantity(id);
                setInfoProduct({id: id, name: name, price: price, quantity: quantity});
                setShow(true);
                setCorrectQuantity(true);
            }else{
                setInfoProduct({id: id, name: name, price: price, quantity: 1});
                setQuantity(1);
                setShow(true);
                setCorrectQuantity(false);
            }
        } else return("Error Id");
    }

//----------------------------------------------------------------------------------------------------------------------

    const addProductInBasket = () => {
        if(correctQuantity){
            for (let i = 0; i < arrBasket.length; i++){
                if(arrBasket[i].id === infoProduct.id){
                    dispatch(correctProductAction({id: infoProduct.id, quantity: quantity}));
                    dispatch(countTotalCostAction())
                }
            }
        }else
            dispatch(addProductAction([{    id: infoProduct.id,
                                                    name: infoProduct.name,
                                                    price: infoProduct.price,
                                                    quantity: quantity          }]));
            dispatch(countTotalCostAction())
    }

//----------------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        if(CategoryName === "Bee"){
            setArr(arrBee);
        }else

        if(CategoryName === "ProductionBee"){
            setArr(arrMead);
        }else

        if(CategoryName === "Queens"){
            setArr(arrQueens);
        }
    }, [CategoryName])

//----------------------------------------------------------------------------------------------------------------------

    return (
        <>
            <div className={"containerStyle"}>
                <Container fluid style={{background: "white"}} >
                    {arr.map(position =>
                        <div id={position.id}>
                            <Row style={{border: "lightgray ridge 0.1px"}} className="justify-content-md-center">
                                <Col>
                                    <div>{position.name}</div>
                                </Col>
                                <Col xs={"auto"}>
                                    <div>{position.price}</div>
                                </Col>
                                <Col xs={"auto"}>
                                    <div>
                                        <Link extend to={'/info'}>
                                            <OverlayTrigger
                                                overlay={
                                                    <Tooltip>
                                                        {textAboutProduct(position.id) !== undefined
                                                            ? textAboutProduct(position.id)
                                                            : <>Опис відсутній</>
                                                        }
                                                    </Tooltip>
                                                }
                                            >
                                                <button
                                                    className={"info_btn"}
                                                    type={"button"}
                                                    onClick={() => dispatch(sendReferentsForInfo({id:position.id, comeback: link}))}
                                                >
                                                    <Info color={"blue"} size={20}/>
                                                </button>
                                            </OverlayTrigger>
                                        </Link>
                                    </div>
                                </Col>
                                <Col xs={"auto"}>
                                    <div>
                                        <Button
                                            variant={"success"}
                                            onClick={() => clickAddProduct(position.id, position.name, position.price)}
                                        >
                                            Додати у кошик
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )}
                </Container>

                <ProductModule
                    show={show}
                    setShow={setShow}
                    infoProduct={infoProduct}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    addProductInBasket={addProductInBasket}
                />
            </div>
        </>
    );
};

export default ProductForm;