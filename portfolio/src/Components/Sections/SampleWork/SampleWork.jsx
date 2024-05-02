import Carousel from "../../Carousel"
import FullWidthGrid from '../../FullWidthGrid';
import TextCard from "../../TextCard/TextCard";

import puli_ingame_1 from './Assets/puli_ingame_1.png'
import puli_editor_1 from './Assets/puli_editor_1.png'
import pointcloud from './Assets/pointcloud_unity.png'
import constructopia from './Assets/constructopia_building.png'

const SampleWork=()=>{

    const slides=[
        {src:puli_ingame_1, title: 'Top Down Shooter',description: 'A game with a historical hungarian theme currently in development. I made a few in-editor tools in Godot for this game, about which you can read later down the document.'},
        {src:puli_editor_1, title: 'Rigged & Animated Enemy',description: 'A fully rigged & animated enemy for my topdown shooter game. A nested state machine controls it\'s AI logic during gameplay.'},
        {src:pointcloud, title: 'Point Cloud Visualizer',description: 'A Point-Cloud visualizer software made entirely in Unity, able to play back movement recorded with motion capture software. This software was the subject of my batchelor\'s degree work in university.'},
        {src:constructopia, title: 'FPS Tower Defense Builder Sandbox',description: 'My first serious try at Godot development. A sandbox tower defense game where you can build and even design your own turrets. It has a steam page by the name of Constructopia, although development is halted.'}
    ]

    return (
    <FullWidthGrid item  xs={12}>
        <TextCard title={'Sample Work (Teaser)'}
        footNote={
            <>
                <div style={{fontWeight:'bolder',fontSize:'1.5em'}}>
                    {'Click on the images for description'}
                </div>
                <div>
                    {'Everything seen in the following screenshots is exclusively my own work (Yes, even the 3D modeling).'}
                </div>
            </>
        }>
            <Carousel slides={slides}/>
        </TextCard>
    </FullWidthGrid>
)
}

export default SampleWork