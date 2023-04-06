import CartPro from "../Component/Cart/CartPro"
import Header from "../Component/Header"
import Footer from "../Component/Footer"
import BeforeHeader from "../Component/BeforeHeader"

const Cart = () =>{
    return (
        <div>
            <BeforeHeader/>
            <Header/>
            <CartPro/>
            <Footer/>
        </div>
    )
}

export default Cart