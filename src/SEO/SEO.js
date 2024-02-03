// SEO.js

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, url }) => {
  useEffect(() => {
    // Update meta tags on component mount
    document.title = title;
    document.querySelector('meta[name="description"]').content = description;
    document.querySelector('meta[name="keywords"]').content = keywords;
    document.querySelector('meta[property="og:title"]').content = title;
    document.querySelector('meta[property="og:description"]').content = description;
    document.querySelector('meta[property="og:url"]').content = url;

    // You can add more meta tags for Open Graph, Twitter cards, etc.
  }, [title, description, keywords, url]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {/* Add more meta tags as needed */}
    </Helmet>
  );
};

export default SEO;


