import Header from "../Component/Header"
import Footer from "../Component/Footer"
import User from "../Component/User/User"
import BeforeHeader from "../Component/BeforeHeader"

const InforUser = () => {
    return (
        <div>
            <BeforeHeader/>
            <Header />
            <User/>
            <Footer />
        </div>
    )
}

export default InforUser