import React from 'react'

const ProfileDetail = () => {
    return (
        <div className="profile-detail p-4">
            <div className="profile-pic"></div>
            <div className="profile-bio d-flex flex-column align-items-start mb-2">
                <div className="name">Jane Doe</div>
                <div className="bio text-start">Hi, I am Jane Doe, your next door fitness instructor with just one goal - Make people fit and healthy.Loren ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
                <div className="social-links d-flex me-2 ">
                    
                </div>
            </div>
            <div className="profile-location-language">
                <div className="location">
                    <div className="location-icon"></div>
                    <div className="location-label">Lives In</div>
                    <div className="location-group-container d-flex">
                        <div className="loction-item">New Delhi</div>
                    </div>
                </div>
                <div className="language">
                <div className="language-icon"></div>
                    <div className="language-label">Speaks</div>
                    <div className="language-group-container d-flex">
                        <div className="language-item">English</div>
                        <div className="language-item">Hindi</div>
                        <div className="language-item">Punjabi</div>
                    </div>
                </div>
            </div>
            <div className="profile-testimonial d-flex">
                <div className="testimonial-label-container">
                    <div className="testimonial-lab"></div>
                    <div className="contact-button">Contact <menu type="context"></menu></div>
                </div>
                <div className="testimonial-video-container"></div>
            </div>
            <div className="profile-subscribtion"></div>
        </div>
    )
}

export default ProfileDetail
