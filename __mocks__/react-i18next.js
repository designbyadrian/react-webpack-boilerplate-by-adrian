import React from 'react';

export const translate = () => Component => props => <Component t={string => string} {...props} />;
