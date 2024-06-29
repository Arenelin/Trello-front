'use client'
import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import styles from './styles.module.scss'
import {Check} from "lucide-react";

type Props = {
    id?: string
    name?: string
}
export const CustomCheckbox = ({id, name}: Props) => {
    return (
        <Checkbox.Root className={styles.checkboxRoot} id={id} name={name}>
            <Checkbox.Indicator className={styles.checkboxIndicator}>
                <Check size={15}/>
            </Checkbox.Indicator>
        </Checkbox.Root>
    );
};
