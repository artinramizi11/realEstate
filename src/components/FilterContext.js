import React, { createContext, useState } from 'react';
import data from '../data'; 

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [location, setLocation] = useState('');

    const filteredData = data.filter(item => {
        const matchesKeyword = keyword === '' || item.secondtitle.toLowerCase().includes(keyword.toLowerCase());
        const matchesPropertyType = propertyType ? item.status.toLowerCase() === propertyType.toLowerCase() : true;
        const matchesLocation = location ? item.secondtitle.toLowerCase() === location.toLowerCase() : true;

        return matchesKeyword && matchesPropertyType && matchesLocation;
    });

    const resetFilterBtn = () => {
        setKeyword('')
        setPropertyType('')
        setLocation('')
    }

    const value = {
        keyword,
        setKeyword,
        propertyType,
        setPropertyType,
        location,
        setLocation,
        filteredData,
        resetFilterBtn
    };

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    );
};

export default FilterContextProvider;
