import React from 'react'
import './Events.css';
import { assets } from '../../assets/assets';
import Footer from '../../Components/Footer/Footer'


const Events = () => {
    return (
        <div>
            <div className="container">

                <h4>Gallery / Events</h4>

                <div className="grid">

                    <div className="cardss">
                        <img src={assets.christmas} alt="Meditation in Nature" />
                        <div className="card-content">
                            <p>Christmas Celebration at Four Points by Sheraton Hotel.</p>
                        </div>
                    </div>

                    <div className="cardss">
                        <img src={assets.GOI} alt="Temple at Sunset" />
                        <div className="card-content">
                            <p>Creating memories at the Gateway Of India - a day of joy and learning.</p>
                        </div>
                    </div>

                    <div className="cardss">
                        <img src={assets.science} alt="Peaceful Garden" />
                        <div className="card-content">
                            <p>Exploring the wonders of science at Tarangan Science Center.</p>
                        </div>
                    </div>

                    <div className="cardss">
                        <img src={assets.dy} alt="Yoga Class" />
                        <div className="card-content">
                            <p>Grateful to DY Patil for ensuring our children’s well-being through a health checkup camp.</p>
                        </div>
                    </div>

                    <div className="cardss">
                        <img src={assets.fun} alt="Meditation in Nature" />
                        <div className="card-content">
                            <p>When learning gets colorful - hand dye fun.</p>
                        </div>
                    </div>

                    <div className="cardss">
                        <img src={assets.bday} alt="Temple at Sunset" />
                        <div className="card-content">
                            <p>Birthday made extra special by spreading smiles.</p>
                        </div>
                    </div>

                    <div className="cardss">
                        <img src={assets.diwali} alt="Peaceful Garden" />
                        <div className="card-content">
                            <p>Diwali Celebration & Annual day 2k23.</p>
                        </div>
                    </div>

                    <div className="cardss">
                        <img src={assets.wday} alt="Yoga Class" />
                        <div className="card-content">
                            <p>Celebrating the strength of womanhood 💜#WomensDay</p>
                        </div>
                    </div>

                    <div className="cardss">
                        <img src={assets.movie} alt="Meditation in Nature" />
                        <div className="card-content">
                            <p>Watched April May 99 at Orion Mall Panvel, #movietime.</p>
                        </div>
                    </div>

                    <div className="cardss">
                        <img src={assets.dec31} alt="Temple at Sunset" />
                        <div className="card-content">
                            <p>31st December Celebration at the beautiful ambivali.</p>
                        </div>
                    </div>

                    <div className="cardss">
                        <img src={assets.books} alt="Peaceful Garden" />
                        <div className="card-content">
                            <p>Grateful to St. Wilfered's School for the books and snacks at our ashram.</p>
                        </div>
                    </div>

                    <div className="cardss">
                        <img src={assets.eyecheck} alt="Yoga Class" />
                        <div className="card-content">
                            <p>Grateful to MGM Hospital for conducting a free eye checkup camp.</p>
                        </div>
                    </div>

                    <div className="cardss">
                        <img src={assets.toy} alt="Meditation in Nature" />
                        <div className="card-content">
                            <p>Spreading smiles, one toy at a time – toy donations from our kind supporters.</p>
                        </div>
                    </div>

                    <div className="cardss">
                        <img src={assets.masti} alt="Temple at Sunset" />
                        <div className="card-content">
                            <p>Spreading Joy, One Smile at a Time. #mastitime</p>
                        </div>
                    </div>

                    <div className="cardss">
                        <img src={assets.ganesha} alt="Peaceful Garden" />
                        <div className="card-content">
                            <p>Ganesh Chaturthi Celebration
                                With devotion and joy.</p>
                        </div>
                    </div>

                    <div className="cardss">
                        <img src={assets.school} alt="Yoga Class" />
                        <div className="card-content">
                            <p>Ready for School, Ready for the Future.</p>
                        </div>
                    </div>

                </div>

            </div>

            <Footer/>

        </div>
    )
}

export default Events
