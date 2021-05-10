const Contact = () => {
    return (
        <>
        <div className="contact-title">
            <h1></h1>
        </div>
        <div className="bg-img">
            <form className="contact-container">
                <div className="title">
                <h1>How can we help you?</h1>
                </div>
                <div className="form">
                <input type="text" placeholder="Name" />
                <input type="email"  placeholder="Email"/>
                </div>
                <div className="message">
                    <textarea name="message" id="message" cols="100" rows="7" placeholder="Message"></textarea>
                    </div>
                <div className="ctc-btn">
                <button>Get In Touch</button>
                </div>
            </form>
        </div>
        </>
    );
}

export default Contact;