import { useTheme } from '../../hooks/useTheme';

type Props = {
    perfilData?: string;
};

export default function Perfil({ perfilData }: Props) {
    const { currentColor } = useTheme();

    if (!perfilData) {
        return null;
    }

    return (
        <section>
            <h2 className={`mb-3 font-bold ${currentColor.text}`}>
                Perfil Personal
                <hr />
            </h2>

            <article className='mb-5 flex flex-col gap-1'>
                <p dangerouslySetInnerHTML={{ __html: perfilData }} />
            </article>
        </section>
    );
}
