import React from 'react';
import SocialCards from '../components/SocialCards';
import {
  BodyContainer,
  SocialCardContainer,
} from '../styles/components/Social';

const Social: React.FC = () => {
  return (
    <BodyContainer>
      <SocialCardContainer>
        <SocialCards
          social="Facebook"
          icon="facebook"
          link="https://www.facebook.com/chmenegatti"
        />
        <SocialCards
          social="Instagram"
          icon="instagram"
          link="https://www.instagram.com/cmenegatti/"
        />
        <SocialCards
          social="Tweeter"
          icon="tweeter"
          link="https://twitter.com/chmenegatti"
        />
        <SocialCards
          social="Discord"
          icon="discord"
          link="https://discord.gg/MxdpPRZQ"
        />
      </SocialCardContainer>
    </BodyContainer>
  );
};

export default Social;
