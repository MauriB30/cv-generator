// cvDefaultValues.ts

import type { CvData } from './CvDataTypes';

export const cvDefaultValues: CvData = {
    perfil: {
        name: '',
        role: '',
        photo: undefined,
        aboutMe: '',
    },
    contact: {
        location: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        portfolio: '',
        languages: '',
    },
    experiences: [],
    educations: [],
    aditionalInfo: {
        description: '',
    },
};
