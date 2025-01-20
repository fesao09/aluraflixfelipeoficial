import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const BannerBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
`;

export const BannerImg = styled.img`
  width: 646px;
  height: 333.58px;
  cursor: pointer;
  border: 4px solid #6BD1FF;
  box-shadow: inset 0px 0px 17px 8px #6BD1FF;
  border-radius: 4px;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 50%;
`;

export const BannerTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 54px;
  color: #F5F5F5;
  margin-bottom: 10px;
`;

export const BannerDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #F5F5F5;
`;
