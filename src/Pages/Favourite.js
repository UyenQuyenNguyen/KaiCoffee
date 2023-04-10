import Header from "../Component/Header"
import Footer from "../Component/Footer"
import Favo from "../Component/Favourite/Favo"
import BeforeHeader from "../Component/BeforeHeader"
import SingleProduct from "../Component/DetailProduct/DetailProduct"
const Favourite = () =>{
    return (
        <div>
            <BeforeHeader/>
            <Header/>
            <Favo/>
            <Footer/>
        </div>
    )
}

export default Favourite