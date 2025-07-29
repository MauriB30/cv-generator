import { useTheme } from '../../hooks/useTheme';
import type { CvData } from '../../types/CvDataTypes';
import AdittionalInfo from './AdittionalInfo';

import Contacto from './Contacto';
import Education from './Education';
import Experience from './Experience';
import Perfil from './Perfil';

type Props = {
    cvData: CvData;
};

export default function CvContent({ cvData }: Props) {
    const { currentColor } = useTheme();

    return (
        <div className='grid grow grid-cols-[65%_1fr]'>
            <div className='p-5'>
                <Perfil perfilData={cvData.perfil.aboutMe} />
                <Experience experiences={cvData.experiences} />
                <Education educations={cvData.educations} />
            </div>
            <aside className={`min-w-0 space-y-10 ${currentColor.secondary} px-3 py-5 break-words`}>
                <Contacto contactData={cvData.contact} />
                <AdittionalInfo additionalInfo={cvData.aditionalInfo} />
            </aside>
        </div>
    );
}
