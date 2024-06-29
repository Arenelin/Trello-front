'use client'
import React, {ComponentPropsWithoutRef, ComponentPropsWithRef, forwardRef, ReactNode} from 'react';
import {Input_Type, Typography_Variant} from "@/types";
import {Typography} from "@/components/ui";
import {useTextField} from "@/components/ui/input/useTextField";

export type InputProps = {
    isNumberOnly?: boolean
    disabled?: boolean
    errorMessage?: string
    iconEnd?: ReactNode
    iconStart?: ReactNode
    label?: string
    onClickButtonHandler?: () => void
    switchableIconEnd?: ReactNode
    type?: Input_Type
} & ComponentPropsWithRef<'input'>

type Props = Omit<ComponentPropsWithoutRef<'input'>, keyof InputProps> & InputProps

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const {
        className,
        disabled,
        errorMessage,
        iconEnd,
        iconStart,
        id,
        label,
        onClickButtonHandler,
        switchableIconEnd,
        type,
        value,
        isNumberOnly,
        ...rest
    } = props
    const {baseClassNames, currentInputType, onKeyDownHandler, finalIconEnd, inputId} = useTextField({
        className,
        disabled,
        errorMessage,
        iconEnd,
        iconStart,
        id,
        onClickButtonHandler,
        switchableIconEnd,
        type,
        value,
        isNumberOnly
    })

    return (
        <div className={baseClassNames.root}>
            <div className={baseClassNames.inputContainer}>
                {!!label && (
                    <Typography
                        as={'label'}
                        className={baseClassNames.label}
                        htmlFor={inputId}
                        variant={Typography_Variant.body2}
                    >
                        {label}
                    </Typography>
                )}
                <input
                    disabled={disabled}
                    id={inputId}
                    type={currentInputType}
                    value={value}
                    ref={ref}
                    onKeyDown={onKeyDownHandler}
                    {...rest}
                    className={baseClassNames.input}
                />
                {!!iconStart && <span className={baseClassNames.iconStart}>{iconStart}</span>}
                {finalIconEnd}
            </div>
            {errorMessage && <Typography variant={Typography_Variant.error}>{errorMessage}</Typography>}
        </div>);
})

Input.displayName = 'Input'
