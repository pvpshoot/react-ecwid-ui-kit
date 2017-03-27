import React, { PropTypes } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';

function Code(props) {
  return (
    <SyntaxHighlighter language="xml" style={github}>{props.children.trim()}</SyntaxHighlighter>
  );
}

Code.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Code;
