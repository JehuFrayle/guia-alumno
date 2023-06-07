export interface Clase {
    "materia": string,
    "hora_inicio": string,
    "hora_fin": string,
    "dia": string,
    "salon": string,
}
export interface Schedule {
    'lunes'?: Clase[],
    'martes'?: Clase[],
    'miercoles'?: Clase[],
    'jueves'?: Clase[],
    'viernes'?: Clase[],
    'sabado'?: Clase[],
}
export type TodaySchedule = Clase[];

export interface Student {
    "id_alumno": number,
    "nombre": string,
    "cuatrimestre": number,
    "carrera": string
}
