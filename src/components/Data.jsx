const data = [
    {
      id: 1,
      question: "What is the purpose of React's 'key' attribute when rendering lists of elements?",
      answers: [
        {
          text: "It uniquely identifies elements and helps React optimize re-rendering by recognizing changes.",
          correct: true,
        },
        {
          text: "It specifies the display order of elements in the list.",
          correct: false,
        },
        {
          text: "It defines the styling properties for each list item.",
          correct: false,
        },
        {
          text: "It sets the state of each element in the list.",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is the role of PropTypes in React, and how are they useful?",
      answers: [
        {
          text: "PropTypes validate component props during development and help catch bugs by specifying expected prop types.",
          correct: true,
        },
        {
          text: "PropTypes are used to define the structure of a component's state.",
          correct: false,
        },
        {
          text: "PropTypes determine the lifecycle methods of a React component.",
          correct: false,
        },
        {
          text: "PropTypes define the shape of the data returned by a React component.",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Explain the purpose of React portals and provide an example of their usage.",
      answers: [
        {
          text: "React portals allow rendering a child component at a different DOM node, useful for modal dialogs or overlays.",
          correct: true,
        },
        {
          text: "React portals are used for client-side routing in React applications.",
          correct: false,
        },
        {
          text: "React portals enable server-side rendering of React components.",
          correct: false,
        },
        {
          text: "React portals are used for managing global state in React applications.",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "What are the differences between controlled and uncontrolled components in React forms?",
      answers: [
        {
          text: "Controlled components have form data handled by React state, while uncontrolled components manage form data within the DOM.",
          correct: true,
        },
        {
          text: "Controlled components are more performant than uncontrolled components.",
          correct: false,
        },
        {
          text: "Uncontrolled components are easier to validate than controlled components.",
          correct: false,
        },
        {
          text: "Controlled components allow direct manipulation of form elements, while uncontrolled components do not.",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What is the significance of the 'useEffect' hook in React, and when would you use it?",
      answers: [
        {
          text: "useEffect is used for handling side effects in functional components, like data fetching or subscriptions, after rendering.",
          correct: true,
        },
        {
          text: "useEffect is used for defining reusable logic across multiple components.",
          correct: false,
        },
        {
          text: "useEffect is used for managing state in functional components.",
          correct: false,
        },
        {
          text: "useEffect is used for defining event handlers in React components.",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Describe the concept of lifting state up in React and provide an example of its application.",
      answers: [
        {
          text: "Lifting state up involves moving the state from child components to their parent components to share data among siblings.",
          correct: true,
        },
        {
          text: "Lifting state up involves reducing the complexity of state management in React components.",
          correct: false,
        },
        {
          text: "Lifting state up involves encapsulating state within individual components for better encapsulation.",
          correct: false,
        },
        {
          text: "Lifting state up involves optimizing the rendering performance of React components.",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What are the benefits and drawbacks of using Redux with React for state management?",
      answers: [
        {
          text: "Redux offers a centralized and predictable state management but may introduce additional complexity to small applications.",
          correct: true,
        },
        {
          text: "Redux simplifies state management but reduces the scalability of React applications.",
          correct: false,
        },
        {
          text: "Redux enhances the performance of React components but increases the boilerplate code.",
          correct: false,
        },
        {
          text: "Redux optimizes the SEO of React applications but decreases the code maintainability.",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Explain the concept of code splitting in React and how it helps improve performance.",
      answers: [
        {
          text: "Code splitting involves breaking down the application's code into smaller chunks to load only necessary code, reducing initial load times.",
          correct: true,
        },
        {
          text: "Code splitting refers to optimizing the code of React components to make them more concise.",
          correct: false,
        },
        {
          text: "Code splitting allows defining separate logic for different user roles in React applications.",
          correct: false,
        },
        {
          text: "Code splitting enables managing different versions of the same React component.",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What are React Hooks? Provide examples of commonly used hooks and their purposes.",
      answers: [
        {
          text: "React Hooks are functions that let you use state and other React features in functional components; examples include useState and useEffect.",
          correct: true,
        },
        {
          text: "React Hooks are components used to manage global state in React applications.",
          correct: false,
        },
        {
          text: "React Hooks are used for defining custom lifecycle methods in React components.",
          correct: false,
        },
        {
          text: "React Hooks are specific methods used for defining routing logic in React applications.",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Describe the process and benefits of server-side rendering (SSR) in React applications.",
      answers: [
        {
          text: "SSR renders React components on the server, improving performance, search engine optimization, and initial page load times.",
          correct: true,
        },
        {
          text: "SSR enhances client-side interactivity in React applications but may decrease the application's security.",
          correct: false,
        },
        {
          text: "SSR simplifies the deployment process of React applications but negatively impacts scalability.",
          correct: false,
        },
        {
          text: "SSR focuses on optimizing the styling of React components for different screen sizes.",
          correct: false,
        },
      ],
    },
    {
        id: 11,
        question: "What is the purpose of the 'children' prop in React components?",
        answers: [
          {
            text: "It represents the parent component of the current element.",
            correct: false,
          },
          {
            text: "It refers to the child elements nested within the current component.",
            correct: true,
          },
          {
            text: "It defines the lifecycle methods of the component.",
            correct: false,
          },
          {
            text: "It determines the routing behavior of the component.",
            correct: false,
          },
        ],
      },
      {
        id: 12,
        question: "Explain the concept of error boundaries in React and their purpose.",
        answers: [
          {
            text: "Error boundaries are used to handle errors thrown in asynchronous functions.",
            correct: false,
          },
          {
            text: "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree and log those errors.",
            correct: true,
          },
          {
            text: "Error boundaries are used to prevent race conditions in React applications.",
            correct: false,
          },
          {
            text: "Error boundaries are components that handle navigation errors in React Router.",
            correct: false,
          },
        ],
      },
      {
        id: 13,
        question: "Describe the concept of higher-order components (HOCs) in React and provide an example.",
        answers: [
          {
            text: "HOCs are components used to handle form validations in React applications.",
            correct: false,
          },
          {
            text: "HOCs are functions that take a component and return a new component with enhanced functionalities.",
            correct: true,
          },
          {
            text: "HOCs are components that manage global state across the entire application.",
            correct: false,
          },
          {
            text: "HOCs are used for defining animation effects in React components.",
            correct: false,
          },
        ],
      },
      {
        id: 14,
        question: "What is the purpose of using React.memo()? Explain with an example.",
        answers: [
          {
            text: "React.memo() is used for memoizing functions in React components.",
            correct: false,
          },
          {
            text: "React.memo() is used to optimize the performance of functional components by preventing unnecessary re-renders.",
            correct: true,
          },
          {
            text: "React.memo() is used for managing asynchronous data fetching in React components.",
            correct: false,
          },
          {
            text: "React.memo() is used to define static methods in functional components.",
            correct: false,
          },
        ],
      },
      {
        id: 15,
        question: "What is the role of the 'ref' attribute in React? Provide an example of its usage.",
        answers: [
          {
            text: "The 'ref' attribute is used to refer to the parent component in a child component.",
            correct: false,
          },
          {
            text: "The 'ref' attribute is used to access the DOM nodes or React elements created in the render method.",
            correct: true,
          },
          {
            text: "The 'ref' attribute is used to handle routing between different components.",
            correct: false,
          },
          {
            text: "The 'ref' attribute is used for defining global state variables in React components.",
            correct: false,
          },
        ],
      },
      {
        id: 16,
        question: "What are the key differences between class components and functional components in React?",
        answers: [
          {
            text: "Functional components allow the use of lifecycle methods, while class components do not.",
            correct: false,
          },
          {
            text: "Class components use this keyword, while functional components do not have access to this.",
            correct: false,
          },
          {
            text: "Functional components promote better code reusability and are simpler than class components.",
            correct: true,
          },
          {
            text: "Class components have better performance optimization compared to functional components.",
            correct: false,
          },
        ],
      },
      {
        id: 17,
        question: "Explain the purpose of React.forwardRef() and when it should be used.",
        answers: [
          {
            text: "React.forwardRef() is used for defining global variables in React applications.",
            correct: false,
          },
          {
            text: "React.forwardRef() is used to forward the 'ref' attribute from a parent component to a child component in a custom way.",
            correct: true,
          },
          {
            text: "React.forwardRef() is used to define custom event handlers in React components.",
            correct: false,
          },
          {
            text: "React.forwardRef() is used for creating higher-order components (HOCs) in React applications.",
            correct: false,
          },
        ],
      },
      {
        id: 18,
        question: "Describe the role of the 'key' prop in React lists and its importance.",
        answers: [
          {
            text: "The 'key' prop is used for styling components within a list in React applications.",
            correct: false,
          },
          {
            text: "The 'key' prop is used to define unique identifiers for elements in lists, aiding in efficient updates and re-rendering.",
            correct: true,
          },
          {
            text: "The 'key' prop is used to access the index of elements within a list in React components.",
            correct: false,
          },
          {
            text: "The 'key' prop is used to define the order of elements in a React list.",
            correct: false,
          },
        ],
      },
      {
        id: 19,
        question: "Explain the concept of lazy loading in React and its advantages.",
        answers: [
          {
            text: "Lazy loading involves delaying the rendering of React components until the entire application is loaded for better performance.",
            correct: true,
          },
          {
            text: "Lazy loading refers to optimizing the size of React components for faster rendering.",
            correct: false,
          },
          {
            text: "Lazy loading allows sharing state between multiple components in React applications.",
            correct: false,
          },
          {
            text: "Lazy loading is used to manage complex asynchronous data fetching in React components.",
            correct: false,
          },
        ],
      },
      {
        id: 20,
        question: "Describe the use case of React.Fragment in a React component.",
        answers: [
          {
            text: "React.Fragment is used to define the root element of a React component.",
            correct: false,
          },
          {
            text: "React.Fragment is used to conditionally render elements based on a specific state in React components.",
            correct: false,
          },
          {
            text: "React.Fragment is used to render multiple children without adding extra nodes to the DOM.",
            correct: true,
          },
          {
            text: "React.Fragment is used to create reusable components in React applications.",
            correct: false,
          },
        ],
      },
      {
        id: 21,
        question: "Explain the significance of shouldComponentUpdate() in React class components.",
        answers: [
          {
            text: "shouldComponentUpdate() is used to determine the initial state of a React component.",
            correct: false,
          },
          {
            text: "shouldComponentUpdate() decides whether the component should re-render after receiving new props or state.",
            correct: true,
          },
          {
            text: "shouldComponentUpdate() defines the required props for a child component in a React application.",
            correct: false,
          },
          {
            text: "shouldComponentUpdate() controls the context in which a component is rendered in a React application.",
            correct: false,
          },
        ],
      },
      {
        id: 22,
        question: "What is the purpose of using PureComponent in React, and how is it different from a regular component?",
        answers: [
          {
            text: "PureComponent enhances performance by preventing re-renders of the component.",
            correct: false,
          },
          {
            text: "PureComponent implements shouldComponentUpdate() with a shallow prop and state comparison for automatic optimizations.",
            correct: true,
          },
          {
            text: "PureComponent is used for managing global state in React applications.",
            correct: false,
          },
          {
            text: "PureComponent allows defining static methods for React components.",
            correct: false,
          },
        ],
      },
      {
        id: 23,
        question: "Explain the concept of controlled components in React forms and provide an example.",
        answers: [
          {
            text: "Controlled components manage form data within the DOM without relying on React state.",
            correct: false,
          },
          {
            text: "Controlled components use React state to manage form data and synchronize input values with React state.",
            correct: true,
          },
          {
            text: "Controlled components optimize the rendering performance of forms in React applications.",
            correct: false,
          },
          {
            text: "Controlled components prevent form submissions in React applications.",
            correct: false,
          },
        ],
      },
      {
        id: 24,
        question: "What is the purpose of the 'dangerouslySetInnerHTML' attribute in React?",
        answers: [
          {
            text: "It is used to insert raw HTML into React components and can be unsafe due to the risk of XSS attacks.",
            correct: true,
          },
          {
            text: "It provides a safe way to execute JavaScript within React components.",
            correct: false,
          },
          {
            text: "It is used for styling components with inline CSS in React applications.",
            correct: false,
          },
          {
            text: "It allows defining dynamic URLs for routing in React applications.",
            correct: false,
          },
        ],
      },
      {
        id: 25,
        question: "Describe the use case of React.cloneElement() and its functionality.",
        answers: [
          {
            text: "React.cloneElement() is used to create a new React component with the same properties as the original component.",
            correct: true,
          },
          {
            text: "React.cloneElement() is used to remove specific child elements from a React component.",
            correct: false,
          },
          {
            text: "React.cloneElement() is used to apply inline styles to React components.",
            correct: false,
          },
          {
            text: "React.cloneElement() is used to define conditional rendering in React components.",
            correct: false,
          },
        ],
      },
      {
        id: 26,
        question: "What is the purpose of memoization in React, and how does it improve performance?",
        answers: [
          {
            text: "Memoization helps cache the data fetched from APIs to improve network performance in React applications.",
            correct: false,
          },
          {
            text: "Memoization optimizes expensive calculations by caching the results, reducing unnecessary re-computation.",
            correct: true,
          },
          {
            text: "Memoization ensures that all React components are rendered in a memoized order for better performance.",
            correct: false,
          },
          {
            text: "Memoization is used for handling component lifecycle methods in React applications.",
            correct: false,
          },
        ],
      },
      {
        id: 27,
        question: "Explain the purpose of the 'context' API in React and its potential use cases.",
        answers: [
          {
            text: "The 'context' API in React is used to handle form validations in complex applications.",
            correct: false,
          },
          {
            text: "The 'context' API provides a way to pass data through the component tree without having to pass props manually at every level.",
            correct: true,
          },
          {
            text: "The 'context' API defines the access level of certain components within a React application.",
            correct: false,
          },
          {
            text: "The 'context' API is used to define routing configurations in React applications.",
            correct: false,
          },
        ],
      },
      {
        id: 28,
        question: "What is the purpose of the React DevTools browser extension?",
        answers: [
          {
            text: "React DevTools provides a way to style React components directly from the browser console.",
            correct: false,
          },
          {
            text: "React DevTools allows inspecting and debugging React component hierarchies in the browser.",
            correct: true,
          },
          {
            text: "React DevTools is used for profiling network requests in React applications.",
            correct: false,
          },
          {
            text: "React DevTools enables defining custom hooks for React components.",
            correct: false,
          },
        ],
      },
      {
        id: 29,
        question: "Explain the purpose of using portals in React and provide an example scenario where portals are useful.",
        answers: [
          {
            text: "Portals allow rendering React components within a different browser window or iframe.",
            correct: true,
          },
          {
            text: "Portals are used to manage form state across multiple components in React applications.",
            correct: false,
          },
          {
            text: "Portals optimize the rendering performance of complex React components.",
            correct: false,
          },
          {
            text: "Portals enable creating custom hooks for React components.",
            correct: false,
          },
        ],
      },
      {
        id: 30,
        question: "What are the benefits of using PropTypes in React for type checking?",
        answers: [
          {
            text: "PropTypes improve the SEO of React applications by defining specific metadata.",
            correct: false,
          },
          {
            text: "PropTypes prevent potential bugs by specifying the expected data types of component props.",
            correct: true,
          },
          {
            text: "PropTypes optimize the rendering performance of React components by reducing unnecessary re-renders.",
            correct: false,
          },
          {
            text: "PropTypes enhance security measures in React applications by restricting access to certain components.",
            correct: false,
          },
        ],
      },
      {
        id: 31,
        question: "Explain the differences between 'let', 'const', and 'var' in JavaScript when declaring variables.",
        answers: [
          {
            text: "'let' allows variable reassignment within its scope, 'const' declares a constant that cannot be reassigned, and 'var' has function-level scoping.",
            correct: true,
          },
          {
            text: "'let' and 'const' both allow block-level scoping, while 'var' has global scoping.",
            correct: false,
          },
          {
            text: "'let' and 'const' are interchangeable, while 'var' is used for object properties.",
            correct: false,
          },
          {
            text: "'let' and 'const' have the same scoping rules as 'var' but are newer syntax in JavaScript.",
            correct: false,
          },
        ],
      },
      {
        id: 32,
        question: "What are closures in JavaScript and how are they useful?",
        answers: [
          {
            text: "Closures refer to variables being locked within a specific function, restricting access from other functions.",
            correct: false,
          },
          {
            text: "Closures allow functions to access and use variables from their containing scope even after that scope has finished executing.",
            correct: true,
          },
          {
            text: "Closures are used to handle errors in asynchronous JavaScript code.",
            correct: false,
          },
          {
            text: "Closures enable the creation of private methods within JavaScript objects.",
            correct: false,
          },
        ],
      },
      {
        id: 33,
        question: "What is the 'this' keyword in JavaScript and how does its context change?",
        answers: [
          {
            text: "'this' refers to the global object in JavaScript and remains constant within different contexts.",
            correct: false,
          },
          {
            text: "'this' refers to the object to which the current function belongs and its context changes based on how the function is called.",
            correct: true,
          },
          {
            text: "'this' is a reserved keyword in JavaScript and cannot be used as a variable name.",
            correct: false,
          },
          {
            text: "'this' refers to the parent object of a function and is determined by the function's lexical scope.",
            correct: false,
          },
        ],
      },
      {
        id: 34,
        question: "Explain the concept of hoisting in JavaScript and how it affects variable and function declarations.",
        answers: [
          {
            text: "Hoisting refers to JavaScript automatically moving variable and function declarations to the top of their containing scope during compilation.",
            correct: true,
          },
          {
            text: "Hoisting allows declaring variables and functions within block scopes.",
            correct: false,
          },
          {
            text: "Hoisting is a process of optimizing JavaScript code by removing redundant declarations.",
            correct: false,
          },
          {
            text: "Hoisting is a feature that prevents variables from being reassigned in JavaScript.",
            correct: false,
          },
        ],
      },
      {
        id: 35,
        question: "What are the differences between '=='' and '===' operators in JavaScript?",
        answers: [
          {
            text: "'==' checks for equality of values after type coercion, while '===' checks for equality of values and types without coercion.",
            correct: true,
          },
          {
            text: "'==' and '===' are interchangeable operators in JavaScript.",
            correct: false,
          },
          {
            text: "'==' and '===' both perform strict equality checks in JavaScript.",
            correct: false,
          },
          {
            text: "'==' performs a shallow comparison, while '===' performs a deep comparison of objects in JavaScript.",
            correct: false,
          },
        ],
      },
      {
        id: 36,
        question: "Explain the difference between 'null' and 'undefined' in JavaScript.",
        answers: [
          {
            text: "'null' represents an intentional absence of any object value, while 'undefined' indicates a variable that has been declared but not assigned a value.",
            correct: true,
          },
          {
            text: "'null' and 'undefined' are the same and can be used interchangeably in JavaScript.",
            correct: false,
          },
          {
            text: "'null' is used for variables out of scope, while 'undefined' refers to non-existent variables.",
            correct: false,
          },
          {
            text: "'null' and 'undefined' both represent empty values in JavaScript.",
            correct: false,
          },
        ],
      },
      {
        id: 37,
        question: "What are arrow functions in JavaScript, and how do they differ from regular functions?",
        answers: [
          {
            text: "Arrow functions are more concise syntax for writing function expressions and have a lexical 'this' binding.",
            correct: true,
          },
          {
            text: "Arrow functions are exclusively used for asynchronous operations in JavaScript.",
            correct: false,
          },
          {
            text: "Arrow functions cannot access variables from their outer scope.",
            correct: false,
          },
          {
            text: "Arrow functions have mandatory return statements compared to regular functions.",
            correct: false,
          },
        ],
      },
      {
        id: 38,
        question: "Explain the concept of the event loop in JavaScript and its role in asynchronous operations.",
        answers: [
          {
            text: "The event loop is responsible for handling asynchronous operations by executing tasks in a non-blocking manner, allowing efficient utilization of the JavaScript runtime.",
            correct: true,
          },
          {
            text: "The event loop controls the order of synchronous operations in JavaScript and prevents race conditions.",
            correct: false,
          },
          {
            text: "The event loop manages the rendering of UI elements in JavaScript applications.",
            correct: false,
          },
          {
            text: "The event loop determines the error handling mechanism in JavaScript applications.",
            correct: false,
          },
        ],
      },
      {
        id: 39,
        question: "What are promises in JavaScript, and how do they help in managing asynchronous operations?",
        answers: [
          {
            text: "Promises represent a value that may not be available yet, but will be resolved at some point, allowing better handling of asynchronous operations.",
            correct: true,
          },
          {
            text: "Promises are used to convert synchronous functions into asynchronous functions in JavaScript.",
            correct: false,
          },
          {
            text: "Promises ensure that JavaScript functions are executed sequentially and not concurrently.",
            correct: false,
          },
          {
            text: "Promises define the order of execution for callback functions in JavaScript.",
            correct: false,
          },
        ],
      },
      {
        id: 40,
        question: "Explain the concept of object-oriented programming (OOP) in JavaScript.",
        answers: [
          {
            text: "OOP in JavaScript involves creating objects and defining their behavior through methods and properties.",
            correct: true,
          },
          {
            text: "OOP in JavaScript focuses on procedural programming rather than object-centric approaches.",
            correct: false,
          },
          {
            text: "OOP in JavaScript is primarily used for handling UI interactions in web applications.",
            correct: false,
          },
          {
            text: "OOP in JavaScript eliminates the use of classes and inheritance for creating reusable components.",
            correct: false,
          },
        ],
      },
      {
        id: 41,
        question: "Explain the concept of callback functions in JavaScript and provide an example of their usage.",
        answers: [
          {
            text: "Callback functions are functions passed as arguments to other functions to be executed later, typically used in asynchronous operations.",
            correct: true,
          },
          {
            text: "Callback functions are exclusively used for error handling in JavaScript applications.",
            correct: false,
          },
          {
            text: "Callback functions allow direct manipulation of the DOM in JavaScript.",
            correct: false,
          },
          {
            text: "Callback functions are used for defining conditional statements in JavaScript.",
            correct: false,
          },
        ],
      },
      {
        id: 42,
        question: "What are template literals in JavaScript, and how do they differ from regular strings?",
        answers: [
          {
            text: "Template literals are strings enclosed in backticks that allow embedded expressions and multiline strings.",
            correct: true,
          },
          {
            text: "Template literals are strings that cannot contain variables or expressions.",
            correct: false,
          },
          {
            text: "Template literals are used exclusively for defining regular expressions in JavaScript.",
            correct: false,
          },
          {
            text: "Template literals are strings with restricted character length compared to regular strings.",
            correct: false,
          },
        ],
      },
      {
        id: 43,
        question: "Explain the 'spread' operator in JavaScript and provide examples of its usage.",
        answers: [
          {
            text: "The 'spread' operator (...) is used to expand arrays or objects into individual elements or key-value pairs.",
            correct: true,
          },
          {
            text: "The 'spread' operator is used to concatenate strings in JavaScript.",
            correct: false,
          },
          {
            text: "The 'spread' operator is used for bitwise operations in JavaScript.",
            correct: false,
          },
          {
            text: "The 'spread' operator is used to create new arrays without certain elements.",
            correct: false,
          },
        ],
      },
      {
        id: 44,
        question: "What is the purpose of the 'map' function in JavaScript and how is it used?",
        answers: [
          {
            text: "The 'map' function creates a new array by transforming each element of the original array with a provided callback function.",
            correct: true,
          },
          {
            text: "The 'map' function is used to check if any element in an array satisfies a given condition.",
            correct: false,
          },
          {
            text: "The 'map' function is used to remove specific elements from an array in JavaScript.",
            correct: false,
          },
          {
            text: "The 'map' function is used to merge multiple arrays into a single array in JavaScript.",
            correct: false,
          },
        ],
      },
      {
        id: 45,
        question: "Explain the concept of the 'typeof' operator in JavaScript and its use cases.",
        answers: [
          {
            text: "The 'typeof' operator is used to determine the type of a variable or expression in JavaScript.",
            correct: true,
          },
          {
            text: "The 'typeof' operator is used to convert variables from one data type to another in JavaScript.",
            correct: false,
          },
          {
            text: "The 'typeof' operator is used to perform logical operations in JavaScript.",
            correct: false,
          },
          {
            text: "The 'typeof' operator is used to define custom data types in JavaScript.",
            correct: false,
          },
        ],
      },
      {
        id: 46,
        question: "What is object destructuring in JavaScript and how is it used?",
        answers: [
          {
            text: "Object destructuring allows extracting properties from objects and assigning them to variables in a concise syntax.",
            correct: true,
          },
          {
            text: "Object destructuring is a process of creating nested objects in JavaScript.",
            correct: false,
          },
          {
            text: "Object destructuring is used to combine multiple objects into a single object in JavaScript.",
            correct: false,
          },
          {
            text: "Object destructuring is a method for sorting objects based on specific properties in JavaScript.",
            correct: false,
          },
        ],
      },
      {
        id: 47,
        question: "Explain the concept of promises chaining in JavaScript and provide an example.",
        answers: [
          {
            text: "Promise chaining involves linking multiple asynchronous operations together, enabling sequential execution based on resolved promises.",
            correct: true,
          },
          {
            text: "Promise chaining is used to combine synchronous and asynchronous operations in JavaScript.",
            correct: false,
          },
          {
            text: "Promise chaining is a mechanism to catch errors in asynchronous operations.",
            correct: false,
          },
          {
            text: "Promise chaining is used for defining global variables across multiple promises in JavaScript.",
            correct: false,
          },
        ],
      },
      {
        id: 48,
        question: "Describe the concept of object prototypes in JavaScript and their role in inheritance.",
        answers: [
          {
            text: "Object prototypes allow objects to inherit properties and methods from other objects, forming a prototype chain.",
            correct: true,
          },
          {
            text: "Object prototypes define static methods for JavaScript objects.",
            correct: false,
          },
          {
            text: "Object prototypes prevent the modification of existing object properties in JavaScript.",
            correct: false,
          },
          {
            text: "Object prototypes solely deal with defining object constructors in JavaScript.",
            correct: false,
          },
        ],
      },
      {
        id: 49,
        question: "What are the differences between 'setTimeout' and 'setInterval' functions in JavaScript?",
        answers: [
          {
            text: "'setTimeout' executes a function after a specified delay, while 'setInterval' repeatedly executes a function at specified intervals.",
            correct: true,
          },
          {
            text: "'setTimeout' and 'setInterval' perform the same task with varying syntax in JavaScript.",
            correct: false,
          },
          {
            text: "'setTimeout' is used for asynchronous operations, while 'setInterval' is for synchronous operations.",
            correct: false,
          },
          {
            text: "'setTimeout' and 'setInterval' both execute functions immediately without any delay.",
            correct: false,
          },
        ],
      },
      {
        id: 50,
        question: "Explain the concept of async/await in JavaScript and their usage with promises.",
        answers: [
          {
            text: "Async/await is syntactic sugar for working with promises, allowing asynchronous code to be written in a more synchronous style.",
            correct: true,
          },
          {
            text: "Async/await is used for defining global variables within async functions in JavaScript.",
            correct: false,
          },
          {
            text: "Async/await is a replacement for try/catch blocks in JavaScript error handling.",
            correct: false,
          },
          {
            text: "Async/await is used to create nested promise chains in JavaScript.",
            correct: false,
          },
        ],
      },
  ];

  data.forEach(question => {
    question.answers = shuffleArray(question.answers);
  });
  
  function shuffleArray(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  const shuffledData = shuffleArray(data);
  
  shuffledData.forEach(question => {
    question.answers = shuffleArray(question.answers);
  });
  
  export default shuffledData;
  