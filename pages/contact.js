import Header from '../components/Header';

export default function contact() {
  return (
    <div className="contact">
      <Header />
      <main className="contact__content">
        <div className="contact__content__wrapper">
          <p>contactez moi.</p>
          <p className="email">
            <a href="https://www.google.com">contact@gmail.com</a>
          </p>
          <ul className="resea__list">
            <li>
              <a href="https://www.google.com" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.google.com" target="_blank">
                SoundCloud
              </a>
            </li>
            <li>
              <a href="https://www.google.com" target="_blank">
                Youtube
              </a>
            </li>
            <li>
              <a href="https://www.google.com" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
