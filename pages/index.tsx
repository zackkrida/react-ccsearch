import styles from "../styles/Home.module.css";
import { useSources } from "../lib/api";

export default function Home() {
  const sources = useSources();

  return (
    <div className={styles.sources}>
      {sources.map((i) => (
        <a key={i.source_name} href={i.source_url}>
          <img loading="lazy" src={i.logo_url} alt={i.display_name} />
          {/* {i.display_name} */}
        </a>
      ))}
    </div>
  );
}
