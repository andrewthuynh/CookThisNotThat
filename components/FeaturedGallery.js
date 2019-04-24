import React, { Component } from 'react'
import {
    Heading,
    Title,
    Tile,
    Subtitle,
    Button,
    ImageBackground,
    Text,
    InlineGallery
} from '@shoutem/ui';
import { StyleSheet } from 'react-native';

const FeaturedGallery = (props) => {

    const photos =
        [
            { "source": { "uri": "https://www.toureiffel.paris/sites/default/files/styles/1200x675/public/actualite/image_principale/180411%20ETpers%203_%E8%8A%B1%20%28%E3%83%AD%E3%82%B4%E5%85%A5%E3%82%8A%29.jpg?itok=KiB_dUvM" } },
            { "source": { "uri": "https://www.ciee.org/sites/default/files/content/program/main-image/hero_spain_barcelona_1600x1000_02_0_0.jpg" } },
            { "source": { "uri": "https://c-lj.gnst.jp/public/article/detail/a/00/02/a0002533/img/basic/a0002533_main.jpg?20180907172427" } }
        ];


    return (
        <InlineGallery
            data={photos}
        />
    );
}

export default FeaturedGallery;