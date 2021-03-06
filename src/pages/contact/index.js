import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header/index'
import Form from '../../components/form/index';
import Footer from '../../components/footer/index';

const Wrapper = styled.body`
    display:flex; 
    flex-direction:column; 
`;

const Content = styled.div`
    position: relative;
    min-height: 100vh;
`;

const ContentFooter = styled.div`
    position: relative;
    top: 0px; 
`;

class Contact extends React.Component {

    render() {
        return (
            <Wrapper>
                <Content>
                    <Header></Header>
                    <Form></Form>
                </Content>
                <ContentFooter>
                    <Footer></Footer>
                </ContentFooter>
            </Wrapper>
        );
    }
}


export default Contact;