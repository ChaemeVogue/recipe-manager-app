import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchBar.css';

export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [healthLabel, setHealthLabel] = useState<string>('');
    const { push } = useHistory();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // reset fields after submit
        console.log(searchTerm);
        setSearchTerm('');
        setHealthLabel('');
        let toPush = `/search/${searchTerm}`;

        // if a health label is selected
        if (healthLabel !== ''){
            toPush += `/${healthLabel}`;
        }
        push(toPush);
    }

    return (
        <div className="SearchBar">
            <div className="SearchBar-container">
                <form onSubmit={onSubmit}>
                    <div className="SearchBar-form-container">
                        <div className="recipeName">
                            <label className="SearchBar-form-label" htmlFor="recipeName">search by name</label>
                            <input
                                className="SearchBar-input"
                                type="text"
                                name="searchTerm"
                                value={searchTerm}
                                onChange={(event: any) => setSearchTerm(event.target.value)}
                                // trim white space when the user clicks the search button, and
                                // replace special characters with empty string
                                onBlur={(event: any) =>
                                    setSearchTerm(event.target.value.trim().replace(/[^a-zA-Z0-9 ]/g,""))}
                                // trim white space when the user presses the enter key, and
                                // replace special characters with empty string
                                onKeyPress={(event: any) => {
                                    if (event.key === "Enter") {
                                        setSearchTerm(event.target.value.trim().replace(/[^a-zA-Z0-9 ]/g,""));
                                    }
                                }}
                                required
                            />
                        </div>
                        <div className="SearchBar-health-label">
                            <label className="SearchBar-form-label" htmlFor="recipeName">health label</label>
                            <select value={healthLabel} onChange={(event: any) => setHealthLabel(event.target.value)}>
                                <option> </option>
                                <option>vegetarian</option>
                                <option>gluten free</option>
                                <option>dairy free</option>
                                <option>tree nut free</option>
                                <option>low sugar</option>
                            </select>
                        </div>
                        <button className="SearchBar-button" type="submit">search</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchBar ;



