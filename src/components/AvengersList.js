import React from 'react';

import Avenger from './Avenger';

const AvengersList = ({ avengers }) => {
    return <div>{ getAvengers(avengers) }</div>;
}

const getAvengers = avengers => {
    console.log(avengers);
   const avengerTags = avengers.map(avenger => <Avenger key={avenger} avenger={avenger} />);

   return avengerTags;
}

export default AvengersList;