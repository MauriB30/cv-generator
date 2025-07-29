import { useTheme } from '../../hooks/useTheme';
import type { AdittionalInfoData } from '../../types/CvDataTypes';

type Props = {
    additionalInfo: AdittionalInfoData;
};

export default function AdittionalInfo({ additionalInfo }: Props) {
    const { currentColor } = useTheme();
    return (
        <section className='space-y-5'>
            <h2 className={`font-bold ${currentColor.text}`}>INFORMACIÓN ADICIONAL</h2>
            <p className='' dangerouslySetInnerHTML={{ __html: additionalInfo.description }} />
        </section>
    );
}
