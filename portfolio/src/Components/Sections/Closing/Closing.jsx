import TextCard from "../../TextCard/TextCard"
import FullWidthGrid from '../../FullWidthGrid';

const Closing=()=>{
    return(
        <FullWidthGrid item  xs={12}>
        <TextCard small title={'Why choose me?'} id={'closing'} content={
            <>
            <div>{`I am passionate about game development, especially with the Godot engine.`}</div>
            <br></br>
            <div>{`All of the above material is just a sneak-peek into my knowledge in the field. I believe my skills and mindset for developing an optimized, clean and well-structured project with Godot are there, and I hope you give me a shot.`}</div>
            </>
        }>
        </TextCard>
    </FullWidthGrid>
    )
}

export default Closing