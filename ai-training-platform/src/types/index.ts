// src/types/index.ts

export interface SOP {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface TrainingModule {
    id: string;
    title: string;
    sopId: string;
    questions: Question[];
}

export interface Question {
    id: string;
    text: string;
    options: string[];
    correctAnswer: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface AuthPayload {
    userId: string;
    username: string;
}