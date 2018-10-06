import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tabs';


document.addEventListener ('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // console.log("aladdin... arabian NIIIIIIIIII-IIIGGGGGGHTS");
  const tabContent = [
    {
      title: "One",
      content: "I am the OG tab"
    },

    {
      title: "Two",
      content: "Middle child... sad life"
    },

    {
      title: "Three",
      content: "I R spoiled bitch"
    }
  ];

  ReactDOM.render(
    <nav>
      <Clock />
      <Tab tabContent={tabContent} />
    </nav>,
    root
  );
});
