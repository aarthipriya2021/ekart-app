import styles from "./footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return <div className={styles.footer}>Copyright © {year} - E-Kart.</div>;
};

export default Footer;
