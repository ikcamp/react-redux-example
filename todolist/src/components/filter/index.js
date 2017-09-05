import React from 'react';

const Filter = ({filters}) => {
    return (
        <ul>
            {filters.map(v => {
                <li key={v.text}>{v.text}</li>
            })}
        </ul>
    );
}

export default Filter;