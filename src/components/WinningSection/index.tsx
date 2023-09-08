import { useAppSelector } from 'src/hooks/useAppHooks'
import { results } from 'src/constants/mockResults'
import { Name } from 'src/pages/Congrats/Common'

import styles from './styles.module.scss'

export const Section = () => {
    const { name, zodiac } = useAppSelector(state => state.userData.userData)
    const data = results[Math.floor(Math.random() * results.length)]

    return (
        <section className={styles.data}>
            <div>
                подтверждает, что
            </div>
            <div className={styles.content}>
                <Name name={name || 'Аноним'} />{' '}
                по знаку зодиака{' '}
                <Name name={zodiac || '(secret)'} />
            </div>
            <div>
                является{' '}
                <Name name={data.value} />
            </div>
            <div className={styles.image}>
                <img alt='transformer' src={data.photoURL} width={'85%'} height={'80%'} />
            </div>
        </section>
    )
}