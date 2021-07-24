/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import styles from './ResultCard.module.scss';

const ResultCard = ({ resultObj, ...props }) => {
  const {
    fullName,
    description,
    starsCount,
    owner: { avatar_url, login, type, html_url },
  } = resultObj;
  return (
    <div className={styles.resultContainer} {...props}>
      <h4>
        {fullName} &nbsp; (<span style={{ fontSize: 18 }}>&#9734;</span>
        {starsCount})
      </h4>

      <p className={styles.description}>{description}</p>

      <p>
        Github link:{' '}
        <a target="_blank" rel="noreferrer" href={html_url}>
          {html_url}
        </a>
      </p>

      <div className={styles.owner}>
        <img src={avatar_url} alt={login} />
        <div className={styles.info}>
          <span>{login}</span>
          <span>{type}</span>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
