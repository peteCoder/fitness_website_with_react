import React from 'react';
import {
  Box,   
  Details, 
  Image, 
  SocialIcons
} from './TeamThumb.styles';

export function TeamThumb({children, ...restProps}) {

  return (
      <Box {...restProps}>
        {children}
      </Box>
  );

}

// Using Compound Components here: 

TeamThumb.Details = ({children, ...restProps}) => <Details {...restProps}>{children}</Details>;

TeamThumb.Image = ({children, ...restProps}) => <Image {...restProps}>{children}</Image>;

TeamThumb.SocialIcons = ({children, ...restProps}) => <SocialIcons {...restProps}>{children}</SocialIcons>;



const Team = ({
  name, 
  position,
  facebook, 
  instagram, 
  dribbble, 
  linkedin, 
  image
}) => (
  <TeamThumb>
    <TeamThumb.Image>
      <img src={image} alt='team-member'/>
    </TeamThumb.Image>

    <TeamThumb.Details>
      <span>{position}</span>
      <h3>{name}</h3>
    </TeamThumb.Details>
    
    <TeamThumb.SocialIcons>
      {
        facebook && <a href={facebook}><i className='fab fa-facebook-f'></i></a>
      }
      {
        instagram && <a href={instagram}><i className='fab fa-instagram'></i></a>
      }
      {
        dribbble && <a href={dribbble}><i className='fab fa-dribbble'></i></a>
      }
      {
        linkedin && <a href={linkedin}><i className='fab fa-linkedin'></i></a>
      }
    </TeamThumb.SocialIcons>
  </TeamThumb>
);


export default Team;