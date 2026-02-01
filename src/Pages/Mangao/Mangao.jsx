import React from 'react'
import './Mangao.css';
import { assets } from '../../assets/assets';
import Footer from '../../Components/Footer/Footer'


const Mangao = () => {
    return (
        <div>
            <div id="containerr">

                <h4>Memories at Mangaon Aashram</h4>

                <div className="gridd">

                    <div className="cardsss">
                        <img src={assets.m5} alt="Meditation in Nature" />
                       
                    </div>

                    <div className="cardsss">
                        <img src={assets.m6} alt="Temple at Sunset" />
                        
                    </div>

                    <div className="cardsss">
                        <img src={assets.m7} alt="Peaceful Garden" />
                        
                    </div>

                    <div className="cardsss">
                        <img src={assets.m8} alt="Yoga Class" />
                        
                    </div>

                    <div className="cardsss">
                        <img src={assets.m9} alt="Meditation in Nature" />
                        
                    </div>

                    <div className="cardsss">
                        <img src={assets.m10} alt="Temple at Sunset" />
                        
                    </div>

                    <div className="cardsss">
                        <img src={assets.m12} alt="Yoga Class" />
                        
                    </div>

                    <div className="cardsss">
                        <img src={assets.m13} alt="Meditation in Nature" />
                    
                    </div>

                    <div className="cardsss">
                        <img src={assets.m14} alt="Temple at Sunset" />
                    </div>

                    <div className="cardsss">
                        <img src={assets.m4} alt="Peaceful Garden" />
                    </div>

                    <div className="cardsss">
                        <img src={assets.m15} alt="Peaceful Garden" />
                    </div>

                </div>

            </div>

            <Footer/>

        </div>
    )
}

export default Mangao
