import React from 'react';
import '../styles/Features.css';
import nauseated from '../images/74-nauseated-face-2.svg';
import sparkles from '../images/661-sparkles.svg';
import book from '../images/713-open-book.svg';
import gift from '../images/406-heart-with-ribbon.svg';

function Features() {
  return (
    <div className="features">
      <h1>Features</h1>
      <p>Kalrav is packed with exciting features!</p>
      <div className="featureSet">
        <div className="feature">
          <img src={nauseated} alt="" />
          <h2>Don&apos;t Nauseate</h2>
          <p>We only display content that matters, the actual tweets that is.</p>
        </div>
        <div className="feature">
          <img src={sparkles} alt="" />
          <h2>Clean & Minimal</h2>
          <p>Everything is there for a reason and that reason is you.</p>
        </div>
        <div className="feature">
          <img src={book} alt="" />
          <h2>Reading Experience</h2>
          <p>With only you and the tweets, there is a great reading experience!</p>
        </div>
        <div className="feature">
          <img src={gift} alt="" />
          <h2>
            Created with <i className="icon-heart" />
          </h2>
          <p>We have worked hard to provide this excellent expereince to you!</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
