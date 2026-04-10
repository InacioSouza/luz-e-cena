import Button from '../Button/Button';
import Fieldset from '../Fieldset/Fieldset';
import InputText from '../InputText/InputText';
import styles from './Newsletter.module.css'
const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.titulo}>Inscreva-se para ganhar descontos!</h2>
      <form className={styles.form}>
        <Fieldset>
          <InputText placeholder="Digite o seu melhor email" />
        </Fieldset>
        <Button variant="default" type="submit">
          Inscreva-se
        </Button>
      </form>
    </section>
  );
};

export default Newsletter;