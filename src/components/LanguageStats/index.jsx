import React from 'react';

const LanguageStats = () => (
  <div className="stats-container">
    <h3 className="section-title">📊 Most Used Languages</h3>
    <div className="language-stats">
      <div className="language-bar">
        <div className="language-segment python" style={{ width: "56.64%" }}></div>
        <div className="language-segment html" style={{ width: "8.85%" }}></div>
        <div className="language-segment css" style={{ width: "6.48%" }}></div>
        <div className="language-segment javascript" style={{ width: "6.45%" }}></div>
        <div className="language-segment cpp" style={{ width: "6.85%" }}></div>
        <div className="language-segment c" style={{ width: "14.73%" }}></div>
      </div>
      
      <div className="language-list">
        <div className="language-item">
          <div className="language-dot python"></div>
          <span>Python 56.64%</span>
        </div>
        <div className="language-item">
          <div className="language-dot c"></div>
          <span>C 14.73%</span>
        </div>
        <div className="language-item">
          <div className="language-dot html"></div>
          <span>HTML 8.85%</span>
        </div>
        <div className="language-item">
          <div className="language-dot cpp"></div>
          <span>C++ 6.85%</span>
        </div>
        <div className="language-item">
          <div className="language-dot css"></div>
          <span>CSS 6.48%</span>
        </div>
        <div className="language-item">
          <div className="language-dot javascript"></div>
          <span>JavaScript 6.45%</span>
        </div>
      </div>
    </div>
  </div>
);

export default LanguageStats;