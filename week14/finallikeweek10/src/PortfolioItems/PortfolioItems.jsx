import lineBoilImg from "../assets/bayleelehmannlineboil_3.gif";
// import "../contact/contact.html";
// import "../about/about.html";
import "./PortfolioItems.css";
export default function PortfolioItems() {
    return (
        <div className="portfolioitems">
            <div className="lineBoilImg">
            <img src={lineBoilImg} alt="Baylee's items"/>
            </div>
            <div className="topnav">
             <a className="active" href="#home">Home</a>
             <a href="../about/about.html">About</a>
             <a href="../contact/contact.html">Contact</a>
             <a href="https://www.linkedin.com/in/baylee-lehmann-194bb311/">LinkedIn</a>
             </div>
        </div>
    )
}