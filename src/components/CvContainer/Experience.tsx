import { useTheme } from '../../hooks/useTheme';

type ExperienceItem = {
    position: string;
    company: string;
    year: string;
    description: string;
};

type ExperienceProps = {
    experiences: ExperienceItem[];
};

export default function Experience({ experiences }: ExperienceProps) {
    const { currentColor } = useTheme();

    return (
        <section>
            <h2 className={`mb-3 font-bold ${currentColor.text}`}>
                EXPERIENCIA LABORAL
                <hr />
            </h2>

            {experiences.map((exp, index) => (
                <article key={index} className='mb-5 flex flex-col gap-1'>
                    <h3 className='font-semibold'>{exp.position}</h3>
                    <div className={`space-x-2 ${currentColor.text}`}>
                        <span>{exp.company}</span>
                        {exp.year && <span>|</span>}
                        <span>{exp.year}</span>
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: exp.description }} />
                </article>
            ))}
        </section>
    );
}
