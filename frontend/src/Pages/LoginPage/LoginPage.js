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
    width: 25%;
    padding: 20px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    margin: 20px 0px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const LoginPage = () => {
    return(
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                    <ButtonContainer>
                        <Button>SIGN IN</Button>
                    </ButtonContainer>
                    <Link>I DON'T REMEMBER MY PASSWORD</Link>
                    <Link>CREATE ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default LoginPage;