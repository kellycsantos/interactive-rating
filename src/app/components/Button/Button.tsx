import styles from './button.module.scss';

type ButtonProps = {
    text: string,
    disabled?:boolean,
    variable?: string | null
    click?: () => void 

}

export const Button = ({text,disabled,variable,click}: ButtonProps) => {
    return(
        <button disabled={disabled} onClick={click} className={`${styles.button} ${styles[variable || '']}`}>{text || 'Click'}</button>
    )
}
