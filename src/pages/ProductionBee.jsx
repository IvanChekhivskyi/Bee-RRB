import React from 'react';
import ProductForm from "../components/Productions/ProductForm";
import InSideBasketForm from "../components/UI/InSideBasketForm";

const ProductionBee = () => {
    const CategoryName = "ProductionBee";
    const link = '/production';
    
    return (
        <>
            <h1>Продукція бджільництва</h1>
            <ProductForm CategoryName={CategoryName} link={link}/>
            <InSideBasketForm/>
        </>
    );
};

export default ProductionBee;