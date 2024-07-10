import React from 'react';
import Text from '../../atoms/Text/Text';
import Image from '../../atoms/Image/Image';
import Link from '../../atoms/Link/Link';
import Heading from '../../atoms/Heading';


interface CardProps {
    title: string;
    image: string;
    background?: string;
    border?: string;
    href: string;
    rtl?: boolean;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, image, href, description, background, border, rtl }) => {
    return (
        <div className="kl_card" style={{
            background: background,
            border:border,
            direction: (rtl ? 'rtl' : 'ltr')
        }}>
            <Link className='kl_card__title' href={href}>
                <Heading level={2}>{title}</Heading>
            </Link>
            <Text className="kl_card__description" text={description}></Text>
            <Image className={`kl_card__image ${rtl ? 'rtl' : ''}`} src={image} alt={title} />
        </div>
    );
};

export default Card;