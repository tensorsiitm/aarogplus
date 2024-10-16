import logo from '/src/assets/images/aarog-transparent-bg.png'

function Footer() {
    return ( <div className="footer">
        <img src={logo} height={60} />
        <div><a href="https://tensors.in" target="_blank">Developed by Tensors</a></div>
    </div> );
}

export default Footer;