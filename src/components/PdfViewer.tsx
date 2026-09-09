import styles from "./PdfViewer.module.css";

type Props = {
  src: string;
  heading?: string;
  title?: string;
};

export function PdfViewer({
  src,
  heading = "Presentation",
  title = "Presentation",
}: Props) {
  return (
    <section className={styles.wrap}>
      <div className={styles.head}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.actions}>
          <a
            className={styles.action}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
          >
            เปิดเต็มจอ ↗
          </a>
          <a className={styles.action} href={src} download>
            ดาวน์โหลด PDF
          </a>
        </div>
      </div>
      <iframe
        className={styles.frame}
        src={`${src}#view=FitH`}
        title={title}
        loading="lazy"
      />
    </section>
  );
}
