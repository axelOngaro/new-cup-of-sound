import Header from '../components/Header';
import YoutubeEmbed from '../components/YoutubeEmbed';

export default function work() {
  return (
    <div>
      <Header />
      <h1>Work.</h1>
      <section className="work__projects">
        <article className="main__projects">
          <div className="video__wrapper">
            <YoutubeEmbed embedId="-qrYeWAMjvI" />
          </div>
          <p className="work__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta aliquam nisi
            adipiscing proin sit tristique nunc nunc facilisis. Venenatis ipsum
            suspendisse iaculis lectus nisi, rhoncus posuere dignissim sed. Ut enim
            maecenas tortor, volutpat magna. Semper felis lectus amet vel tellus rutrum
            et. Cras elementum vitae est, eu. Congue odio urna quisque aliquet sodales
            semper.
          </p>
        </article>
        <article className="main__projects second__project">
          <div className="video__wrapper">
            <YoutubeEmbed embedId="MWZam4jJrJg" />
          </div>
          <p className="work__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta aliquam nisi
            adipiscing proin sit tristique nunc nunc facilisis. Venenatis ipsum
            suspendisse iaculis lectus nisi, rhoncus posuere dignissim sed. Ut enim
            maecenas tortor, volutpat magna. Semper felis lectus amet vel tellus rutrum
            et. Cras elementum vitae est, eu. Congue odio urna quisque aliquet sodales
            semper.
          </p>
        </article>
        <article className="main__projects">
          <div className="video__wrapper">
            <YoutubeEmbed embedId="-4N4M45Zdck" />
          </div>
          <p className="work__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta aliquam nisi
            adipiscing proin sit tristique nunc nunc facilisis. Venenatis ipsum
            suspendisse iaculis lectus nisi, rhoncus posuere dignissim sed. Ut enim
            maecenas tortor, volutpat magna. Semper felis lectus amet vel tellus rutrum
            et. Cras elementum vitae est, eu. Congue odio urna quisque aliquet sodales
            semper.
          </p>
        </article>
      </section>
    </div>
  );
}
