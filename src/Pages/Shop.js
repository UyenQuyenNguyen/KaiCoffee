import BeforeHeader from "../Component/BeforeHeader"
import Header from "../Component/Header"
import Introduce from "../Component/Shop/Introduce.js"
import Product from "../Component/Shop/Product"
import Footer from "../Component/Footer"
const Shop = () =>{
    return(
        <div>
            <BeforeHeader/>
            <Header/>
            <Introduce/>
            <Product/>
            <Footer/>
        </div>
    )

}

export default Shop