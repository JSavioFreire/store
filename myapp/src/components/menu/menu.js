import { MenuAll,EachMenu } from "./styleMenu"
import { Eighty } from "../../provider/styleGlobal/styleGlobal"

export default function Menu(){

    return(
        <MenuAll>
            <Eighty>
                <EachMenu>Início</EachMenu>
                <EachMenu>Pokemon</EachMenu>
                <EachMenu>Naruto</EachMenu>
                <EachMenu>Disney</EachMenu>
                <EachMenu>Cartoons</EachMenu>
                <EachMenu>Animes</EachMenu>
            </Eighty>
        </MenuAll>
    )
}