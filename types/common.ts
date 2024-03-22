export type WithClassName<T extends Record<string, unknown> = {}> = T & { className?: string }

export enum ScreenWidths {
    S = 420,
    M = 720,
    L = 1024,
    XL = 1360,
    '2XL' = 1900,
    '3XL' = 2560,
}
