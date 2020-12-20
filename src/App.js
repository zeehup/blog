import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import Gfm from 'remark-gfm';

const source = `
# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

|one|two|
|---|---|
|a|b|

**굵게**
*기울이기*

> 인용문

\`\`\`
console.log('test');
\`\`\`
`;

const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter style={dark} language={language} children={value} />
  }
}

function App() {
  return (
    <ReactMarkdown 
      source={source}
      plugins={[Gfm]}
      renderers={renderers}
      skipHtml={false}
      escapeHtml={false} />
  );
}

export default App;
