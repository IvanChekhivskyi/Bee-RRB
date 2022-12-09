import React from 'react';
import ProductForm from "../components/Productions/ProductForm";
import InSideBasketForm from "../components/UI/InSideBasketForm";

const Queens = () => {
    const CategoryName = "Queens";
    const link = '/queens';

    return (
        <>
            <h1>Матководство</h1>
                <ProductForm CategoryName={CategoryName} link={link}/>
                <InSideBasketForm/>
        </>
    );
};

export default Queens;