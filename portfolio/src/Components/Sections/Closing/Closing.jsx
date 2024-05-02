import TextCard from "../../TextCard/TextCard"
import FullWidthGrid from '../../FullWidthGrid';

const Closing=()=>{
    return(
        <FullWidthGrid item  xs={12}>
        <TextCard small title={'Why choose me?'} id={'closing'} content={
            <>
            <div>{`Since, as I understand, this job focuses on tool development for game dev, I focused exclusively on a few in-editor tools I made for Godot.`}</div>
            <br></br>
            <div>{`However, as you can hopefully see from the provided material, I am confident in my ability and knowledge regarding game engines. Since I can't prove my technical skills in a simple portfolio, I sincerely hope you give me a chance in the form of an interview. As for my motivation, believe me, it is sky high when it comes to this sort of job, and I am looking forward to hearing from you.`}</div>
            </>
        }>
        </TextCard>
    </FullWidthGrid>
    )
}

export default Closing