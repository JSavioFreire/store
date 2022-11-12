import { EachItem,EachImg,EachDiv } from "./styledHeader"

const EachItemCart = ({img,title}) => {
  return (
    <EachItem>
        <EachImg src={img}/>
        <EachDiv>{title}</EachDiv>
    </EachItem>
  )
}

export default EachItemCart