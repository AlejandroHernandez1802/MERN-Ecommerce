import styled from "styled-components";
import Navbar from '../../Components/Homepage/Navbar';
import Announcement from '../../Components/Homepage/Announcement';
import Footer from '../../Components/Homepage/Footer/Footer';
import Product from "./Product";
import Summary from "./Summary";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.div`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && "none"};
    background-color: ${props => props.type === 'filled' ? "black" : "transparent"};
    color: ${props => props.type === 'filled' && "white"};
`;

const TopTexts = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;



const Cart = () => {
    return(
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>SHIPPING BAG(2)</TopText>
                        <TopText>YOUR WHISHLIST(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product />
                        <hr/>
                        <Product />
                    </Info>
                    <Summary />
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart;