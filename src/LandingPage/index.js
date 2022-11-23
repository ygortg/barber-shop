import { useState } from 'react';
import './style.css';

export default function LandingPage() {

  const [ darkMode, setDarkMode ] = useState(false);
  const mudaTema = () => {
    setDarkMode(!darkMode);
  }

  return(
    <div className={darkMode ? 'modo-escuro' : 'modo-claro'}>
      <header>
        <div className="wrap">
          <img className="logo" src="assets/barbearia-logo.png"/>

          <button onClick={mudaTema} className={darkMode ? 'modo-escuro' : 'modo-claro'}>
            <img className='button-icon' src={darkMode ? 'assets/sun.png' : 'assets/moon.png'}/>
            {darkMode ? `Ligth` : `Dark`}
          </button>
        </div>
      </header>
      
      <section className="banner">
      </section>


      <section className="wrap texto-apresentacao">
        <div className='wrap'>
          <h1>
            Bem-vindo a Barber Shop
          </h1>

          <p>
            <strong>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas</strong>
          </p>

          <p>
            Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nossp barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
          </p>

          <p className='assinatura'>
            S. Kelly
          </p>
        </div>
      </section>
    </div>
  );
}