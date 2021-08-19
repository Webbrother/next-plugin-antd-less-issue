import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {Button} from 'antd';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button>Button regular</Button>
      <Button type={'primary'}>Button primary</Button>
    </div>
  )
}

export default Home
