import { Add,Remove } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
`;

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 300px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
`;

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;

const ProductPlatform = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;

const ProductEdition = styled.span`

`;

const PriceDetails = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ProductAmount = styled.span`
    font-size: 20px;
`;

const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: 200;
`;

const Product = () => {
    return(
        <Container>
            <ProductDetails>
                <Image src="https://compass-ssl.xbox.com/assets/49/b6/49b6313d-375e-49ba-b08b-3e7bf67d8928.jpg?n=Halo-Infinite_GLP-Page-Hero-1084_Poster-Image_1920x1080.jpg"/>
                <Details>
                    <ProductName> <b>Product: </b>HALO INFINITE</ProductName>
                    <ProductId> <b>ID: </b>1193093839</ProductId>
                    <ProductPlatform color="green"/>
                    <ProductEdition> <b>Edition: </b>DIGITAL DELUXE EDITION</ProductEdition>
                </Details>
            </ProductDetails>
            <PriceDetails>
                <ProductAmountContainer>
                    <Add />
                    <ProductAmount>1</ProductAmount>
                    <Remove />
                </ProductAmountContainer>
                <ProductPrice>$59,99</ProductPrice>
            </PriceDetails>
        </Container>
    )
}

export default Product;