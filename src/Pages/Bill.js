import Header from "../Component/Header"
import Footer from "../Component/Footer"
import BillToPay from "../Component/Bill/BillToPay"
import BeforeHeader from "../Component/BeforeHeader"

const Bill = () => {
    return (
        <div>
            <BeforeHeader/>
            <Header />
            <BillToPay/>
            <Footer />
        </div>
    )
}

export default Bill