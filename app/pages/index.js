import React from 'react';
import logo from '../assets/logo-horisontal-hvit.svg';
import background from '../assets/background.jpg';
import { Page, PageHeading, Container } from '../components/page';
import { CenteredBlock, CenteredHeader, CenteredContent } from '../components/centeredblock';
import { TransitionWord } from '../components/word-transition.js';

const twoSettings = {minWrongChars: 20, maxWrongChars: 25, delay: 900};
const fourSettings = {minWrongChars: 25, maxWrongChars: 35, delay: 900};
const textSettings = {minWrongChars: 10, maxWrongChars: 20, delay: 900};

const Index = () => (
    <Page name='index'>
        <div className='index__content' style={{backgroundImage: `url(${background})`}}>
            <h1 className='index__header'>
                <TransitionWord settings={twoSettings}>2</TransitionWord>
                <TransitionWord className='index__super' settings={fourSettings}>4</TransitionWord>
            </h1>
            <div className='index__text'>
            <TransitionWord settings={textSettings}>September 13th & 14th, 2017</TransitionWord>
            <TransitionWord settings={textSettings}>Oslo, Norway</TransitionWord>
            </div>
            <ul className='index__links'>
                <li className='index__link'>
                    <a href='https://vimeo.com/javazone/collections' className='button button--yellow'>
                        1000 talks on video!
                    </a>
                </li>
                <li className='index__link'>
                    <a href='https://2016.javazone.no' className='button button--yellow'>
                        Remember JavaZone 2016
                    </a>
                </li>
            </ul>
        </div>
    </Page>
);

export default Index;
