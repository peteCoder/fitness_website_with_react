import React from "react";
import { Wrapper, Link, Row, Column, Title, Input, Form, Icon, Item, Text } from "./Footer.styles";

export default function Footer({children, ...restProps}){
    return (
        <Wrapper {...restProps}>
            {children}
        </Wrapper>
    )
};


Footer.Link = function FooterLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Footer.Row = function FooterRow({children, ...restProps}) {
    return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColumn({children, ...restProps}) {
    return <Column {...restProps}>{children}</Column>
}

Footer.Title = function FooterTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Footer.Input = function FooterInput({children, ...restProps}) {
    return <Input {...restProps}/>
}
Footer.Form = function FooterForm({children, ...restProps}) {
    return <Form {...restProps}>{children}</Form>
}

Footer.Icon = function FooterIcon({children, ...restProps}) {
    return <Icon {...restProps}>{children}</Icon>
}
Footer.Item = function FooterItem({children, ...restProps}) {
    return <Item {...restProps}>{children}</Item>
}

Footer.Text = function FooterText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}



















































































































































