import styled from 'styled-components';
import { Search } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';

const Container = styled.div`
    height: auto;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;

    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
    
`

const Logo = styled.div`
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    return(
        <>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>EN</Language>
                        <SearchContainer>
                            <Input placeholder='Find some game'/>
                            <Search style={{color:"gray", fontSize:16}}/>
                        </SearchContainer>
                    </Left>
                    <Center>
                        <Logo>E-commerce</Logo>
                    </Center>
                    <Right>
                        <MenuItem>Register</MenuItem>
                        <MenuItem>Sign in</MenuItem>
                        <MenuItem>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>
        </>
    )
}

export default Navbar;