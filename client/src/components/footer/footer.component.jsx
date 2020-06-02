import React from 'react';

import {
    FooterContainer,
    FooterCard,
    LogoFooter,
    FooterHead,
    FooterBody
} from './footer.styles';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterCard>
                <FooterHead>
                    <LogoFooter>BARKEEP SHOP</LogoFooter>
                </FooterHead>
                <FooterBody>
                    Heloo
                </FooterBody>
            </FooterCard>
        </FooterContainer>
    );
};


export default Footer;
