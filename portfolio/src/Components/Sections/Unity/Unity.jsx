import TextCard from "../../TextCard/TextCard"
import FullWidthGrid from '../../FullWidthGrid';

import cloud_a from './Assets/pointcloud_a.png'
import cloud_b from './Assets/pointcloud_b.png'
import cloud_c from './Assets/pointcloud_c.png'
import Carousel from "../../Carousel";

const Unity=()=>{

    const slides=[
        {src:cloud_a, title: 'Visualization of cloud data',description: 'The software would take .csv exports of a motion capture software and visualize it\s contents in 3D space. For this example, a random cloud was generated for copyright reasons.'},
        {src:cloud_b, title: 'Filtering & Highlights',description: 'Different filter parameters were configurable to highlight certain areas of interest in the cloud.'},
        {src:cloud_c, title: 'Motion Replayability',description: 'In this image, my colleague drew a heart in the air with a two-pronged motion capture wand. Pressing the play button would replay this action in 3D space. A GIF maybe would have been better here. Oh well :)'},
    ]


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
       <Carousel slides={slides}/>
        </TextCard>
    </FullWidthGrid>)
}

export default Unity