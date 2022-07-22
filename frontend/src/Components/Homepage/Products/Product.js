import styled from "styled-components";
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from "@material-ui/icons";
import {mobile} from '../../../responsive';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

    ${mobile({width:'80%'})}
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 400px;
    height: 400px;
    background-color: #f5fbfd;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }

    ${mobile({margin:'2px'})}
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 2;
    ${mobile({width:'80%'})}
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Product = ({item}) => {

    console.log(item);

    return(
        <Container>
           <Image src={item.image}/> 
           <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
           </Info>
        </Container>    
    )
}

export default Product;