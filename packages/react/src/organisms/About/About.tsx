import React from 'react';
import Image from '../../atoms/Image';
import Heading from '../../atoms/Heading';
import Text from '../../atoms/Text';

interface AboutProps {
    imageProfile: string;
    name: string;
    role: string;
    description: string;
    // Add any props you need for the About component
}

const About: React.FC<AboutProps> = ({imageProfile, name , role, description}) => {
    return (
        <section id="about" className='kl_about'>
            <Image className='kl_about__image' src={imageProfile} height={300} width={300} responsive round alt="teacher" />
            <Heading level={1}>{name}</Heading>
            <Heading level={2}>{role}</Heading>
            <div className='kl_about__description'>{description}</div>
        </section>
    );
};

export default About;