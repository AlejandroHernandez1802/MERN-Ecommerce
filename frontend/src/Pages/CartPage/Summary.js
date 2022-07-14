import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
    text-align: center;
`;

const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;

    font-weight: ${props => props.type === "Total" && "500"};
    font-size: ${props => props.type === "Total" && "24px"};
`;

const SummaryItemText = styled.p`
    
`;  

const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Summary = () => {
    return(
        <Container>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
                <SummaryItemText>Estimated shipping</SummaryItemText>
                <SummaryItemPrice>$0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="Total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
        </Container>
    )
}

export default Summary;