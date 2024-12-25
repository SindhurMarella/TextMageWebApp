import React, { useState } from 'react';
import Spells from './Spells';
import Outbox from './Outbox';
// import '../Inbox.css'; // Import the CSS

export default function Inbox(props) {
    const [text, setText] = useState('Enter the text here');
    const [selectedSpells, setSelectedSpells] = useState([]);
    const [output, setOutput] = useState('');
    const [findWord, setFindWord] = useState('');
    const [replaceWord, setReplaceWord] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleSpellToggle = (spell) => {
        setSelectedSpells((prevSpells) => 
            prevSpells.includes(spell)
                ? prevSpells.filter((s) => s !== spell)
                : [...prevSpells, spell]
        );
    };

    const handleFindReplaceInput = (field, value) => {
        if (field === 'find') setFindWord(value);
        else if (field === 'replace') setReplaceWord(value);
    };

    const handleOnClick = () => {
        let modifiedText = text;
        selectedSpells.forEach((spell) => {
            if (spell === 'findReplace') {
                const regex = new RegExp(findWord, 'gi'); // Case-insensitive
                modifiedText = modifiedText.replace(regex, replaceWord);
            } else {
                modifiedText = applySpell(modifiedText, spell);
            }
        });
        setOutput(modifiedText);
    };

    const applySpell = (text, spell) => {
        const transformations = {
            uppercase: (text) => text.toUpperCase(),
            lowercase: (text) => text.toLowerCase(),
            capitalize: (text) => text.replace(/\b\w/g, (char) => char.toUpperCase()),
            reverse: (text) => text.split('').reverse().join(''),
            removeSpaces: (text) => text.replace(/\s+/g, ' ').trim(),
            count: (text) => `Words: ${text.split(/\s+/).length}, Characters: ${text.length}`,
            sortWords: (text) => text.split(/\s+/).sort().join(' '),
            removeDuplicates: (text) => {
                const words = text.replace(/\n/g, ' ').split(/\s+/);
                const uniqueWords = new Map();
                words.forEach((word) => {
                    const trimmedWord = word.trim();
                    if (trimmedWord) uniqueWords.set(trimmedWord, true);
                });
                return Array.from(uniqueWords.keys()).join(' ');
            },
            extractInfo: (text) => {
                const numbers = text.match(/\d+/g)?.join(', ') || 'None';
                const emails = text.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g)?.join(', ') || 'None';
                const specialCharacters = text.match(/[!@#$%^&*(),.?":{}|<>]/g)?.join(' ') || 'None';
                return `Numbers: ${numbers}\nEmails: ${emails}\nSpecial Characters: ${specialCharacters}`;
            }
        };
        return transformations[spell] ? transformations[spell](text) : text;
    };

    const clearOutput = () => {
        setOutput('');
    }

    return (
        <div className="inbox-container">
            <h3 className='inbox-title'>{props.heading}</h3>
            <div className="mb-3">
            <div className="inbox-form">
                
                <textarea
                    className="inbox-textarea"
                    onChange={handleOnChange}
                    id="inbox"
                    value={text}
                    rows="8"
                ></textarea>
                <Spells title="Spells" onSpellToggle={handleSpellToggle} selectedSpells={selectedSpells} />
                {selectedSpells.includes('findReplace') && (
                    <div className="find-replace-container">
                        <label>
                            Find:
                            <input
                                type="text"
                                value={findWord}
                                onChange={(e) => handleFindReplaceInput('find', e.target.value)}
                                className="find-replace-input"
                            />
                        </label>
                        <label>
                            Replace:
                            <input
                                type="text"
                                value={replaceWord}
                                onChange={(e) => handleFindReplaceInput('replace', e.target.value)}
                                className="find-replace-input"
                            />
                        </label>
                    </div>
                )}
                <button className="cast-spell-button" onClick={handleOnClick}>
                    Cast the Spell!
                </button>
                <Outbox heading="Outbox" output={output} onClear = {clearOutput} />
            </div>
            </div>
            
        </div>
    );
}
