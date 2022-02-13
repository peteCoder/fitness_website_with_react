import React, {useState} from "react";

import Header from "../components/Header";


const HeaderContainer = () => {
    const [navState, setNavState] = useState(false);

    return (
        <Header className='header fixed-top' id='header'>
            <Header.Container className='container'>
                <Header.Wrapper className='row align-items-center justify-content-between'>
                    <Header.Logo href='#home' className='logo'>BE
                        <Header.Span>FIT</Header.Span>
                    </Header.Logo>
                    <Header.Nav className={navState ? 'nav active' : 'nav'}>
                        <Header.Link onClick={() => setNavState(false)} href='#home'>home</Header.Link>
                        <Header.Link onClick={() => setNavState(false)} href='#about'>about</Header.Link>
                        <Header.Link onClick={() => setNavState(false)} href='#courses'>courses</Header.Link>
                        <Header.Link onClick={() => setNavState(false)} href='#pricing'>pricing</Header.Link>
                        <Header.Link onClick={() => setNavState(false)} href='#team'>team</Header.Link>
                        <Header.Link onClick={() => setNavState(false)} href='#blog'>blog</Header.Link>
                    </Header.Nav>
                    <Header.MenuBar onClick={() => setNavState(prevState => !prevState)} id="menu-btn" className={navState ? "fa fa-times" : "fa fa-bars"}></Header.MenuBar>
                </Header.Wrapper>
            </Header.Container>
        </Header>
    )
}



export default HeaderContainer;







