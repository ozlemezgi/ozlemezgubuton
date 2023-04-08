import * as React from 'react'
import styles from './styles.module.css'

// Props arayüzü
interface Props {
   type: 'primary' | 'secondary' | 'dotted' | 'link'
   text: string
 }


// Button bileşeni
export const Button: React.FC<Props> = ({ type, text }) => {
  return <button className={`${styles.btn} ${styles[type]}`}>{text}</button>
}

// export const ExampleComponent = ({ text }: Props) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }