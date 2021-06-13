import React from 'react';
import './under_construction.css';

import Img from '../images/construction_truck_right.png';
import ImgTwo from '../images/compressed_dump_truck.png';


function under_construction(props) {
    return (
        <>
            <div class='construction_title'>
                <h1>Under Construction</h1>
            </div>
            <div class="construction_container">
                {/* <img class="construction_image" src="https://www.clipartkey.com/mpngs/m/172-1727738_construction-trucks-svg-files-example-image-clip-art.png"/> */}
                {/* <img class="construction_image" src="https:/S/www.vhv.rs/dpng/d/560-5601180_construction-vehicle-clipart-png-construction-truck-png-transparent.png"/> */}
                {/* <img class="construction_image" src="https://www.jing.fm/clipimg/detail/126-1268486_truck-clipart-dump-truck-transparent-background-truck-clipart.png"/> */}
                {/* <img class="construction_image" src="/components/images/compressed_dump_truck.png"/> */}
                <div class="driving_space">
                <img class="construction_image" src={Img}/>

                </div>
                {/* <img class="construction_image" src={Img}/> */}
            </div>
            <div class="road"></div>
            <div class="yellow_lines"></div>
            <div class="road_lines"></div>
            
            {/* <img class="construction_image second" src={ImgTwo}/> */}
            <div class="new_road">
                <div class="infinite">

                </div>
            </div>
            <div class="driving_space">

             <img class="construction_image second" src={ImgTwo}/>
            </div>
       


        </>
          );
}

export default under_construction;