import React from 'react';
import {Route} from 'react-router-dom';

import './pagination.css';

function Pagination(props) {
    // fetch sql for how many results per page, the first page, and for the total count
    /*
    select results_per_page, result, count(posts) from table limit ? <- max results
    */
    let defaultz = 10;
    return (
        <div className='pagination'>

            <div>
                <label for="results">Show records</label>
                <select name="results" value={defaultz}>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                    <option>30</option>
                    <option>50</option>
                    <option>All</option>
                </select>
            </div>

            <div>
                <button type="button">&#60;</button>
                <button type="button">1</button>
                <span>-</span>
                <button type="button">100</button>
                <button type="button">&#62;</button>
            </div>

            <div>
                <label for='page'>Go to page</label>
                <input type='text'/>
                <input type='submit' value='Go'/>
            </div>
            
        </div>
    );
}

export default Pagination;