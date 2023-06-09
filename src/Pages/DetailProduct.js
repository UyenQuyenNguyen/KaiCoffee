import Header from "../Component/Header"
import Footer from "../Component/Footer"
import BeforeHeader from "../Component/BeforeHeader"
import SingleProduct from "../Component/DetailProduct/DetailProduct"

const DetailProduct = () => {
    return (
        <div>
            <BeforeHeader />
            <Header />
            <SingleProduct />
            <Footer />
        </div>
    )
}

export default DetailProduct