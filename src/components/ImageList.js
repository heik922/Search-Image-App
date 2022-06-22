import React from "react";

// only assign the key to ROOT element of the return item

const ImageList = (props) => {
  console.log(props.images);
  const images = props.images.map((image) => (
    <img key={image.id} src={image.urls.regular} alt={image.description}></img>
  ));

  return <div>{images}</div>;
};

export default ImageList;
