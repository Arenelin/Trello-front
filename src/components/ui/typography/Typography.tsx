import { ComponentPropsWithoutRef, ElementType } from 'react'
import clsx from 'clsx'
import s from './typography.module.scss'
import {Typography_Variant} from "@/types";

type TypographyProps<TTag extends ElementType = 'p'> = {
  as?: TTag
  variant?: Typography_Variant
} & ComponentPropsWithoutRef<TTag>
export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const { as: Component = 'p', className, variant = 'body2', ...rest } = props

  return <Component className={clsx(s.default, s[variant], className)} {...rest} />
}
