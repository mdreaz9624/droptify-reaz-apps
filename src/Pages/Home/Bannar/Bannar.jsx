
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import ban1 from "../../../assets/banner1.png";
import ban2 from "../../../assets/banner2.png";
import ban3 from "../../../assets/banner3.png";

const Bannar = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} dynamicHeight={false}>
            <div>
                <img src={ban1}/>
                
            </div>
            <div>
                <img src={ban2} />
              
            </div>
            <div>
                <img src={ban3} />
                
            </div>
        </Carousel>
    );
}

export default Bannar;