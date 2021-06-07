import Head from 'next/head';
import Header from '../components/Header';
import { useState } from 'react';

export default function Home() {
  const [isDark, setDark] = useState('true');

  return (
    <div className="home">
      <Header isDark={isDark} setDark={setDark} />
      <section className="landing-page">
        <div className="title">
          <h1>Cup of sound</h1>
          <h1 className="studio">studio</h1>
        </div>

        <p>from thoughts to sound</p>
      </section>
    </div>
  );
}
