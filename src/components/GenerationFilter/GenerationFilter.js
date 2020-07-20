import React from 'react';

import generationList from './GenerationList';

import './GenerationFilter.css';

export default (props) => {
  const { handleClick } = props;

  return (
    <ul className="generation-filter">
      { generationList.map(generation => (
        <li
          key={generation.name}
          className="generation-filter__item"
        >
          <div
            className="generation-filter__item__button"
            onClick={() => handleClick(generation)}
          >
            { generation.name }
          </div>
        </li>
      ))}
    </ul>
  );
}