import React from 'react';
import {Carousel} from 'react-materialize';

const Caroussel = () => (
    <Carousel options={{duration: 20, dist: -100, fullWidth: false}} images={[
        'https://picsum.photos/200/300?image=0',
        'https://picsum.photos/200/300?image=1',
        'https://picsum.photos/200/300?image=2',
    ]}/>
);

export default Caroussel;