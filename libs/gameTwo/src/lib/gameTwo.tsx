import styles from './gameTwo.module.css';

/* eslint-disable-next-line */
export interface GameTwoProps {}

export function GameTwo(props: GameTwoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to GameTwo!</h1>
    </div>
  );
}

export default GameTwo;
