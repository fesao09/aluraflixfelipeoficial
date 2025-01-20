import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 18.75rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardActions = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.7);
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.25rem;

  &:hover {
    color: #2271d1;
  }
`;

export const NewVideoContainer = styled.div`
  position: relative;
  width: 432px;
  height: 260.85px;
  margin: 1rem;
  border: 4px solid #6BD1FF; /* Frontend */
  box-shadow: inset 0px 0px 17px 8px #6BD1FF; /* Frontend */
  border-radius: 4px 4px 0px 0px;
  background: url(image.png);
  background-size: cover;
  background-position: center;
`;

export const EditDeleteContainer = styled.div`
  position: absolute;
  left: 68.14%;
  right: 0.15%;
  top: 81.87%;
  bottom: 0%;
`;

export const VideoImage = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url(image.png);
  background-size: cover;
  background-position: center;
  border: 4px solid #6BD1FF; /* Frontend */
  box-shadow: inset 0px 0px 17px 8px #6BD1FF; /* Frontend */
  border-radius: 4px 4px 0px 0px;
`;
