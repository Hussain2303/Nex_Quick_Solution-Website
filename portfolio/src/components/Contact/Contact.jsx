import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "./Contact.css";
import useTheme from "../../context/Context";

const Contact = () => {
    const { themeMode } = useTheme();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
    "service_3u9dv0p",
    "template_ko4otbl",
    form.current,
    "H6bDE20apyvkqaWdZ"
).then(
    (result) => {
        console.log("SUCCESS!", result.text);
        toast.success("Message sent successfully!");
    },
    (error) => {
        console.error("FAILED...", error.text || error);
        toast.error("Failed to send message. Please try again.");
    }
);
    };

    return (
        <div className="contact-form" id="contact">
            <div className="c-left" data-aos="slide-right">
                <span id="heading" style={{ color: themeMode === "dark" ? "white" : "" }}>
                    Get in Touch
                </span>
                <span style={{ color: themeMode === "dark" ? "#00FFFF" : "" }}>Contact Us</span>
                <div className="blur1 s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="c-right" data-aos="fade-in">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" className="user" placeholder="Name" required />
                    <input type="email" name="email" className="user" placeholder="Email" required />
                    <textarea name="message" className="user" placeholder="Message" required></textarea>
                    <input type="submit" value="Send" className="btn" />
                    <span></span>
                    <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
