import styled from 'styled-components';

export const Overview = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: white;
  display: grid;
  grid-template-columns: 70% 30%;
  text-align: center;
  width: 80%;
  margin: auto;
`;

export const Gallery = styled.div`
  align-items: center;
  display: grid;
  height: 850px;
  position: relative;
  ${({ extendedView }) => {
    return extendedView ? `
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 90% 10%;
    grid-column-start: span 2;
    justify-content: center;
    ` : `
    grid-template-columns: 25% 75%;
    grid-template-rows: 100%;
    `;
  }}
`;

export const CloseExtended = styled.i`
  position: absolute;
  top: 0px;
  left: 0px;

  ${({ extendedView }) => {
    return extendedView ? `
    width: 80px;
    height: auto;
    ` : `
    display: none;
    `;
  }}
`;

export const MainImgWrapper = styled.div`
  grid-column-start: 2;
  height: 100%;
  width: auto;
  max-width: 800px;
  position: relative;
  justify-content: center;

  ${({ extendedView }) => {
    return extendedView ? `
    display: flex;
    ` : `
    display: grid;
    margin: auto;
    `;
  }}
`;


export const MainImg = styled.img`
  height: auto;
  width: auto;
  align-self: center;
  position: relative;

  ${({ extendedView, zoomedIn }) => {
    return extendedView ? `
    max-width: 800px;
    max-height: 100%;
    &:hover {
      cursor: ${zoomedIn ? 'zoom-out' : 'cell'}
    }
    ` : `
    max-width: 600px;
    max-height: 80%;
    &:hover {
      cursor: zoom-in;
    }
    `;
  }}
`;

export const Lens = styled.div`
  ${({ zoomedIn }) => {
    if (!zoomedIn) {
      return 'display: none;';
    }
  }}
  position: absolute;
  width: 250px;
  height: 250px;
`;

export const ZoomedImage = styled.div`
${({ zoomedIn }) => {
    return zoomedIn ? `
      max-width: 800px;
      max-height: 100%;
      position: absolute;
      border: 1px solid black;
      height: 100%;
      width: 100%;
      top: 0px;
      &:hover {
        cursor: zoom-out;
      }
    ` : `
    display: none;
    `;
  }}
`;

export const LeftArrow = styled.i`
  align-self: center;
  position: absolute;
  padding-left: 8px;
  ${({ hidden }) => {
    return hidden ? 'display: none;' : null;
  }}

  ${({ extendedView }) => {
    return extendedView ? `
    grid-column-start: 1;
    ` : `
    grid-column-start: 2;
    `;
  }}

  &:hover {
  }

  &:active {
    transform: translateX(-12px);
  }
`;

export const RightArrow = styled.i`
  align-self: center;
  grid-column-start: 2;
  justify-self: right;
  position: absolute;
  padding-right: 8px;
  ${({ hidden }) => {
    return hidden ? 'display: none;' : null;
  }}

  &:hover {
  }

  &:active {
    transform: translateX(12px);
  }
`;

export const Thumbnails = styled.div`
  display: flex;
  height: 100%;

  ${({ extendedView }) => {
    return extendedView ? `
    flex-direction: row;
    grid-column-start: 2;
    grid-row-start: 2;
    ` : `
    flex-direction: column;
    grid-column-start: 1;
    grid-row-start: 1;
    justify-content: center;
    justify-self: end;
    `;
  }}
`;

export const GalleryThumbnail = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 14.5%;
  width: auto;
  margin: auto;
  ${({ selected }) => {
    return selected ? 'box-shadow: 0px 0px 0px 5px #808080' : 'box-shadow: 0px 0px 0px 0px #808080';
  }}
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ProductInfo = styled.div`
`;

export const StarContainer = styled.div`
  left: 22px;
  margin-top: 4px;
  position: relative;
  width: 100px;
`;

export const RatingDisplay = styled.span`
  font-size: 20px;
`;

export const LinkToReviews = styled.a`
  display: flex;
  position: relative;
  text-decoration: none;
  left: 24px;
`;

export const Category = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  text-align: left;
  left: 24px;
  position: relative;
  margin: 10px 0px;
`;

export const Name = styled.h3`
  font-family: 'Montserrat', sans-serif;
  bottom: 8px;
  font-size: 28px;
  left: 24px;
  margin: 10px 0px;
  position: relative;
  padding: 10px;
  padding: 0px;
  text-align: left;
`;

export const Price = styled.span`
  bottom: 11px;
  font-size: 22px;
  float: left;
  left: 18px;
  position: relative;
  margin: 0px 5px;
  color: ${props => props.color || 'black'}
`;

export const StyleSelector = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  justify-items: center;
  row-gap: 4px;
  padding-bottom: 4px;
`;

export const StyleName = styled.h3`
  font-family: 'Montserrat', sans-serif;
  grid-column: 1 / span 4;
`;

export const StyleContainer = styled.div`
`;

export const Style = styled.img`
  border-radius: 50%;
  width: 75px;
  height: 75px;
`;

export const Checkmark = styled.i`
  position: relative;
  top: 60px;
  font-size: 42px;
  color: green;
  z-index: ${({selected}) => !selected ? '-1' : null}
`;

export const CartManagement = styled.div`
`;

export const SizeSelect = styled.select`
  border-radius: 5px;
  font-size: 18px;
  height: 28px;
  width: 200px;
`;

export const QtySelect = styled.select`
  border-radius: 5px;
  font-size: 18px;
  height: 28px;
  margin: 5px;
  width: 100px;
`;

export const Option = styled.option`
  text-align: center;
`;

export const AddToCart = styled.button`
  border: 1px solid #d3d9d9;
  border-radius: 5px;
  width: fit-content;
  margin-right: 8px;
  padding: 5px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 22%) 2px 2px 4px;
  transition: all .5s ease;
  font-family: sans-serif;
  :hover {
    border: 1px solid #CEF1D5;
    color: #6B636B;
    box-shadow: none;
    transition: all .5s ease;
  }

  :active {
    transform: translateY(2px)
  }
`;

export const PointlessButton = styled.button`
  border: 1px solid #d3d9d9;
  border-radius: 5px;
  width: fit-content;
  margin-right: 8px;
  padding: 5px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 22%) 2px 2px 4px;
  transition: all .5s ease;
  font-family: sans-serif;

  :hover {
    border: 1px solid #CEF1D5;
    color: #6B636B;
    box-shadow: none;
    transition: all .5s ease;
  }

  :active {
    transform: translateY(2px)
  }
`;

export const ProductDescription = styled.div`
  display: block;
`;

export const Features = styled.div`
`;

export const FeaturesHeader = styled.h3`
  font-family: 'Montserrat', sans-serif;
  margin: 10px auto;
`;

export const FeaturesItem = styled.li`
  list-style-type: none;
  margin: 2px;
`;

export const Slogan = styled.h3`
  font-family: 'Montserrat', sans-serif;
  background-color:
  font-style: italic;
`;

export const Description = styled.p`
`;

export const Socials = styled.div`
`;

export const Twitter = styled.button`
  border: 1px solid #d3d9d9;
  border-radius: 5px;
  width: fit-content;
  margin-right: 8px;
  padding: 5px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 22%) 2px 2px 4px;
  transition: all .5s ease;
  font-family: sans-serif;
  :hover {
    border: 1px solid #CEF1D5;
    color: #6B636B;
    box-shadow: none;
    transition: all .5s ease;
  }

  &:active {
    transform: translateY(2px)
  }
`;

export const Pinterest = styled.button`
  border: 1px solid #d3d9d9;
  border-radius: 5px;
  width: fit-content;
  margin-right: 8px;
  padding: 5px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 22%) 2px 2px 4px;
  transition: all .5s ease;
  font-family: sans-serif;

  :hover {
    border: 1px solid #CEF1D5;
    color: #6B636B;
    box-shadow: none;
    transition: all .5s ease;
  }

  :active {
    transform: translateY(2px)
  }
`;

export const Facebook = styled.button`
  border: 1px solid #d3d9d9;
  border-radius: 5px;
  width: fit-content;
  margin-right: 8px;
  padding: 5px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 22%) 2px 2px 4px;
  transition: all .5s ease;
  font-family: sans-serif;

  :hover {
    border: 1px solid #CEF1D5;
    color: #6B636B;
    box-shadow: none;
    transition: all .5s ease;
  }

  :active {
    transform: translateY(2px)
  }
`;

export const Border = styled.hr`
  bottom: 0px;
  border: 0;
  color: black;
  grid-column-start: 1;
  grid-column-end: 3;
  height: 2px;
  position: relative;
  width: 100%;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
`;
