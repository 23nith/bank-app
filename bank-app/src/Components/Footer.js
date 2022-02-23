

const Footer = ({pattern8}) => {
    return (
        <div className="footer">
            <div className="footer" style={{backgroundImage: `url(${pattern8})`,
            backgroundRepeat: "repeat",
            backgroundSize: "15%",
            opacity: 0.5,
            top: 0, textAlign: "center"}}>
                {/* All rights reserved */}
            </div>
        </div>
    )
}

export default Footer;