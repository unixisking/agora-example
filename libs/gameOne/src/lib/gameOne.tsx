import styles from './gameOne.module.css';

/* eslint-disable-next-line */
export interface GameOneProps {}

export function GameOne(props: GameOneProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to GameOne!</h1>
    </div>
  );
}

export default GameOne;
