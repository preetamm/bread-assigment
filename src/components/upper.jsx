import React from 'react';
import NavItem from './shared/nav-item';


const Upper = () => {
    return (
        <section className="upper vw-100 vh-80 bg-primary text-white position-relative">
            <div className="nav-bar w-100 h-40 d-flex px-4 py-2 align-items-center ">
                <NavItem className="me-auto">bre.ad/Jane</NavItem>
                <NavItem className="">Offerings</NavItem>
                <NavItem className="">Other links</NavItem>
                <NavItem className="">Testimonials</NavItem>
                <NavItem className="">Portfolio</NavItem>
                <NavItem className="">Contact me</NavItem>
                <NavItem className="">
                    <div className="border border-white rounded-pill px-4 d-flex align-items-center">
                        Book trial
                    </div>
                </NavItem>
            </div>
            <div className="title position-absolute fs-1 ">
               Start your day with the goodness of Yoga
            </div>
        </section>
    );
}

export default Upper;
