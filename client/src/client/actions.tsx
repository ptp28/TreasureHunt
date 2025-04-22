export type Action =
    | { type: "TOGGLE_DARK_MODE"; payload: boolean }
    | { type: "SET_USERNAME"; payload: string | null }
    ;