import styled from "styled-components";
import Announcement from '../../Components/Homepage/Announcement';
import Navbar from '../../Components/Homepage/Navbar';
import Products from '../../Components/Homepage/Products/Products';
import Newsletter from '../../Components/Homepage/Newsletter/Newsletter';
import Footer from '../../Components/Homepage/Footer/Footer';


const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option`

`;

const ProductList = () => {
    return(
        <Container>
            <Navbar />
            <Announcement />
            <Title>Summer games</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products: </FilterText>
                    <Select>
                        <Option disabled selected>Genre</Option>
                        <Option>Sports</Option>
                        <Option>Action/Adventure</Option>
                        <Option>Sci-fi</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Sells</Option>
                        <Option>Best sellers</Option>
                        <Option>On sale</Option>
                        <Option>New games</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                    <Select>
                        <Option selected>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList;