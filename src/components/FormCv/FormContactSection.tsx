import { Phone } from 'lucide-react';
import type { UseFormRegister } from 'react-hook-form';
import type { CvData } from '../../types/CvDataTypes';
import ContactFields from './ContactFields';
import FormSection from './FormSection';

type Props = {
    register: UseFormRegister<CvData>;
};

export default function FormContactSection({ register }: Props) {
    return (
        <FormSection title='Información de Contacto' icon={<Phone color='white' />}>
            <ContactFields register={register} />
        </FormSection>
    );
}
