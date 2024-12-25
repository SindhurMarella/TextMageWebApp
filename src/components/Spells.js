import React, { useEffect } from 'react';
import '../Spells.css';  // Import the CSS

export default function Spells({ title, onSpellToggle, selectedSpells }) {
    const spells = [
        { name: 'uppercase', label: 'Uppercase' },
        { name: 'lowercase', label: 'Lowercase' },
        { name: 'capitalize', label: 'Capitalize' },
        { name: 'reverse', label: 'Reverse' },
        { name: 'removeSpaces', label: 'Remove Extra Spaces' },
        { name: 'count', label: 'Count' },
        { name: 'findReplace', label: 'Find and Replace' },
        { name: 'sortWords', label: 'Sort Words' },
        { name: 'removeDuplicates', label: 'Remove Duplicates' },
        { name: 'extractInfo', label: 'Extract Info' },
    ];

    const buttonDisableMap = {
        lowercase: ['uppercase', 'count', 'extractInfo'],
        uppercase: ['lowercase', 'capitalize', 'count', 'extractInfo'],
        count: ['uppercase', 'lowercase', 'removeSpaces', 'capitalize', 'reverse', 'findReplace', 'extractInfo', 'sortWords', 'removeDuplicates'],
        findReplace: ['count', 'extractInfo'],
        extractInfo: ['uppercase', 'lowercase', 'capitalize', 'reverse', 'count', 'findReplace', 'sortWords', 'removeDuplicates'],
    };

    useEffect(() => {
    }, [selectedSpells]);

    return (
        <div className="spells-container">
            <h4 className="spells-title">{title}</h4>
            <div className="spells-buttons">
                {spells.map((spell) => (
                    <button
                        key={spell.name}
                        type="button"
                        className={`spell-button ${selectedSpells.includes(spell.name) ? 'active' : ''}`}
                        onClick={() => onSpellToggle(spell.name)}
                        disabled={buttonDisableMap[spell.name]?.some((disabledSpell) => selectedSpells.includes(disabledSpell))}
                    >
                        {spell.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
