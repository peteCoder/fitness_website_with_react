import React from "react";
import { SubHeading, Heading, BoxContainer, Section } from "./ContainerStyles";
import data from '../JsonData/Team.json';
import {Team} from "../components";

const TeamContainer = ({heading, subHeading}) => {
    return (
        <Section className="container" id="team">

            <SubHeading>{subHeading}</SubHeading>
            <Heading>{heading}</Heading>

            <BoxContainer>
                {
                    data.map((team, i) => (
                        <Team 
                            key={i}
                            name={team.name}
                            position={team.position}
                            facebook={team.facebook}
                            instagram={team.instagram}
                            dribbble={team.dribbble}
                            linkedin={team.linkedin}
                            image={team.image}
                        />
                    ))
                }
            </BoxContainer>
        </Section>
    )
}


export default TeamContainer;


















