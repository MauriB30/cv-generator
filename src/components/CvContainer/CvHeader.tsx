import { useTheme } from '../../hooks/useTheme';
import type { PerfilData } from '../../types/CvDataTypes';

type Props = {
    perfilData: PerfilData;
};

export default function CvHeader({ perfilData }: Props) {
    const photo = perfilData.photo && perfilData.photo.length > 0 ? URL.createObjectURL(perfilData.photo[0]) : undefined;
    const { currentColor } = useTheme();

    return (
        <header className={`flex items-center justify-between ${currentColor.primary} px-5 py-5 text-white`}>
            <div className='min-w-0 break-words'>
                <h1 className='text-5xl font-semibold'>{perfilData.name}</h1>
                <p className='text-xl font-light'>{perfilData.role}</p>
            </div>

            <div className='shrink-0'>
                {photo && <img className='size-36 object-cover' src={photo} alt={`Foto de perfil de ${perfilData.name}`} />}
            </div>
        </header>
    );
}
