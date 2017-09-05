import React from 'react';
import './index.css';

const Filter = ({filters = [], chooseFilter}) => {
    return (
        <div>
            点击筛选：
            <ul>
                {filters.map((v, i) => {
                    return (
                        <span key={v.text} className="filter" onClick={() => chooseFilter(i)}>
                            {v.text}
                            {v.selected ? <span>✓</span> : null}
                            {i !== filters.length - 1 ? ' | ' : null}
                        </span>
                    );
                })}
            </ul>
        </div>
    );
}

export default Filter;