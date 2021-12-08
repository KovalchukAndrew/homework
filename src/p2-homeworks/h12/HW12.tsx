import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemeType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.currenTheme)

    const dispatch = useDispatch()

    const ChangeThemeCallback = (theme: ThemeType) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <div>
                <SuperSelect
                    options={themes}
                    value={theme}
                    onChangeOption={ChangeThemeCallback}
                />
            </div>

            <hr/>
        </div>
    );
}

export default HW12;
