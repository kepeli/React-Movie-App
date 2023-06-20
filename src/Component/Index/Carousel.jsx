import { Zoom } from 'react-slideshow-image';
import Cards from './Cards';
import 'react-slideshow-image/dist/styles.css';

export default function Carousel({data, setData, search, setSearch}) {

    
    const images = [
        "Images/desktop-1600x900.jpg",
        "Images/Henry_Cavill_Batman_v_Superman-Movie_High_Quality_Wallpaper_1366x768.jpg",
        "Images/game-of-thrones-1-1920x1080.webp",
    ];

    return (
        <>
            <Zoom scale={1.4} indicators={true}>
                {images.map((each, index) => (
                    <div key={index} style={{ width: "100%" }}>
                        <img style={{ objectFit: "cover", width: "100%", height:"90vh" }} alt="Slide Image" src={each} />
                    </div>
                ))}
            </Zoom>
            <Cards data={data} setData={setData} search={search} setSearch={setSearch} />
        </>
    );
}

