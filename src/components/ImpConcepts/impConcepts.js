import React from 'react';
import { Link } from 'react-router-dom';

const ImpConcepts = () => {
  return (
    <div style={{ margin: '2rem' }}>
      <h1>Important concepts</h1>
      <div style={{ display: 'flex', gap: '12rem' }}>
        <div>
          <h4>React JS and Html concepts</h4>
          {/* fundamental concept or default behaviour */}
          <ol>
            <li> Data types</li>
            <li> Html symantic elements</li>
            <li> Input element types</li>
            <li> Inline, Block and Inline-Block elements</li>
            <li> List tags in Html, like - ol,ul,li,dl,dt,dd</li>
            <li> Table tags in Html, like - table,thead,tbody,tr,th,td</li>
            <li> Let Var Const</li>
            <li> What are generator functions in js? </li>
            <li> What are currying functions in js? </li>
            <li> ES6 features
              <span title='Arrow functions, Destructuring, Let and const, Spread operator, promises, modules, class'>&nbsp;&#9786;&nbsp;</span>
            </li>
            {/* <li> What are constructor distructor in js?</li> */}
            <li> Operators</li>
            <ul>
              <li> Spread operator</li>
              <li> && AND, || OR Operators, ! NOT</li>
              <li> Ternary operator</li>
              <li> Arithmatic Operators + - * /</li>
              <li> Modulo Operator %</li>
              <li> Comparison operators '==' '===' '!=' 'greater than' '&gt;' 'lessthan' '&lt;'</li>
            </ul>
            <li> Statements/Blocks in JS</li>
            <ul>
              <li>if else statements</li>
              <li>for loop</li>
              <li>try catch finally block</li>
              <li>switch statement</li>
              <li>do while</li>
            </ul>
            <li> Js Methods</li>
            <ul>
              <li> call, apply, bind are functional methods</li>
              <li> slice and splice</li>
              <li> map, flatMap, filter, reduce are array methods</li>
              <li> push, pop, shift, unshift</li>
              <li> replace, reverse</li>
              <li> find, includes, length, sort, join, some, concate</li>
            </ul>
            <li> Array and Objects</li>
            <li> DOM
              <span title='The Document Object Model (DOM) is a programming interface for web documents. It has a tree like structure. and each node consist of an html element.'>&nbsp;&#9786;&nbsp;</span>
            </li>
            <li> DOM Tree</li>
            <li> How to Find HTML elements</li>
            <ul>
              <li>document.getElementById</li>
              <li>document.getElementByTagName</li>
              <li>document.getElementByClassName</li>

            </ul>
            <li> Lifecycle Methods</li>
            <li> Data binding</li>
            <ul>
              <li> Unidirectional data flow</li>
              <li> Two way data flow</li>
            </ul>
            <li> JSON</li>
            <li> Storage</li>
            <ul>
              <li>localStorage- 10MB</li>
              <li>sessionStorage- 5MB</li>
              <li>cookie- 4KB</li>
            </ul>
            <li> Event handlers in JS</li>
            <li> Event Loop in JS
              <span title='Event loop is very imp concept in js for handling the async operations, as js is a single threaded language it uses event loop to manage async tasks. Event loop constantly checks if call stack is empty or not or whether there are any pending tasks in callback queue or microtask queue'>&nbsp;&#9786;&nbsp;</span>
            </li>
            <li>
              Closures in JS? Ref-
              <Link to={'https://www.youtube.com/watch?v=qikxEIxsXco'}>1</Link>&nbsp;
              <Link to={'https://www.youtube.com/watch?v=eBTBG4nda2A'}>2</Link>&nbsp;
              <Link to={'https://www.youtube.com/watch?v=97BGPJyGKp4&list=PLB97yPrFwo5gn9mAzWNHmjxAspUSeF_nk'}>3</Link>&nbsp;
              <span title='A closure in JS is a function bundled together with its lexical environment, together it forms a closure'>&#9786;</span>
            </li>
            <li>
              Scope?
              <span title='Scope in JavaScript is the context of the code that determines where variables and functions can be accessed. The scope of a variable is the area of code where it can be accessed.'>&nbsp;&#9786;&nbsp;</span>
              <span title='A scope in JS is like Environment where we can access a variable or state'>&nbsp;&#9786;&nbsp;</span>
              Scope chain?
              <span title='A scope chain is a mechanism in JavaScript that helps find the value of variable names. Its a chain of scopes that starts with the innermost scope and continues up to the global scope'>&nbsp;&#9786;&nbsp;</span>
              and
              Lexical scope?
              <span title='A lexical scope is like a chain of nested scopes, Scope refers to the area where a function or variable are visible and accessible to other code'>&nbsp;&#9786;&nbsp;</span>
            </li>
            <li> Hoisting?
              <span title='Hoisting in js is a default phenomenon of js of moving declarations on top level of code.'>&nbsp;&#9786;&nbsp;</span>
              Ref-<Link to={'https://www.youtube.com/watch?v=qE47fTlX59M'}>1</Link>&nbsp;
              and
              Shadowing?
              <span title='In JavaScript, shadowing is when a variable in an inner scope has the same name as a variable in an outer scope. This causes the inner variable to temporarily hide the outer variable, which can affect the visibility and access of variables in the code. 
                    Shadowing can lead to unexpected bugs and behavior, and can make debugging more difficult. To avoid confusion and potential bugs, its recommended to: Use different variable names and Refactor the code to avoid shadowing.'>&nbsp;&#9786;&nbsp;</span>
            </li>
            <li> 'this' keyword in JS</li>
            <li> HOC - Higher Order Component</li>
            <li> Reconciliation and diffing in react</li>
            <li> React Portals, Fiber, Suspense, Strict Mode , concurrent mode</li>
            <li>
              callback,&nbsp;
              promise? Ref-<Link to={'https://www.youtube.com/watch?v=zqt3MM5LZFQ&list=PLp18NAIKHWnsuszuBZoOye5SpSTgtDTl5&index=11'}>1</Link>&nbsp;
              <Link to={'https://www.youtube.com/watch?v=AxfmqK_ZMXw'}>2</Link>&nbsp;
              and await
            </li>
            <ul>
              <li>promise.all</li>
              <li>promise.allSettled</li>
              <li>promise.any</li>
              <li>promise.race</li>
            </ul>
            <li> promise chaining and error handling</li>
            <li> error boundries</li>
            <li>
              <Link to={'https://www.youtube.com/watch?v=nhyPuULoiAE&list=PLp18NAIKHWnsuszuBZoOye5SpSTgtDTl5&index=12'}>Event propagation</Link>
            </li>
            <li> Event bubbling vs Event Capturing</li>
            <li> Functional component vs Class component</li>
            <li> Parameters vs Arguments</li>
            <li> Props vs State</li>
            <li> Deep vs Shallow Copy, Mutable vs Immutable objects </li>
            <li> ReactDom</li>
            <li> React router dom</li>
            <li> Redux, Redux-thunk, Redux Saga</li>
            <li> Middlewares</li>
            <li> Memorization and Optimization</li>
            <li> Prop drilling and Callback hell</li>
            <li> ContextAPI</li>
            <li> React Hooks</li>
            <ul>
              <li>useState</li>
              <li>useEffect</li>
              <li>useMemo</li>
              <li>useCallback</li>
              <li>useContext</li>
              <li>useRef</li>
              <li>useReducer</li>
              <li>Custom Hooks</li>
            </ul>
            <li> Forms and React Hook Forms</li>
            <li> React vs Next JS</li>
            <li> CSR vs SSR</li>
            <li> SSG in next js</li>
            <li> React vs Angular</li>
            <li> React vs Vue JS</li>
            <li> fetch vs axios</li>
            <li> Fibonacci series using recursion</li>
            <li> Palindrome check</li>
            <li> Prime numbers</li>
          </ol>
        </div>
        <div>
          <h4>CSS concepts</h4>
          <ol>
            <li> Box CSS</li>
            <li> What is Cascading and cascade rule?</li>
            <li> What is specificity?</li>
            <li> SVG vs Canvas</li>
            <li> CSS vs CSS3</li>
            <li> BEM (Block, Element, Modifier)</li>
            <li> Selectors in CSS</li>
            <li> Pseudo classes : and Pseudo elements ::</li>
            <li> Responsive designs using css</li>
            <li> Media query</li>
            <li> Flexbox and Grids</li>
            <li> Position properties</li>
            <li> visibility: 'hidden' vs display: 'none'</li>
            <li> Inline CSS</li>
            <li> Styled components</li>
            <li> CSS frameworks</li>
            <ul>
              <li> Bootstrap</li>
              <li> Tailwind CSS</li>
              <li> Material UI</li>
              <li> Carbon Design System</li>
            </ul>
            <li> !important keyword in CSS</li>
          </ol>
        </div>
      </div>

    </div>
  );
}

export default ImpConcepts;