import React, {ReactNode} from 'react';
import {BadgeVariant} from "@/types";

type Props = {
    children: ReactNode
    variant: BadgeVariant
}
const Badge = ({children, variant}: Props) => {
    return (
        <span>
{children}{variant}
        </span>
    );
};

export default Badge;
