import TextCard from "../../TextCard/TextCard"
import FullWidthGrid from '../../FullWidthGrid';

import screenshot_a from '../Godot/Assets/puli_a.png'
import screenshot_b from '../Godot/Assets/puli_optimizer_output.png'

import map_screenshot_1 from '../Godot/Assets/map_screenshot.png'
import map_screenshot_2 from '../Godot/Assets/map_screenshot_2.png'
import map_screenshot_3 from '../Godot/Assets/map_screenshot_nodes.png'


import Carousel from "../../Carousel";

const Puli=()=>{

    const slides=[
        {src:screenshot_a,description: 'The optimized scene used in the example.'},
        {src:screenshot_b,description: 'The "raw" unorganized level gets placed under the "Input" Node. The organized output nodes are listed below.'},
    ]

    const mapScreenshotSlides=[
        {src:map_screenshot_2,description: 'The scene used in the example.'},
        {src:map_screenshot_1,description: 'The output of the map screenshot tool.'},
        {src:map_screenshot_3,description: "The tool\'s inner node structure."},
    ]

    return(
        <>
        <FullWidthGrid item  xs={12}>
        <TextCard small title={'Puli and the scene optimizer tool'} id={'scene-optimization'} content={
            <>
            <div>{`My currently in-progress top-down shooter game, Puli, allows space for a lot of optimization because of it's fixed top-down camera view.`}</div>
            <div>{`Quick level building is important for me as a solo developer, so I don't want to consciously do the optimization steps during the prototyping of a level.`}</div>
            <br></br>

            <div>{`For this reason, I created an in-editor level optimizer utility tool. Step by step, it works like so:`}</div>
            <br></br>
            <div>{`1. The scene's nodes are iterated over and sorted to become children of Node3D grouping nodes, based on their type.`}</div>
            <br></br>
            <div>{`2. During the analyzation of the scene, optimization measures are taken. For example, if a mesh occures in the scene more than a given amount of times, a MultiMesh is created for faster rendering.`}</div>
            <br></br>
            <div>{`3. This tool organizes the roughly built scene built by the developer (for now, me). Apart from the multimesh example, a ton of other steps are present which would be too numerous to list here.`}</div>
            <br></br>
            <div>{`4. The optimized and organized scene is output into the levels folder in a state ready for release.`}</div>
            </>
        }>
            <Carousel slides={slides}></Carousel>
        </TextCard>
    </FullWidthGrid>
    <FullWidthGrid item  xs={12}>
        <TextCard small title={'The orthogonal level screenshot tool'} id={'orthogonal-screenshot'} content={
            <>
            <div>{`For texturing the game's ground, I wrote a custom shader which uses splatmaps.`}</div>
            <div>{`I can draw in roads, rocks, etc. by creating a 1024x1024 RGB Splatmap. For this however, I need a reference image of the game level to draw over.`}</div>
            <br></br>
            <div>{`For this reason, I created an in-editor orthogonal screenshot tool. It works similarly to the previously mentioned screenshot tool, only in orthogonal mode.`}</div>    
            </>
        }>
            <Carousel slides={mapScreenshotSlides}></Carousel>
        </TextCard>
    </FullWidthGrid>
    </>
    )
}

export default Puli