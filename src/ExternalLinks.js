import React from 'react';

import GithubLink from './links/GithubLink';
import TwitterLink from './links/TwitterLink';
import MediumLink from './links/MediumLink';

const ExternalLinks = () => {
  return(
    <div className='ExternalLinks' >
      <GithubLink />
      <TwitterLink />
      <MediumLink />
    </div>
  );
};

export default ExternalLinks;
