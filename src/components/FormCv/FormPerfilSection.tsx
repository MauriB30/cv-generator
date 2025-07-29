import { User } from 'lucide-react';
import { Controller, type Control, type UseFormRegister } from 'react-hook-form';
import type { CvData } from '../../types/CvDataTypes';
import Label from '../shared/Label';
import TextEditor from '../shared/TextEditor';
import FormField from './FormField';
import FormFieldFile from './FormFieldFile';
import FormSection from './FormSection';

type Props = {
    register: UseFormRegister<CvData>;
    control: Control<CvData>;
};

export default function FormPerfilSection({ register, control }: Props) {
    return (
        <FormSection title='Información Personal' icon={<User color='white' />}>
            <FormField label='Nombre completo' placeholder='Tu nombre completo' name='perfil.name' register={register} />
            <FormField label='Rol' placeholder='Tu rol' register={register} name='perfil.role' />
            <div className='space-y-5'>
                <Label>Perfil personal</Label>
                <Controller
                    control={control}
                    name={`perfil.aboutMe`}
                    render={({ field }) => <TextEditor value={field.value || ''} onChange={field.onChange} />}
                />
            </div>
            <FormFieldFile name='perfil.photo' register={register} />
        </FormSection>
    );
}
