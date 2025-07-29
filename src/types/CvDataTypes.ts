export type PerfilData = {
    name: string;
    role?: string;
    photo?: FileList;
    aboutMe?: string;
};

export type ExperienceItem = {
    position: string;
    company: string;
    year: string;
    description: string;
};

export type EducationItem = {
    title: string;
    institution: string;
    year: string;
};

export type ContactData = {
    location: string;
    email: string;
    phone: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
    languages?: string;
};

export type AdittionalInfoData = {
    description: string;
};

export type CvData = {
    perfil: PerfilData;
    experiences: ExperienceItem[];
    educations: EducationItem[];
    contact: ContactData;
    aditionalInfo: AdittionalInfoData;
};
