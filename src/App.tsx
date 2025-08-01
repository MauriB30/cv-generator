import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { useForm } from 'react-hook-form';

import CvContainer from './components/CvContainer/CvContainer';
import FormCv from './components/FormCv/FormCv';
import ThemeProvider from './contexts/ThemeProvider';
import type { CvData } from './types/CvDataTypes';
import { cvDefaultValues } from './types/cvDefaultValues';

function App() {
    const { control, register } = useForm<CvData>({
        defaultValues: cvDefaultValues,
    });

    const cvRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        contentRef: cvRef,
        documentTitle: 'mi-cv',
    });

    return (
        <div className='app'>
            <header className='sr-only'>
                <h1>Generador de CV Simple y Rápido</h1>
                <p>Crea tu currículum profesional en minutos, sin funciones innecesarias</p>
            </header>
            <main className='font-roboto bg-gray-200 sm:grid sm:grid-cols-[1.3fr_2fr]'>
                <ThemeProvider>
                    <FormCv onPrint={handlePrint} register={register} control={control} />
                    <CvContainer cvRef={cvRef} control={control} />
                </ThemeProvider>
            </main>
        </div>
    );
}

export default App;
