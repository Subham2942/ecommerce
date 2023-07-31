import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md';
import { sliderItems } from '../../assets/data';

// Styled Components
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  scrollbar-width: none;
`;

const Arrows = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const LeftArrow = styled(Arrows)`
  left: 10px;
`;

const RightArrow = styled(Arrows)`
  right: 10px;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIdx * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  font-size: 20px;
  padding: 10px;
  background: transparent;
  cursor: pointer;

  &:hover {
    box-shadow: -1.5px 2.5px 2.5px 2.5px gray;
    transform: translate(1.5px, -1.5px);
  }
`;

const Slider = () => {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIdx((slideIdx) => (slideIdx > 0 ? slideIdx - 1 : 2));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIdx((slideIdx) => (slideIdx > 0 ? slideIdx - 1 : 2));
    } else {
      setSlideIdx((slideIdx) => (slideIdx < 2 ? slideIdx + 1 : 0));
    }
  };

  return (
    <Container>
      <Wrapper slideIdx={slideIdx}>
        {sliderItems.map((item) => (
          <Slide key={item.id} style={{ backgroundColor: `#${item.bg}` }}>
            {/* IMAGE CONTAINER */}
            <ImgContainer>
              <Image src={item.img} alt="Slider" />
            </ImgContainer>

            {/* INFO CONTAINER */}
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <LeftArrow onClick={() => handleClick('left')}>
        <MdOutlineArrowLeft />
      </LeftArrow>

      <RightArrow onClick={() => handleClick('right')}>
        <MdOutlineArrowRight />
      </RightArrow>
    </Container>
  );
};

export default Slider;
