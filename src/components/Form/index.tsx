import { zodiacsList } from 'src/constants/zodiacsList'
import { useFormControl } from 'src/hooks/useFormControl'

import { NavButton } from '../NavButton'
import { Select } from '../Select'
import { Input } from '../Input'

import styles from './styles.module.scss'

export const Form = () => {
    const {
        zodiacValue,
        nameValue,
        handleInputChange,
        handleSelectChange,
        handleButtonClick,
    } = useFormControl()

    return (
        <section className={styles.formWrapper}>
            <form className={styles.form}>
                <Input
                    value={nameValue}
                    handleInputChange={handleInputChange}
                    placeholder='Имя...'
                    label='Введи нужное имя:'
                />
                <Select
                    value={zodiacValue}
                    handleSelectChange={handleSelectChange}
                    label='Выбери знак зодиака:'
                >
                    {zodiacsList.map(z => <option key={z.id}>{z.value}</option>)}
                </Select>
            </form>
            <NavButton
                className='greetings'
                text='Рассчитаем!'
                callBack={handleButtonClick}
            />
        </section>
    )
}