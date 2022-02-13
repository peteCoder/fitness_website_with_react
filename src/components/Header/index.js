import React from 'react';
import { Container, Logo, Inner, Link, MenuBar, Nav, Span, Wrapper } from './Header.styles';



export default function Header({children, ...restProps}) {

  return (
    <Inner {...restProps}>
      {children}
    </Inner>
      
  );

}


Header.Container = ({children, ...restProps}) => <Container {...restProps}>{children}</Container>;
Header.Logo = ({children, ...restProps}) => <Logo {...restProps}>{children}</Logo>;

Header.Wrapper = ({children, ...restProps}) => <Wrapper {...restProps}>{children}</Wrapper>;

Header.Link = ({children, ...restProps}) => <Link {...restProps}>{children}</Link>;

Header.Span = ({children, ...restProps}) => <Span {...restProps}>{children}</Span>;

Header.Nav = ({children, ...restProps}) => <Nav {...restProps}>{children}</Nav>;

Header.MenuBar = ({children, ...restProps}) => <MenuBar {...restProps}>{children}</MenuBar>;





