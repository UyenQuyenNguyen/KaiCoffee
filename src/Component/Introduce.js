import styled from "styled-components"

const MainIntro = styled.div`
    height: 40vh;
    padding-top: 5rem;
`

const Intro = styled.div`
    height: 100%;
    width: 100%;
    background-image: url('https://kaicoffee.vn/wp-content/uploads/2021/01/tree-mother-00-hero-scaled.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const Introduce = () => {
    return (<MainIntro>
            <Intro/>
        </MainIntro>)
}

export default Introduce;