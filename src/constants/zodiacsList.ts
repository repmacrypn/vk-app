export const zodiacsList: IZodiac[] = [
    { id: 1, value: 'Близнецы' },
    { id: 2, value: 'Весы' },
    { id: 3, value: 'Водолей' },
    { id: 4, value: 'Дева' },
    { id: 5, value: 'Козерог' },
    { id: 6, value: 'Лев' },
    { id: 7, value: 'Овен' },
    { id: 8, value: 'Рак' },
    { id: 9, value: 'Рыбы' },
    { id: 10, value: 'Скорпион' },
    { id: 11, value: 'Стрелец' },
    { id: 12, value: 'Телец' },
]

interface IZodiac {
    id: number;
    value: string;
}