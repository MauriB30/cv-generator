import { useWatch, type Control } from 'react-hook-form';
import type { CvData } from '../../types/CvDataTypes';
import { cvDefaultValues } from '../../types/cvDefaultValues';
import CvContent from './CvContent';
import CvHeader from './CvHeader';

type Props = {
    cvRef: React.RefObject<HTMLDivElement | null>;
    control: Control<CvData>;
};

export default function CvContainer({ cvRef, control }: Props) {
    const cvData = useWatch({
        control,
        defaultValue: cvDefaultValues,
    }) as CvData;

    return (
        <section className='mx-auto my-20'>
            <div ref={cvRef} className='cv-printable-area flex flex-col bg-white text-[14px] shadow-sm sm:min-h-[297mm] sm:w-[210mm]'>
                <CvHeader perfilData={cvData.perfil} />
                <CvContent cvData={cvData} />
            </div>
        </section>
    );
}
