/** @jsx h */
import { h, JSX } from 'preact';
import * as styles from './button.module.less'

type ButtonType = "BUTTON" | "SUBMIT" | "RESET"

type ButtonProps = {
  text: string
  disabled?: boolean
  type?: ButtonType
  skin?: "PRIMARY" | "SECONDARY"
  onClick?: (event : JSX.TargetedMouseEvent<HTMLButtonElement>) => void
  className?: string
  "aria-label"?: string
  "data-testid"?: string
}

export const ButtonComponent = (props: ButtonProps) => {
  const defaultOnClick = ()=>{};

  return (
    <button
      type={(props?.type || 'button').toLowerCase()}
      className={`${styles['button']} ${styles[`skin-${(props?.skin || 'PRIMARY').toLowerCase()}`]} ${props?.className || ""}`}
      disabled={props?.disabled || false}
      onClick={props?.onClick || defaultOnClick}
      aria-label={props['aria-label'] || ""}
      data-testid={props['data-testid'] || ""}
    >   
      { props?.text }
    </button>
  );
};