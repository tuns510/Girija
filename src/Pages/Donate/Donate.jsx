import React from 'react';
import { assets } from '../../assets/assets';
import './Donate.css';
import Footer from '../../Components/Footer/Footer';

const Donate = () => {
    const upiID = "boim-123190910194@boi";
    const [isProcessing, setIsProcessing] = React.useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => alert("Copied to clipboard!"))
            .catch((err) => console.error("Failed to copy: ", err));
    };

    const handleDonateClick = (amount) => {
        setIsProcessing(true);
        const numericAmount = amount.replace(/[^0-9]/g, '');
        const transactionRef = `GIRIJA${Date.now()}`;

        const upiLink = `upi://pay?pa=${upiID}&pn=GIRIJA%20FOUNDATION&tn=Donation&am=${numericAmount}&cu=INR&tr=${transactionRef}`;

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = upiLink;
        } else {
            alert("Please open this site on a UPI-supported mobile device to complete the donation.");
        }

        setTimeout(() => setIsProcessing(false), 5000);
    };

    const handleUPIClick = () => {
        const baseLink = `upi://pay?pa=${upiID}&pn=GIRIJA%20FOUNDATION&cu=INR&tr=GIRIJA${Date.now()}`;
        window.location.href = baseLink;
    };

    const donationOptions = [
        "₹1,000", "₹3,000", "₹6,000", "₹15,000", "₹30,000",
        "₹60,000", "₹90,000", "₹1,50,000", "₹3,00,000"
    ];

    return (
        <div className='donate'>
            <div className="extra">
                <p>Home &gt; Donate</p>
            </div>

            <div className="hero-section">
                <img src={assets.p4} alt="Donate Hero" className="hero-image" />
                <div className="hero-text">DONATE</div>
            </div>

            <section id="donation-section">
                <h2>HELP US IN SERVING CHILDRENS</h2>
                <div className="table-container">
                    <table className="donation-table">
                        <tbody>
                            {donationOptions.map((amount, idx) => (
                                <tr key={idx}>
                                    <td>I would like to support</td>
                                    <td>{amount}</td>
                                    <td>
                                        <button onClick={() => handleDonateClick(amount)}>DONATE</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="gallery-section">
                <div className="gallery-container">
                    <img src={assets.d1} alt="Gallery 1" />
                    <img src={assets.d2} alt="Gallery 2" />
                </div>
            </section>

            <section className="payment-section">
                <h2>OTHER PAYMENT OPTIONS</h2>

                <div className="payment-grid">
                    <div className="payment-box">
                        <div className="payment-title">Donate Through (NEFT/RTGS)</div>
                        <p><strong>Bank Name :</strong> BOI Bank <button onClick={() => handleCopy("BOI Bank")}>Copy</button></p>
                        <p><strong>A/c Name :</strong> Girija Foundation <button onClick={() => handleCopy("Girija Foundation")}>Copy</button></p>
                        <p><strong>A/c No. :</strong> 123120110000194 <button onClick={() => handleCopy("123120110000194")}>Copy</button></p>
                        <p><strong>IFSC Code :</strong> BKID0001231 <button onClick={() => handleCopy("BKID0001231")}>Copy</button></p>
                    </div>

                    <div className="payment-box">
                        <div className="payment-title">Donate Through UPI</div>
                        <p><strong>UPI ID -</strong> {upiID} <button onClick={() => handleCopy(upiID)}>Copy</button></p>
                        <img src={assets.qr1} alt="UPI QR Code" className="qr-image" />
                        <button className='upi-btn' onClick={handleUPIClick}>Pay via UPI App</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Donate;
