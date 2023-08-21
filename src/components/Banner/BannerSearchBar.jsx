import React, { useState } from 'react';
import Select from 'react-select';

const BannerSearchBar = () => {
    const [selectedOptions, setSelectedOptions] = useState([false, false, false, false]);
    
    const handleSelectChange = (index, event) => {
        const newSelectedOptions = selectedOptions.map((_, i) => i <= index);
        setSelectedOptions(newSelectedOptions);
    };
    
    const optionsYear = [
        { value: '2020', label: '2020' },
        { value: '2021', label: '2021' },
        { value: '2022', label: '2022' },
        { value: '2023', label: '2023' },
    ];
    
    const optionsMake = [
        { value: 'audi', label: 'Audi' },
        { value: 'toyota', label: 'Toyota' },
        { value: 'bmw', label: 'BMW' },
        { value: 'dodge', label: 'Dodge' },
    ];
    
    const optionsModel = [
        { value: 'etron', label: 'Etron GT' },
        { value: 'corolla', label: 'Corolla' },
        { value: 'bmw2', label: 'BMW 2.0' },
        { value: 'challenger', label: 'Challenger' },
    ];
    
    const optionsCategory = [
        { value: 'exterior', label: 'Exterior' },
        { value: 'interior', label: 'Interior' },
        { value: 'electric', label: 'Electric' },
    ];
    
    const selectStyles = {
        control: (base) => ({ ...base, width: '210px' }), // Adjust the width as needed
    };
    
    return (
        <>
            <div className="larger-container flex items-center w-full gap-4">
                <Select
                    className="flex p-2.5"
                    styles={selectStyles}
                    options={optionsYear}
                    placeholder="Select the Year"
                    onChange={(selectedOption) => handleSelectChange(0, selectedOption)}
                />
                
                <Select
                    className="flex p-2.5"
                    styles={selectStyles}
                    options={optionsMake}
                    placeholder="Select the Make"
                    isDisabled={!selectedOptions[0]}
                    onChange={(selectedOption) => handleSelectChange(1, selectedOption)}
                />
                
                <Select
                    className="flex p-2.5"
                    styles={selectStyles}
                    options={optionsModel}
                    placeholder="Select the Model"
                    isDisabled={!selectedOptions[1]}
                    onChange={(selectedOption) => handleSelectChange(2, selectedOption)}
                />
                
                <Select
                    className="flex p-2.5"
                    styles={selectStyles}
                    options={optionsCategory}
                    placeholder="Select the Category"
                    isDisabled={!selectedOptions[2]}
                />
                
                <button className="flex bg-blue-500 border-none py-2.5 px-8">
                    <span className="font-semibold text-white">Search</span>
                </button>
            </div>
        </>
    );
}

export default BannerSearchBar;
