import { useTheme } from '../../hooks/useTheme';

type EducationItem = {
    title: string;
    institution: string;
    year: string;
};

type EducationProps = {
    educations: EducationItem[];
};

export default function Education({ educations }: EducationProps) {
    const { currentColor } = useTheme();
    return (
        <section>
            <h2 className={`mb-3 font-bold ${currentColor.text}`}>
                EDUCACIÓN
                <hr />
            </h2>

            {educations.map((edu, index) => (
                <article key={index} className='mb-3 flex flex-col gap-1'>
                    <h3 className='font-semibold'>{edu.title}</h3>
                    <div className={`space-x-2 ${currentColor.text}`}>
                        <span>{edu.institution}</span>
                        {edu.year && <span>|</span>}
                        <span>{edu.year}</span>
                    </div>
                </article>
            ))}
        </section>
    );
}
