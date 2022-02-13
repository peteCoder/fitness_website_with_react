import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";




const FooterBox = () => {
    return (
        <Footer>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Title>quick links</Footer.Title>
                    <Footer.Item>

                        <Footer.Link href="#home">
                            <Footer.Icon className="fas fa-angle-right"></Footer.Icon>home
                        </Footer.Link>

                        <Footer.Link href="#about">
                            <Footer.Icon className="fas fa-angle-right"></Footer.Icon>about
                        </Footer.Link>

                        <Footer.Link href="#courses">
                            <Footer.Icon className="fas fa-angle-right"></Footer.Icon>courses
                        </Footer.Link>

                        <Footer.Link href="#pricing">
                            <Footer.Icon className="fas fa-angle-right"></Footer.Icon>pricing
                        </Footer.Link>

                        <Footer.Link href="#team">
                            <Footer.Icon className="fas fa-angle-right"></Footer.Icon>team
                        </Footer.Link>

                        <Footer.Link href="#blog">
                            <Footer.Icon className="fas fa-angle-right"></Footer.Icon>blog
                        </Footer.Link>

                    </Footer.Item>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>contact info</Footer.Title>
                    <Footer.Item>
                        <Footer.Link href="">
                            <Footer.Icon className="fas fa-phone"></Footer.Icon>
                            <Footer.Text>
                            +2348167930376
                            </Footer.Text>
                            
                        </Footer.Link>
                        <Footer.Link href="">
                            <Footer.Icon className="fas fa-phone"></Footer.Icon>
                            <Footer.Text>
                            +2349011662253
                            </Footer.Text>
                            
                        </Footer.Link>

                        <Footer.Link  href="">
                            <Footer.Icon className="fa fa-angle-right"></Footer.Icon>
                            <Footer.Text>
                            30, Ogiso street, off Murtala Mohammed way, Benin city, Nigeria.

                            </Footer.Text>
                        </Footer.Link>


                        <Footer.Link  href="">
                            <Footer.Icon className="fa fa-angle-right"></Footer.Icon>
                            <Footer.Text>
                            talk2peteresezobor@gmail.com

                            </Footer.Text>
                        </Footer.Link>
                    </Footer.Item>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>follow us</Footer.Title>
                    <Footer.Item>
                        <Footer.Link  href="">
                            <Footer.Icon className="fab fa-facebook"></Footer.Icon>
                        </Footer.Link>
                        <Footer.Link  href="">
                            <Footer.Icon className="fab fa-instagram"></Footer.Icon>
                        </Footer.Link>
                        <Footer.Link  href="">
                            <Footer.Icon className="fab fa-youtube"></Footer.Icon>
                        </Footer.Link>
                        <Footer.Link  href="">
                            <Footer.Icon className="fab fa-linkedin"></Footer.Icon>
                        </Footer.Link>
                    </Footer.Item>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>newsletter</Footer.Title>

                    <Footer.Form>
                        <div>
                        <Footer.Input placeholder="Email" type="email" />
                            
                        </div>
                        <Button href="">Apply</Button>
                    </Footer.Form>

                </Footer.Column>
            </Footer.Row>
        </Footer>
    )
} 


export default FooterBox;










































































