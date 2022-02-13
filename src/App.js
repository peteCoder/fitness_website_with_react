import React from 'react';
import { 
  CounterContainer, 
  MyCardContainer, 
  HeaderContainer, 
  HeroContainer, 
  AllPricesContainer,
  JoinUsContainer, 
  TeamContainer,
  MyBlogContainer, 
  FooterBox
} from './containers';

import CoursesData from './JsonData/Courses.json';
import BlogData from './JsonData/Blog.json';



const App = () => {
  
  return (
    <>

      <HeaderContainer/>
      <HeroContainer/>
      <CounterContainer/>

      <MyCardContainer
        heading="our popular courses"
        subHeading="our courses"
        Data={CoursesData}
      />

      <AllPricesContainer
        heading="find a perfect plan"
        subHeading="choose a plan"
      />

      <JoinUsContainer/>

      <TeamContainer
        heading="meet the expert team"
        subHeading="our team"
      />

      <MyBlogContainer 
        heading="our daily post"
        subHeading="our blog"
        Data={BlogData}
      />

      <FooterBox/>

    </>
  );
}

export default App;
