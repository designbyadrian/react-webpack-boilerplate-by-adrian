import React from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';

import './style.module.sass';

const Card = props => {
  const { t } = props;

  return (
    <div className="card" styleName="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <Link to={`/post/${props.slug}`} className="btn btn-primary">{t('readmore')}</Link>
      </div>
    </div>
  );
};

export default translate()(Card);
