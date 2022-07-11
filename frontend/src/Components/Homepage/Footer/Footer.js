import styled from 'styled-components';
import {Facebook, Instagram, Twitter, GitHub, HouseOutlined, PhoneOutlined, MailOutlined} from "@material-ui/icons";

const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Description = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
    margin: 5px;
`;

const SocialIcon = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const ContactItem = styled.div`
    flex: 1;
    display: flex;
`;

const Footer = () => {
    return(
        <Container>
            <Left>
                <Logo>E-commerce</Logo>
                <Description>My first MERN E-commerce project.</Description>
                <SocialContainer>
                    <SocialIcon color="#3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="#E4405F">
                        <Instagram />
                    </SocialIcon >
                    <SocialIcon color="#55ACEE">
                        <Twitter />
                    </SocialIcon >
                    <SocialIcon color="#000000">
                        <GitHub />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Login</ListItem>
                    <ListItem>Register</ListItem>
                </List>
            </Center>
            <Right>
                    <Title>Contact</Title>
                    <ContactItem>
                        <HouseOutlined />
                        Cra 1f #46-22, Neiva
                    </ContactItem>
                    <ContactItem>
                        <PhoneOutlined />
                        +57 3103457876
                    </ContactItem>
                    <ContactItem>
                        <MailOutlined />
                        alejandro.herqui@gmail.com
                    </ContactItem> 
            </Right>
        </Container>
    )
}

export default Footer;