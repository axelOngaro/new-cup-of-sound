import Link from 'next/link';

export default function menu() {
  return (
    <div className="menu">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list__item">
            <Link href="/">
              <a className="link">home.</a>
            </Link>
          </li>
          <li className="nav__list__item">
            <Link href="/work">
              <a className="link">Mon travail.</a>
            </Link>
          </li>
          <li className="nav__list__item">
            <Link href="/tarif">
              <a className="link">Tarifs.</a>
            </Link>
          </li>
          <li className="nav__list__item">
            <Link href="/contact">
              <a className="link">Contact.</a>
            </Link>
          </li>
        </ul>
      </nav>
      <section className="reseau">
        <p className="reseau__title">reseaux sociaux</p>
        <ul className="reseau__list">
          <li className="reseau__list__item">
            <a href="http://www.google.com" className="link" target="_blank">
              facebook
            </a>
          </li>
          <li className="reseau__list__item">
            <a href="http://www.google.com" className="link" target="_blank">
              youtube
            </a>
          </li>
          <li className="reseau__list__item">
            <a href="http://www.google.com" className="link" target="_blank">
              soundcloud
            </a>
          </li>
          <li className="reseau__list__item">
            <a href="http://www.google.com" className="link" target="_blank">
              instagram
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
