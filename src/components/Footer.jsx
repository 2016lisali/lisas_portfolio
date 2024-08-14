import React from "react";

const Footer = () => {
    const curYear = new Date().getFullYear();
    return (
        <div className="border border-top small text-center text-secondary py-2">
            <p className="my-0">© {curYear} Lisa Li. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;
