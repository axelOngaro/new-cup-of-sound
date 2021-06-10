import Header from '../components/Header';
import YoutubeEmbed from '../components/YoutubeEmbed';

export default function work({ work_list }) {
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
      <section className="work__projects--secondary">
        <ul className="work__list">
          {work_list.map((work) => {
            return (
              <a href={work.link} target="_blank">
                <li key={work.id} className="work__list__item">
                  <p>{work.type}</p>
                  <p>{work.title}</p>
                  <p>{work.artist}</p>
                </li>
              </a>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await fetch('http://localhost:1337/pages');
  const [data] = await response.json();
  const { work_list } = data;
  // console.log(work_list);

  // console.log(data);
  return {
    props: { work_list }, // will be passed to the page component as props
  };
}
