import styled from "styled-components";
import Announcement from '../../Components/Homepage/Announcement';
import Navbar from '../../Components/Homepage/Navbar';
import Products from '../../Components/Homepage/Products/Products';
import Newsletter from '../../Components/Homepage/Newsletter/Newsletter';
import Footer from '../../Components/Homepage/Footer/Footer';

import {useLocation} from 'react-router-dom';
import { useState } from "react";


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

    //The location is used to get the category selected
    const location = useLocation();
    const category = location.pathname.split("/")[2];

    //States to handle the filters
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState("newest");

    //Function to handle filters
    const handleFilter = (e) => {
        const value = e.target.value;
        setFilter({
            ...filter,
            [e.target.name]:value
        })
    }

    //Function to handle the sort operation
    const handleSort = (e) => {
        setSort(e.target.value);
    }

    return(
        <Container>
            <Navbar />
            <Announcement />
            <Title>Summer games</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products: </FilterText>
                    <Select name="platforms" onChange={handleFilter}>
                        <Option disabled>Platform</Option>
                        <Option>PS4</Option>
                        <Option>PS5</Option>
                        <Option>XBOX Series</Option>
                        <Option>XBOX ONE</Option>
                        <Option>Nintendo Switch</Option>
                        <Option>PC</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                    <Select onChange={handleSort}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={category} filter={filter} sort={sort}/>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList;