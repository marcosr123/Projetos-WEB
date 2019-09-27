import React from 'react';
import {Carousel} from 'react-materialize';

const Caroussel = () => (
    <Carousel options={{fullWidth: true, indicators: true}} images={[
        'https://i.uai.com.br/LMbk9ODOSfQo3NEXZxEIc6VBytY=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2019/04/05/243957/20190403131432154293e.jpg',
        'https://picsum.photos/200/300?image=1',
        'https://picsum.photos/200/300?image=2',
    ]}/>
);

export default Caroussel;