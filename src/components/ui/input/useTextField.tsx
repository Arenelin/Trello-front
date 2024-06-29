import {KeyboardEvent, useState} from 'react'
import clsx from 'clsx'
import s from './styles.module.scss'
import {checkIfNumberEntered} from "@/utils";
import {useGetId} from "@/hooks";
import {Input_Type} from "@/types";
import {InputProps} from "@/components/ui";

type useTextFieldParams = InputProps
export const useTextField = (params: useTextFieldParams) => {
    const {
        className,
        disabled,
        errorMessage,
        iconEnd,
        iconStart,
        id,
        onClickButtonHandler,
        switchableIconEnd,
        type = Input_Type.text,
        value,
        isNumberOnly
    } = params

    const baseClassNames = {
        iconEnd: clsx(s.iconEnd, disabled && s.iconEndDisabled),
        iconStart: clsx(
            s.iconStart,
            disabled && s.disabledIconStart,
            !!value && !errorMessage && s.activeIconStart
        ),
        input: clsx(s.input, !!errorMessage && s.errorInput, iconStart && s.searchInput, className),
        inputContainer: clsx(s.inputContainer),
        label: clsx(s.label, disabled && s.labelDisabled),
        root: clsx(s.root),
    }

    const inputId = useGetId(id)

    const onClickHandler = () => {
        if (isPassword) {
            setIsShowPassword(prevState => !prevState)
        } else {
            onClickButtonHandler?.()
        }
    }
    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (isNumberOnly && checkIfNumberEntered(event.key)) {
            event.preventDefault()
        }
    }

    const [isShowPassword, setIsShowPassword] = useState(false)
    const isPassword = type === Input_Type.password
    const isSearch = type === Input_Type.search

    const eyeForCurrentPasswordDisplay = isShowPassword ? iconEnd : switchableIconEnd

    const getCurrentInputType = (type: Input_Type, isShowPassword: boolean) => {
        return isPassword && isShowPassword ? Input_Type.text : type
    }
    const currentInputType = getCurrentInputType(type, isShowPassword)

    const currentIconEnd = iconEnd && (
        <button className={baseClassNames.iconEnd} disabled={disabled} onClick={onClickHandler}>
            {switchableIconEnd ? eyeForCurrentPasswordDisplay : iconEnd}
        </button>
    )
    const iconEndForSearch = !!value && isSearch && currentIconEnd
    const iconEndForRest = !isSearch && currentIconEnd
    const finalIconEnd = iconEndForSearch ? iconEndForSearch : iconEndForRest

    return {
        baseClassNames,
        currentInputType,
        finalIconEnd,
        inputId,
        onKeyDownHandler
    }
}
