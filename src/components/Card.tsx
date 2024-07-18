import { Background } from "./cardElements/Background.styled"
import { Button } from "./cardElements/Button.styled"
import { ButtonsBlock } from "./cardElements/ButtonsBlock.styled"
import { Content } from "./cardElements/Content.styled"
import { Headline } from "./cardElements/Headline.styled"
import { Image } from "./cardElements/Image.stuled"
import desertImg from "../imgs/desert.jpg"

export const Card = () => {
    return (
        <Background>
            <Image src={desertImg}></Image>
            <Headline>Headline</Headline>
            <Content>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Content>
            <ButtonsBlock>
                <Button primary>See more</Button>
                <Button outlined>Save</Button>
            </ButtonsBlock>
        </Background>
    )
}