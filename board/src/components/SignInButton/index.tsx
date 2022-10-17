import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton() {
  const session = true;


  return session ? (
    <button
        type="button"
        className={styles.signInButton}
        onClick={() => {}}
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Gira_internacional_USA_-_Steve_Jobs_%28cropped%29.jpg" alt="Foto do usuário" />
        Olá Matheus
        <FiX color="#737380" className={styles.closeIcon} />
      </button>
  ) : (
      <button
        type="button"
        className={styles.signInButton}
        onClick={() => {}}
      >
        <FaGithub color="#FF8800" />
        Entrar com github
      </button>
  )
}