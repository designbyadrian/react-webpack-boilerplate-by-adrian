import React from 'react';
import { Link } from 'react-router-dom';

import './style.sass';

const Card = props => (
  <div className="card" styleName="card">
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <Link to={`/post/${props.slug}`} className="btn btn-primary">Read more</Link>
    </div>
  </div>
);

export default Card;
