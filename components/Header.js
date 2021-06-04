import Link from "next/link";

export default function Header({ isDark, setDark }) {
  const toggleColour = () => {
    setDark(!isDark);
  };

  return (
    <header className="header">
      <Link href="/menu">
        <a className="link">menu.</a>
      </Link>
      <p class="colour" onClick={toggleColour}>
        colour.
      </p>
    </header>
  );
}
