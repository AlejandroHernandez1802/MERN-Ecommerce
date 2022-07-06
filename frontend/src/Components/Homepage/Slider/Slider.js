import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../../../data/sliderItems";
import { useState } from "react";

/* Styled components */

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;

    /* This will prevent that the page don't  allow the user to scroll the bar below */
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #FFF7F7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

    /* This will center the arrows in the middle. To use the position absolute, the parent have to have the position in relative.*/
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;

    /* Now we have to differentiate between left and right arrows. For this, we gonna use props*/
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props => props.bg};
`

const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const Img = styled.img`
    height: 60%;  
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;

`

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 5px;
`

const Button = styled.button`
    padding: 10;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {

    /*States*/
    const [slideIndex, setSlideIndex] = useState(0);

    /* Functions */
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : sliderItems.length-1);
        }
        else if(direction === "right"){
            setSlideIndex(slideIndex === sliderItems.length-1 ? 0 :slideIndex+1);
        }
    }


    return(
        <>
            <Container>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowLeftOutlined />
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {sliderItems.map(item => (
                        <Slide key={item.id} bg={item.bg}>
                            <ImgContainer>
                                <Img src={item.img}/>
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.name}</Title>
                                <Description>{item.description}</Description>
                                <Button>BUY NOW</Button>
                            </InfoContainer>
                        </Slide>
                    ))}
                </Wrapper>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowRightOutlined />
                </Arrow>
            </Container>
        </>
    )
}

export default Slider;