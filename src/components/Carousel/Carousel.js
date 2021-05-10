import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Passion Made',
    content: 'Possible',
  },
  {
    key: '2',
    title: 'Passion Made',
    content: 'Possible',
  },
  {
    key: '3',
    title: 'Passion Made',
    content: 'Possible',
  },,
]

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                  <img src="/singapore.png" height="50px" width="150px"/>
                <h1>{item.title}</h1>
                <h1>{item.content}</h1>
                <div className="btnHolder">
                  <Button type="primary" size="large">EXPLORE TOURS</Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;