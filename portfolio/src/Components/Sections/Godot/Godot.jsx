import TextCard from "../../TextCard/TextCard"
import FullWidthGrid from '../../FullWidthGrid';

import Carousel from "../../Carousel";

const Godot=()=>{

    return(
        <FullWidthGrid item  xs={12}>
        <TextCard id={'godot'} small title={'Experience with Godot Engine'} content={
            <>
            <div>{`Around 2-3 years ago I decided to give the Godot engine a go, attracted by it's open source nature. Ever since, I've been using it daily, developing small projects and two larger games, one of which is still actively in development.`}</div>
            <br></br>
            <div>{`Becuase of the large nature of these two games, I learnt the importance of in-engine tools, made to help development. I've made quite a few myself, which I will focus on in this segment, given that the job description is for asset / tool creation.`}</div>
            </>
        }>
        </TextCard>
    </FullWidthGrid>)
}

export default Godot