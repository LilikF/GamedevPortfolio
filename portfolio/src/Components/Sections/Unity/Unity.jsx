import TextCard from "../../TextCard/TextCard"
import FullWidthGrid from '../../FullWidthGrid';

const Unity=()=>{
    return(
        <FullWidthGrid item  xs={12}>
        <TextCard small title={'Experience in Unity Engine'} content={
            <>
            <div>{`During my years in university, I worked in co-operation with the research center of innovation on the campus.
            One task I was assigned with was to develop a point-cloud data visualizer, which could replay movements
            recorded with a motion capture suit in real time. The software had to be able to display tens of thousands of points in 3D space
            at once. Needless to say, I got my first taste in multimeshing, shaders, and efficient rendering techniques to pull this off.`}</div>
            <br></br>
            <div>{`I eventually wrote my BSc thesis on the subject.`}</div>
            </>
        }>
       
        </TextCard>
    </FullWidthGrid>)
}

export default Unity