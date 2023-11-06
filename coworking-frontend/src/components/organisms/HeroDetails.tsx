import { IMGURL } from "../../utils/types/types";
import { MouseEvent, MouseEventHandler, useState } from "react";

interface Props {
  images: IMGURL[]
}

const HeroDetails = (props: Props) => {
  const [images, setImages] = useState<IMGURL[]>(props.images)

  const handleClick = (i: number): MouseEventHandler<HTMLImageElement> => (e: MouseEvent) => {

    const newImages = [...images]
    const temp = newImages[0]
    newImages[0] = newImages[i]
    newImages[i] = temp
    setImages([...newImages])
  }

  return (
    <section className="heroDetails">
      <div className="mainImage">
        <img src={images[0]} alt="Main image" />
      </div>
      <div className="smallGroup">
        {images.slice(1).map((image, i) => (
          <img className={'item'+String(i+1)} onClick={handleClick(i+1)} key={i} src={image} alt="Image of the cowork, click to swap places with the main image." />
        ))}
      </div>
    </section>
  )
}

export default HeroDetails