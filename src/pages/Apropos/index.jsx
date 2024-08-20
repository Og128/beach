import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"
// import DropDown from "../../components/Dropdown";
import './styles.scss'
// import Cards from "../../components/Card";
import Parti from "../../components/Parti"
import olivier from "../../assets/Olivier.jpg"
import lois from "../../assets/Lois.jpg"
import yuki from "../../assets/Yuki.jpg"
import yeon from "../../assets/yeon.jpg"
import alban from "../../assets/Alban.jpg"

function About() {
    return (
        <>
            <div className="main">
                <Header />
                <Banner />
                <h1 className="title-parti">In Construction</h1>
                <div className="container-dropdown">
                    <Parti 
                    cover ={olivier}
                    title="Olivier"
                    role="Chief Executive Officer and Project Management Officer" />
                    <Parti 
                    cover ={lois}
                    title="Lois"
                    role="Head of hiking and bird watching " />
                    <Parti 
                    cover ={yuki}
                    title="Yuki"
                    role="Chief Financial Officer and bird watching assistant" />
                    <Parti 
                    cover ={alban}
                    title="Alban"
                    role="Personal Transportation Specialist" />
                    <Parti 
                    cover ={yeon}
                    title="Yeongji"
                    role="Chief Enthusiasm Officer and Whoaaa Ambassador" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;