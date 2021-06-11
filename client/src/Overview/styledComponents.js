import styled from 'styled-components';

export const Overview = styled.div`
  text-align: center;
  margin: auto;
  width: 95%;
`;

// gallery start
// gallery container
export const Gallery = styled.div`
  border-style: inset;
  width: 70%;
  position: relative;
  top: 10px;
  left: 10px;
  height: 850px;
  object-fit: fill;
`;

// main img
export const MainImage = styled.img`
  display: block;
  margin: 4vh auto;
  border-style: ridge;
  height: 90%;
`;

export const LeftArrow = styled.img`
  position: absolute;
  top: 320px;
  left: 300px;
  z-index: 1;
`;

export const RightArrow = styled.img`
  position: absolute;
  top: 320px;
  right: 177px;
  z-index: 1;
`;

// thumbnails container
export const Thumbnails = styled.div`
  border-style: double;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -3px;
  left: -3px;
  height: 100%;
`;

// thumbnail img
export const GalleryThumbnail = styled.img`
  // border-style: double;
  height: 14.2%;
  // padding: 4px;
`;
// gallery end

// product info start
export const ProductInfo = styled.div`
  border-style: outset;
  width: 28%;
  position: absolute;
  top: 36px;
  right: 19px;
`;
// product info end


// style selector start
export const StyleSelector = styled.div`
  border-style: outset;
  width: 28%;
  position: absolute;
  top: 128px;
  right: 19px;
`;

export const StyleName = styled.h3`
  width: 100%;
`;

export const Style = styled.img`
  border-radius: 50%;
  width: 15%;
`;
// style selector end

// cart management start
export const CartManagement = styled.div`
  border-style: outset;
  width: 28%;
  position: absolute;
  top: 338px;
  right: 18px;
`;

export const SizeSelect = styled.select`
  width: 200px;
`;

export const QtySelect = styled.select`
  width: 100px;
`;

export const Option = styled.option`
  text-align: center;
`;

export const AddToCart = styled.button`
  border-style: solid;
  border-radius: 5%;
  display: block;
  margin: 4px auto;
`;

export const PointlessButton = styled.button`
  border-style: solid;
  border-radius: 5%;
  display: block;
  margin: 4px auto;
`;
// cart management end

// product description start
export const ProductDescription = styled.div`
  border-style: outset;
  position: absolute;
  top: 426px;
  right: 18px;
  width: 28%;
  display: block;
`;

export const Features = styled.div`
`;

export const FeaturesHeader = styled.h3`
  margin: 10px auto;
`;

export const FeaturesItem = styled.li`
  list-style-type: none;
`;

export const Slogan = styled.h3`
  font-style: italic;
`;

export const Description = styled.p`
`;

export const Socials = styled.h3`
  border-style: inset;
`;
// product description end