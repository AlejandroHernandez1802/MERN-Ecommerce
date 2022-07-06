import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    background-color: teal;
    color: white;
    font-size: 14px;
    font-weight: bolder;
`

const Announcement = () => {

    return(
        <>
            <Container>
                Ultimate deals!
            </Container>
        </>
    )

}

export default Announcement;