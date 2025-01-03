export const aboutHtml = [
    
  {
    question: `What is the target="_blank" attribute used for in a link?`,
    answer:`The target="_blank" attribute is used in an anchor (<a>) tag to open the linked document in a new browser window or tab. Example: <a href="https://www.example.com" target="_blank">Click Here</a>.`,
  },
  {
    question: `What is the <head> section in HTML used for?`,
    answer:`The <head> section contains meta-information about the document, such as the title, character set, link to stylesheets, and script files. Example: <head>
  <title>Page Title</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
</head>`,
  },
  {
    question: "What are the differences between <b> and <strong> tags?",
    answer: "",
    item: [
      {
        name: "<b>",
        description:
          " Represents bold text without adding any semantic meaning.",
      },
      {
        name: "<strong>",
        description: "Represents bold text with added emphasis, implying that the text is important.",
      }
      
    ],
  },
  
  {
    question: `What is the action attribute in the <form> tag?`,
    answer:`The action attribute specifies the URL to which the form data will be sent when the form is submitted. Example: <form action="submitForm.php" method="post">`,
  },
  {
    question: `What is the <script> tag used for?`,
    answer:`The <script> tag is used to include JavaScript in an HTML document. It can be placed in the <head> or at the end of the <body> tag. Example: <script src="script.js"></script>`,
  },
  {
    question: `What is the <link> tag used for in HTML?`,
    answer:`The <link> tag is used to define relationships between the current document and external resources. It is most commonly used to link external CSS files. Example:<link rel="stylesheet" type="text/css" href="styles.css">`,
  },
  
  {
    question: "What are HTML tags?",
    answer:
      "HTML tags are the building blocks of HTML. Tags are used to define elements in an HTML document. They are enclosed in angle brackets, e.g., <h1>, <p>, <a>. Tags usually come in pairs: an opening tag and a closing tag, like <p> and </p>.",
  },
  {
    question: "What are semantic elements in HTML?",
    answer:
      "Semantic elements are HTML tags that clearly describe their meaning in a web page’s structure. Examples include <header>, <footer>, <article>, <section>, and <nav>. These elements make the code more readable and accessible.",
  },
  {
    question: "What is the DOCTYPE declaration in HTML?",
    answer:
      "The DOCTYPE declaration is used to specify the HTML version being used in a document. It is placed at the top of an HTML document before the <html> tag. Example: <!DOCTYPE html> for HTML5.",
  },
  {
    question: "What is the purpose of the <meta> tag in HTML?",
    answer: `The <meta> tag is used to specify metadata for the HTML document, such as character set, page description, author, and keywords for search engines. Example: <meta charset="UTF-8"> specifies the character encoding.`,
  },
  {
    question: "What are the new features of HTML5?",
    answer: "Some of the new features introduced in HTML5 include:",
    item: [
      {
        name: "Semantic Elements",
        description:
          "New semantic elements like <article>, <section>, <header>, <footer>, <nav>.",
      },
      {
        name: "Multimedia elements",
        description: "Multimedia elements like <audio>, <video>.",
      },
      {
        name: "Web Storage API",
        description: "Local storage and session storage (Web Storage API).",
      },
      
    ],
  },
  {
    question: "What is the use of the alt attribute in <img> tag?",
    answer: `The alt attribute provides alternative text for an image if it cannot be displayed. It is also used by screen readers to describe the image for visually impaired users. Example: <img src="image.jpg" alt="Description of the image">.`,
  },
  
  
  {
    question: "What is the difference between class and id in HTML?",
    answer: "",
    item: [
      {
        name: "Class",
        description:
          " Can be used to apply the same styles or functionality to multiple elements. It is not unique and can be used for several elements on the same page.",
      },
      {
        name: "ID",
        description:
          "Must be unique within a page and is used to identify a single element. Only one element should have a specific id value.",
      },
    ],
  },

  {
    question: "What are the different types of lists in HTML?",
    answer: "There are three types of lists in HTML:",
    item: [
      {
        name: "Ordered List  (<ol>) ",
        description:
          " Lists with a defined order, usually displayed with numbers.",
      },
      {
        name: "Unordered List (<ul>)",
        description:
          "Lists without a specific order, usually displayed with bullets.",
      },
      {
        name: "Definition List (<dl>)",
        description: "Lists of terms and their descriptions",
      },
    ],
  },

  {
    question: " What is the difference between HTML and XHTML?",
    item: [
      {
        name: "HTML",
        description:
          "HTML is a markup language used to create web pages, and it doesn't enforce strict syntax rules.",
      },
      {
        name: "XHTML",
        description:
          "XHTML (Extensible HTML) is a stricter version of HTML. It follows XML syntax rules, meaning tags must be properly nested, closed, and written in lowercase.",
      },
    ],
  },
  {
    question: " What is the difference between <div> and <span>?",
    item: [
      {
        name: "DIV",
        description:
          "A block-level element used to group large sections of HTML content. It takes up the full width of its container.",
      },
      {
        name: "SPAN",
        description:
          "An inline element used for grouping small portions of text or other inline elements.",
      },
    ],
  },

  
];
