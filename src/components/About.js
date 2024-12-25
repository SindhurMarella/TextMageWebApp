import React from 'react';

export default function About() {
  return (
    <>
    <div className="about-container">
      <h2 className='bout-title'>About Text Mage</h2>
      <p>
        Text Mage is a powerful text manipulation tool that allows you to perform various transformations on your text, including case conversion, find and replace, sorting, and more.

        In addition to these features, Text Mage offers a comprehensive suite of tools designed to enhance your text editing experience:<br/>

        <strong>Text Formatting:</strong> Easily format your text by removing unwanted characters, stripping HTML tags, and converting text to uppercase or lowercase. <br/>

        <strong>Text Analysis:</strong> Quickly count lines, characters, words, sentences, and specific strings within your text to gain valuable insights. <br />

        <strong>Data Transformation:</strong> Perform complex data manipulations such as sorting, combining, splitting, and removing duplicates to prepare your text for various applications. <br />

        <strong>Regular Expressions: </strong>Utilize regular expressions for advanced find and replace operations, enabling precise text modifications. <br />

        <strong>Text Generation:</strong> Generate random text, including strings, numbers, and dates, to assist in testing and development scenarios. <br />

        Whether you're a writer, developer, or data analyst, Text Mage streamlines your text processing tasks, saving you time and effort.

        Explore the full range of features and experience the convenience of Text Mage today.
      </p>
      {/* Add more content about your application as needed */}
    </div>
    <div className="about-developer">
        <h2>About the Developer</h2>
        <h5>Marella Sindhur</h5>
        <p>
          Marella Sindhur is a passionate software developer with a keen interest in creating intuitive and efficient tools. With a background in computer science, Marella has worked on various projects aimed at simplifying complex tasks through technology.
        </p>
        <p>
          When not coding, Sindhur enjoys exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.
        </p>
        <div className="developer-links">
        <a href="mailto:sindhurmarella123@gmail.com" className="developer-button">
          Email
        </a>
        <a
          href="https://github.com/SindhurMarella"
          className="developer-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        </div>
      </div>
    </>
  );
}
