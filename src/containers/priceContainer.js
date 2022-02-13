import React from "react";
import { PriceCardContainer } from "../components/PriceCard";
import data from '../JsonData/Prices.json';

import { SubHeading, Heading, BoxContainer, Section } from "./ContainerStyles";


export default function AllPricesContainer({subHeading, heading}){
    return(
        <Section className="container" id="pricing">
            <SubHeading>{subHeading}</SubHeading>
            <Heading>{heading}</Heading>

            <BoxContainer>
                {
                    data.map((item) => (
                        <PriceCardContainer
                            key={item.id}
                            name={item.name}
                            amount={item.amount}
                            approvedTraining={item.approvedTraining}
                        />
                    ))
                }
            </BoxContainer>
        </Section>  
    )
}










