import React from 'react';
import { Link } from 'react-router-dom';
import PujanResume from '../assets/pujan-resume.pdf';

const Download = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Looking for my Resume? <br className='sm:block hidden' />
        Download it here!
      </p>
      <a href={PujanResume} className='btn' download>
        Download Resume
      </a>
    </section>
  );
};

export default Download;