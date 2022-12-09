import React from 'react';
import ProductForm from "../components/Productions/ProductForm";
import InSideBasketForm from "../components/UI/InSideBasketForm";

const Bee = () => {
    const CategoryName = "Bee";
    const link = '/bee'

    return (
        <>
            <h1>Бджолопакети</h1>
            <ProductForm CategoryName={CategoryName} link={link}/>
            <InSideBasketForm/>
        </>
    );
};

export default Bee;