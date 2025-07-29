import { Github, Globe, Languages, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import type { ContactData } from '../../types/CvDataTypes';
import ContactItem from './ContactItem';

type Props = {
    contactData: ContactData;
};

const contactConfig = [
    { key: 'location', icon: MapPin, isLink: false },
    { key: 'email', icon: Mail, isLink: false },
    { key: 'phone', icon: Phone, isLink: false },
    { key: 'linkedin', icon: Linkedin, isLink: true },
    { key: 'github', icon: Github, isLink: true },
    { key: 'portfolio', icon: Globe, isLink: true },
    { key: 'languages', icon: Languages, isLink: false },
] as const;

export default function Contacto({ contactData }: Props) {
    const { currentColor } = useTheme();

    return (
        <section className='space-y-5'>
            <h2 className={`font-bold ${currentColor.text}`}>CONTACTO</h2>
            <ul className='space-y-3'>
                {contactConfig.map(({ key, icon, isLink }) => {
                    const value = contactData[key];
                    if (!value) return null;

                    return <ContactItem key={key} icon={icon} value={value} isLink={isLink} />;
                })}
            </ul>
        </section>
    );
}
