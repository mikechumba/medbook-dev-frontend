// Generated by https://quicktype.io

export interface Patient {
    id: number;
    name: string;
    date_of_birth: string;
    general_comments: string;
    gender_id: number;
    service_id: number;
    created_at: string;
    updated_at: string;
}

export interface PatientPayload {
    name: string;
    gender_id: number;
    date_of_birth: string;
    general_comments: string;
    service_id: number;
}

export enum Gender {
    'Male' = 1,
    'Female' = 2
}

