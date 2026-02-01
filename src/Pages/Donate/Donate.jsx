import React from 'react'
import { assets } from '../../assets/assets'
import './Donate.css';
import Footer from '../../Components/Footer/Footer';

const Donate = () => {

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert("Copied to clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            });
    };


    return (
        <div className='donate'>
            
            <div className="hero-section">
                <img src={assets.p4} alt="Donate Hero" className="hero-image" />
                <div className="hero-text">DONATE</div>
            </div>

            <section id="donation-section">
                <h2>HELP US IN SERVING CHILDRENS</h2>
                <div className="table-container">
                    <table className="donation-table">
                        <tbody>
                            <tr>
                                <td>I would like to support for :</td>
                                <td>Breakfast</td>
                                <td>₹1,500</td>
                            </tr>
                            <tr>
                                <td>I would like to support for :</td>
                                <td>Lunch</td>
                                <td>₹3,000</td>
                            </tr>
                            <tr>
                                <td>I would like to support for :</td>
                                <td>Dinner</td>
                                <td>₹5,000</td>
                            </tr>
                            <tr>
                                <td>I would like to support for :</td>
                                <td>Full Day</td>
                                <td>₹7,000</td>
                            </tr>       
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="gallery-section">
                <div className="gallery-container">
                    <img src={assets.d1} />
                    <img src={assets.d2} />
                </div>
            </section>

            <section className="payment-section">
                <h2>OTHER PAYMENT OPTIONS</h2>

                <div className="payment-grid">

                    <div className="payment-box">
                        <div className="payment-title">Donate Through (NEFT/RTGS)</div>
                        <p><strong>Bank Name :</strong> BOI Bank <button className="copy-btn" onClick={() => handleCopy("BOI Bank")}>Copy</button></p>
                        <p><strong>A/c Name :</strong> Girija Foundation <button className="copy-btn" onClick={() => handleCopy("Girija Foundation")}>Copy</button></p>
                        <p><strong>A/c No. :</strong> 123120110000194 <button className="copy-btn" onClick={() => handleCopy("123120110000194")}>Copy</button></p>
                        <p><strong>IFSC Code :</strong> BKID0001231 <button className="copy-btn" onClick={() => handleCopy("BKID0001231")}>Copy</button></p>
                    </div>

                    <div className="payment-box">
                        <div className="payment-title">Donate Through GPay</div>
                        <p><strong>UPI ID :</strong> boim-123190910194@boi<button className="copy-btn" onClick={() => handleCopy("boim-123190910194@boi")} >Copy</button></p>

                        <div className="gpay-flex">
                            <img src={assets.boii} alt="boi logo" className="gpaylogo" />
                            <img src={assets.qrnew} alt="boi QR Code" className="qr-image" />
                        </div>
                    </div>
                    {/* 
                    <div className="payment-box">
                        <div className="payment-title">Donate Through Other UPI</div>
                        <img src={assets.upi} alt="UPI Logo" className="upi-image" onClick={handleUPIClick} style={{ cursor: 'pointer' }} />
                    </div> */}

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Donate
