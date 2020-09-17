import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {
  url,
  defaultTitle,
  defaultDescription,
  social,
  socialLinks,
  address,
  contact,
  legalName,
  foundingDate,
  logo,
  author,
} from '../../../../data/Config';
import Thumbnail from '../../../../static/me.jpg';

export const SEO = ({
  title,
  type,
  description,
  articleBody,
  datePublished,
  dateModified,
  cover,
  location = '',
}) => {
  const structuredDataArticle = `{
"@context": "http://schema.org",
"@type": "${type}",
"mainEntityOfPage": {
"@type": "WebPage",
"@id": "https://google.com/article"
},
"headline": "${description}",
"image": {
"@type": "imageObject",
"url": "${cover ? `https://doananh234.com${cover}` : `https://doananh234.com${Thumbnail}`}",
"height": "600",
"width": "800"
},
"datePublished": "${datePublished}",
"dateModified": "${dateModified}",
"author": {
"@type": "Person",
"name": "${author}"
},
"articleBody": "${articleBody}",
"publisher": {
"@type": "Organization",
"name": "${author}",
"logo": {
"@type": "ImageObject",
"url": "${logo}"
}
},
"description": "${description}",
"url": "${url}${location}/?ref=doananh234.com"
}`;

  const structuredDataOrganization = `{ 
"@context": "http://schema.org",
"@type": "${type}",
"legalName": "${legalName}",
"url": "${url}",
"logo": "${logo}",
"foundingDate": "${foundingDate}",
"founders": [{
"@type": "Person",
"name": "${legalName}"
}],
"contactPoint": [{
"@type": "ContactPoint",
"email": "${contact.email}",
"telephone": "${contact.phone}",
"contactType": "customer service"
}],
"address": {
"@type": "PostalAddress",
"addressLocality": "${address.city}",
"addressRegion": "${address.region}",
"addressCountry": "${address.country}",
"postalCode": "${address.zipCode}"
},
"sameAs": [
"${socialLinks.twitter}",
"${socialLinks.youtube}",
"${socialLinks.linkedin}",
"${socialLinks.instagram}",
"${socialLinks.github}"
]
}`;

  return (
    <Helmet>
      <meta name="description" content={description || defaultDescription} />
      <meta name="image" content={cover ? `${url}${cover}` : `${url}${Thumbnail}`} />

      <meta property="og:url" content={`${url}${location}/?ref=doananh234.com`} />
      <meta property="og:type" content={type === 'NewsArticle' ? 'NewsArticle' : 'website'} />
      <meta property="og:title" content={title ? `Anh Doan | ${title}` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={cover ? `${url}${cover}` : `${url}${Thumbnail}`} />
      <meta property="fb:app_id" content={social.facebook} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={socialLinks.twitter} />
      <meta name="twitter:site" content={social.twitter} />
      <meta name="twitter:title" content={title ? `Anh Doan | ${title}` : defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image:src" content={cover ? `${url}${cover}` : `${url}${Thumbnail}`} />
      <script type="application/ld+json">
        {type === 'NewsArticle' ? structuredDataArticle : structuredDataOrganization}
      </script>
      <title>{title ? `Anh Doan | ${title}` : defaultTitle}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  articleBody: PropTypes.any,
  datePublished: PropTypes.any,
  dateModified: PropTypes.any,
  cover: PropTypes.any,
  location: PropTypes.any,
};
