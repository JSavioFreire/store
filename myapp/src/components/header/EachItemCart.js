import { EachItem,EachImg,EachDiv,EachDivTitle,EachDivPrice } from "./styledHeader"

const EachItemCart = ({img,title,price}) => {
  return (
    <EachItem>
        <EachImg src={img}/>
        <EachDiv>
            <EachDivTitle>{title}</EachDivTitle>
            <EachDivPrice>R$ {price}</EachDivPrice>
        </EachDiv>
    </EachItem>
  )
}

export default EachItemCart