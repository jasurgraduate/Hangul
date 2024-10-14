// Cert.js
import React, { useState } from 'react'; // Import useState to manage user name
import html2canvas from 'html2canvas';
import './Cert.css'; // Import the CSS file
import logo from './wsu.png'; // Import the logo image
import krFlag from './KR.png'; // Import the KR image
import QRCode from './QR.png';

const Cert = ({ score, total, onClose }) => {
    const [userName, setUserName] = useState(''); // State to hold user name
    const [completionDate] = useState(new Date().toLocaleDateString()); // State for completion date
    const [isNameInputVisible, setIsNameInputVisible] = useState(true); // State to control name input visibility

    // Function to determine the grade based on the score
    const getGrade = (score, total) => {
        const percentage = (score / total) * 100;

        if (percentage >= 90) {
            return 'Excellent';
        } else if (percentage >= 75) {
            return 'Good';
        } else if (percentage >= 50) {
            return 'Moderate';
        } else if (percentage > 0) {
            return 'Basic';
        } else {
            return 'Not graded'; // The most terrible result
        }
    };

    const handleDownload = () => {
        const certificate = document.getElementById('certificate');

        // Set the background color to transparent before capturing
        certificate.style.backgroundColor = 'transparent';

        html2canvas(certificate, {
            scale: 2,
            backgroundColor: null // Set backgroundColor to null for transparency
        }).then((canvas) => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'certificate.png';
            link.click();
        });

        // Restore the original background color after downloading
        certificate.style.backgroundColor = ''; // Reset to default
    };

    // Determine the grade based on the score and total
    const grade = getGrade(score, total);

    // Handle user name submission
    const handleNameSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        setIsNameInputVisible(false); // Hide the name input form
    };

    return (
        <div className="cert-container"> {/* Added a container for better layout */}
            {isNameInputVisible ? (
                <div className="input-container"><form onSubmit={handleNameSubmit} className="name-input-form"> {/* Form for user name input */}
                    <label htmlFor="userName" className='text-name'>Please enter your Full Name:<br /></label>
                    <input
                        type="text"
                        className='name-input-cert'
                        id="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                    <button type="submit" className='submit-button'>Submit</button>
                </form></div>
            ) : (
                <div className="certificate" id="certificate">
                    {/* Logo at the top center */}
                    <img src={logo} alt="Logo" className="logo" />

                    <h1 className="title">CERTIFICATE <br /> of Hangul (한글) Quiz</h1>
                    <p className="text">This is to certify that</p>
                    <h2 className="name">{userName || '[User\'s Name]'}</h2> {/* Display user name or placeholder */}
                    <p className="text">has successfully completed the Hangul Quiz Online.</p>
                    <br />
                    <p className="text">Score: <b>{score}/{total}</b></p>

                    {/* Display the grade */}
                    <p className="text">Grade: <b>{grade}</b></p> {/* Added grade display */}

                    {/* Display the date of completion */}
                    <p className="text">Date of Completion: {completionDate}</p> {/* Added date of completion */}

                    {/* KR flag at the bottom center */}
                    <img src={krFlag} alt="KR Flag" className="kr-flag" />


                    {/* Copyright text styled to the bottom of the certificate */}
                    <div className="copy-container">
                        <p className="qr-text">Get Your Hangul Certificate:</p> {/* Added a class to style this text */}
                        <img src={QRCode} alt="QR Code" className="qr-code" />
                    </div>
                </div>
            )}

            <div className="button-container"> {/* Separate button container */}
                {!isNameInputVisible && ( // Only show buttons after name is submitted
                    <>
                        <button onClick={handleDownload} className="button">⬇️ Download Certificate</button>
                        <button onClick={onClose} className="button">❎ Close</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cert;
