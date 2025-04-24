export type Action =
    | { type: "TOGGLE_DARK_MODE"; payload: boolean }
    | { type: "SET_USER_EMAIL"; payload: string | null }
    ;