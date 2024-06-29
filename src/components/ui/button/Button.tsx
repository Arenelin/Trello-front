'use client'
import React, {ComponentPropsWithRef} from 'react';
import cn from 'clsx'
import styles from './styles.module.scss'

type Props = ComponentPropsWithRef<'button'>

export const Button = ({className,...rest}:Props) => {
    return (
        <button className={cn(styles.button, className)} {...rest}/>
    );
};
