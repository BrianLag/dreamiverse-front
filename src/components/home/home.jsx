import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const notify = () => toast.info('cette fonctionnalité est encore en développement ;)');

  return (
    <div className="homepage">
      <ToastContainer />
      <div className="homeinfo">
        <img className="logo" src="https://www.jeuxvideo24.com/wp-content/uploads/2019/02/logo-Dreams-PS4.png" alt="dreamsLogo" />
        <div className="field-flex">
          <fieldset className="field-intro">
            <legend>Bienvenue</legend>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet eros tellus, eget lobortis mi ultrices ac. Maecenas placerat ultrices eros, et ullamcorper nulla malesuada ac. Vivamus a congue purus. Nunc diam mi, congue nec tincidunt ac, maximus ut nunc. Duis semper volutpat urna, non vehicula urna. In eleifend ligula vel risus posuere lobortis. Quisque interdum lacinia elit at aliquet. Proin id tristique risus. Vivamus cursus lorem sem, ut venenatis urna gravida eu. In congue rhoncus tellus, eu auctor risus. Fusce sit amet tortor sed magna pretium accumsan. Sed fermentum orci id ullamcorper finibus. Integer non turpis ut felis commodo luctus. Curabitur cursus augue a odio eleifend ullamcorper.
            </p>
          </fieldset>
        </div>
        <div className="buttonMenu">
          <div className="button search">
            <Link className="pLink" to="/catalog">
              <p>Rechercher</p>
            </Link>
          </div>
          <div onClick={notify} className="button tuto">
            <p>Tutoriel</p>
          </div>
          <Link className="pLink" to="/add">
            <div className="button add">
              <p>Ajouter</p>
            </div>
          </Link>
          <div onClick={notify} className="button fav">
            <p>Favoris</p>
          </div>
        </div>
        <footer>
          display by wild code school
      </footer>
      </div>
    </div>
  )
}

export default Home;
