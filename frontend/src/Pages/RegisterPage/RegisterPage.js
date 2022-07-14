import styled from "styled-components";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEXc0P741OuKAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=');
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const RegisterPage = () => {
    return(
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Name"/>
                    <Input placeholder="Last name"/>
                    <Input placeholder="Username"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Confirm password"/>
                    <Agreement>
                        By creating an account, I consent to the proccessing 
                        of my personal data in accordance with the privacy policy
                    </Agreement>
                    <Button>CREATE ACCOUNT</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default RegisterPage;