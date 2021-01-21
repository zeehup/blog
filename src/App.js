import React from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-java.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-css.min';
import marked from 'marked';

const MarkdownContent = styled.div`
    blockquote {
        border-left: 4px solid skyblue;
        padding: 1rem;
        background: rgba(0, 0, 0, 0.1);
        margin-left: 0;
        margin-right: 0;
        p {
            margin: 0;
        }
    }
    
    h1, h2, h3, h4 {
        font-weight: 500;
    }
    
    h1, h2, h3, h4, h5, p {
      code {
        // font-family: 'D2 coding';
        background: mintcream;
        padding: 0.25rem;
        color: lightskyblue;
        border: 1px solid lightgray;
        border-radius: 2px;
      }
    }
    
    code[class*="language-"], pre[class*="language-"] {
      // font-family: 'D2 Coding';
    }
    
    a {
      color: red;
      &:hover {
        color: green;
      }
    }
    
    table {
      border-collapse: collapse;
      width: 100%;
    }
    
    table, th, td {
      border: 1px solid darkgray;
    }
    
    th, td {
      font-size: 0.9rem;
      padding: 0.25rem;
      text-align: left;
    }
    
    img {
      max-width: 100%;
      margin: 0 auto;
      display: block;
    }
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

텍스트 사이의 \`코드\`

[링크](https://google.com)

## 이미지
![imageholder](http://via.placeholder.com/350x150)
`;


const App = () => {
  const html = marked(source2, {breaks: true, sanitize: true});
  const markup = {
    __html: html
  };

  Prism.highlightAll();

  return (
    <div>
      <MarkdownContent dangerouslySetInnerHTML={markup}>
      </MarkdownContent>
    </div>
  );
}

export default App;
