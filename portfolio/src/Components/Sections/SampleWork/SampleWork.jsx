import Carousel from "../../Carousel"
import FullWidthGrid from '../../FullWidthGrid';
import TextCard from "../../TextCard/TextCard";

import puli_ingame_1 from './Assets/puli_ingame_1.png'

const SampleWork=()=>{
    return (
    <FullWidthGrid>
        <TextCard title={'Sample Work (Teaser)'}>
            <Carousel slides={[puli_ingame_1,puli_ingame_1,puli_ingame_1,puli_ingame_1]}/>
        </TextCard>
    </FullWidthGrid>
)
}

export default SampleWork