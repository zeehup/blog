import React, {useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import Gfm from 'remark-gfm';

import marked from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-java.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-css.min';


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

const source2 = `
# h1
## h2
### h3
> blockquote

\`\`\`javascript
console.log('a');
\`\`\`

\`\`\`css
.class {
  color: #ffff;
}
\`\`\`

\`\`\`bash
$ ps -ef | grep node
\`\`\`

\`\`\`java
Integer age = 31;
String name = "이수민";
\`\`\`
`;

const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter style={dark} language={language} children={value} />
  }
}

function App() {
  const html = marked(source2, {breaks: true, sanitize: true});
  const markup = {
    __html: html
  };

  Prism.highlightAll();

  return (
    <div>
      <ReactMarkdown
          source={source}
          plugins={[Gfm]}
          renderers={renderers}
          skipHtml={false}
          escapeHtml={false} />
      <hr/>
      <div dangerouslySetInnerHTML={markup} />
    </div>
  );
}

export default App;
