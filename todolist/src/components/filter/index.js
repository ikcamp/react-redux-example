import React from 'react';

const Filter = ({filters}) => {
    return (
        <div>
            筛选：
            <ul>
                {filters.map(v => {
                    return <li key={v.text}>{v.text}</li>
                })}
            </ul>
        </div>
    );
}

export default Filter;