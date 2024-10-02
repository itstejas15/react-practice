import React from 'react';

const ImpConcepts = () => {
  return (
    <div style={{ margin: '2rem' }}>
      <h1>Important concepts</h1>
      <div style={{ display: 'flex', gap: '12rem' }}>
        <div>
          <h4>React JS and Html concepts</h4>
          <ol>
            <li> Data types</li>
            <li> Html symantic elements</li>
            <li> Input element types</li>
            <li> Inline, Block and Inline-Block elements</li>
            <li> List tags in Html, like - ol,ul,li</li>
            <li> Table tags in Html, like - table,thead,tbody,tr,th,td</li>
            <li> Let Var Const</li>
            <li> Scope chain and Lexical scope</li>
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
              <li> call, apply, bind are function methods</li>
              <li> slice and splice</li>
              <li> map, flatMap, filter, reduce are array methods</li>
              <li> push, pop, shift, unshift</li>
              <li> replace, reverse</li>
              <li> find, includes, length, sort, join, some, concate</li>
            </ul>
            <li> Array and Objects</li>
            <li> Closures in JS</li>
            <li> DOM</li>
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
            <li> 'this' keyword in JS</li>
            <li> HOC - Higher Order Component</li>
            <li> Hoisting and Shadowing</li>
            <li> Reconciliation and diffing in react</li>
            <li> callback, promise and await</li>
            <ul>
              <li>promise.all</li>
              <li>promise.allSettled</li>
              <li>promise.any</li>
              <li>promise.race</li>
            </ul>
            <li> Event propagation</li>
            <li> Event bubbling</li>
            <li> Functional component vs Class component</li>
            <li> Props vs State</li>
            <li> ReactDom</li>
            <li> React router dom</li>
            <li> Redux, Redux-thunk, Redux Saga</li>
            <li> Middlewares</li>
            <li> Memorization and Optimization</li>
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
            <li> React vs Angular</li>
            <li> React vs Vue JS</li>
            <li> fetch vs axios</li>
          </ol>
        </div>
        <div>
          <h4>CSS concepts</h4>
          <ol>
            <li> Box CSS</li>
            <li> BEM (Block, Element, Modifier)</li>
            <li> Selectors in CSS</li>
            <li> Responsive designs using css</li>
            <li> Media query</li>
            <li> Flexbox and Grids</li>
            <li> Position properties</li>
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