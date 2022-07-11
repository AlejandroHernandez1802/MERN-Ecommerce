import styled from "styled-components";
import { popularGames } from "../../../data/sliderItems";
import Product from "./Product";

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
    return(
        <Container>
            {popularGames.map((product) => (
                <Product key={product.id} item={product}/>
            ))}
        </Container>    
    )
}

export default Products;