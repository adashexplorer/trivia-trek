export interface Quiz {
    id: string;
    title: string;
    category: string;
    difficulty: 'Beginner' | 'Mid' | 'Pro';
    daysLeft: number;
}