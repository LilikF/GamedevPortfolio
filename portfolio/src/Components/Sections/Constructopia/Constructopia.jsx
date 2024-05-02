import TextCard from "../../TextCard/TextCard"
import FullWidthGrid from '../../FullWidthGrid';

import screenshot_a from '../Godot/Assets/screenshot_util_nodes.png'
import screenshot_b from '../Godot/Assets/screenshot_util_output.png'

import Carousel from "../../Carousel";

const Constructopia=()=>{

    const slides=[
        {src:screenshot_a,description: 'The node structure of the screenshot utility tool.'},
        {src:screenshot_b,description: 'The output image of the viewport to which the image is rendered.'},
    ]

    return(
        <FullWidthGrid item  xs={12}>
        <TextCard id={'dynamic-screenshot'} small title={'Constructopia and my in-editor Screenshot Tool'} content={
            <>
            <div>{`During the development of Constructopia, my 3D building game, I faced an annoying problem: I had to provide a thumbnail image for every building block the player could use in the editor.`}</div>
            <br></br>
            <div>{`Screenshotting by hand, editing in an image software and copying each 3D object's thumbnail into it's designated folder got boring very quickly.`}</div>
            <div>{`For this reason, I created a screenshot utility tool for the Godot engine. Step by step, it works like so:`}</div>
            <br></br>
            <div>{`1. The desired object's node gets placed under a 512x512 viewport. The bounding box size of the object determines it's distance from the camera.`}</div>
            <br></br>
            <div>{`2. As the tool's scene is instantiated, a Directional Light illuminates the object, like the flash of a camera.`}</div>
            <br></br>
            <div>{`3. The tool has a Camera3D attached, which renders to the viewport. The viewport's texture is saved to the thumbnails folder.`}</div>
            <br></br>
            <div>{`I created an in-editor button on the editor toolbar, from which I could generate thumbnail images at an instant.`}</div>
            </>
        }>
            <Carousel slides={slides}></Carousel>
        </TextCard>
    </FullWidthGrid>)
}

export default Constructopia