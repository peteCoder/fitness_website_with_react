import React from "react";
import CardContainer from "../components/Card";
import { SubHeading, Heading, BoxContainer, Section } from "./ContainerStyles";


const MyCardContainer = ({heading, subHeading, Data}) => (
    <Section id="courses" className="courses container">
        <SubHeading>{subHeading}</SubHeading>
        <Heading>{heading}</Heading>
        
        <BoxContainer >
            {
                Data.map((item, index) => (
                    <CardContainer key={index}
                        image={item.image} 
                        title={item.title} 
                        days={item.days} 
                        hours={item.minutes}
                        author={item.author}
                    />
                ))
            }
        
        </BoxContainer>
    </Section>

);

export default MyCardContainer;






