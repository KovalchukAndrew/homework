export type ThemeType = 'dark'| 'red'| 'some'

const initState = {
    currenTheme: "some" as ThemeType
};

type InitStateType = typeof initState

export const themeReducer = (state:InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME":
            return {...state, currenTheme: action.currenTheme};

        default: return state;
    }
};

export const changeThemeC = (currenTheme: ThemeType) => {
    return {
        type: "CHANGE-THEME", currenTheme
    } as const
}; // fix any

type ChangeThemeActionType = ReturnType<typeof changeThemeC>

type ActionType = ChangeThemeActionType