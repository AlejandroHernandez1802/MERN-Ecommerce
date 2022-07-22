import styled from "styled-components";
import { popularGames } from "../../../data/sliderItems";
import Product from "./Product";
import {mobile} from '../../../responsive';

import { useState, useEffect } from "react";
import axios from 'axios';

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({padding:'0'})}
`

const Products = ({cat, filter, sort}) => {

    console.log(filter);

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async() => {
            try{
                const res = await axios.get(cat ? `http://localhost:3001/api/products/findAll?category=${cat}`:`http://localhost:3001/api/products/findAll`);
                setProducts(res.data);
            }
            catch(err){
                console.log(err);
            }
        }

        getProducts();
    }, [cat])


    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item => Object.entries(filter).every(([key, value]) => 
                item[key].includes(value)
            ))
        );
    }, [products, cat, filter])

    return(
        <Container>
            {filteredProducts.map((product) => (
                <Product key={product.id} item={product}/>
            ))}
        </Container>    
    )
}

export default Products;