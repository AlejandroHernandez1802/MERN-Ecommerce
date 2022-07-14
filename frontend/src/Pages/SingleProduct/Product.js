import styled from "styled-components";
import Announcement from '../../Components/Homepage/Announcement';
import Navbar from '../../Components/Homepage/Navbar';
import Newsletter from '../../Components/Homepage/Newsletter/Newsletter';
import Footer from '../../Components/Homepage/Footer/Footer';

import { Add, Remove } from "@material-ui/icons";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImageContainer = styled.div`
    flex: 2;
`;

const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Description = styled.p`
    margin: 20px 0px;
`;

const FilterContainer = styled.div`
    margin: 30px 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center ;
`;

const FilterTitle = styled.span`
    font-size: 14px;
    margin-right: 10px;
`;

const Select = styled.select`
    padding: 10px;
`;

const Option = styled.option`

`;

const PlatformOption = styled.option`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color : ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;


const AddContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0px;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
`;

const PayContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;

    &:hover{
        background-color: #F8F4F4;
    }
`;

const Product = () => {
    return(
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://images8.alphacoders.com/920/thumb-1920-920300.jpg"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Halo infinite</Title>
                    <Description>
                        Halo Infinite es un videojuego de disparos en primera persona de la franquicia de videojuegos 
                        de ciencia ficción creada por Bungie Studios y actualmente desarrollada por 343 Industries. Es exclusivo para las 
                        plataformas Xbox One, Microsoft Windows y Xbox Series X|S.
                    </Description>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Platform: </FilterTitle>
                            <PlatformOption color="gray"/>
                            <PlatformOption color="blue"/>
                            <PlatformOption color="green"/>
                            <PlatformOption color="red"/>
                        </Filter>

                        <Filter>
                            <FilterTitle>Edition</FilterTitle>
                            <Select>
                                <Option selected>Standard edition</Option>
                                <Option>Deluxe edition</Option>
                                <Option>Super deluxe edition</Option>
                            </Select>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove style={{cursor:'pointer'}}/>
                            <Amount>1</Amount>
                            <Add style={{cursor:'pointer'}}/>
                        </AmountContainer>
                    </AddContainer>
                    <PayContainer>
                        <Price>$59,99</Price>
                        <Button>ADD TO CART</Button>
                    </PayContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product;