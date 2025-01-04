import React from "react";
import { useParams } from "react-router-dom";

const HookPage = () => {
  const { hookname } = useParams();
  console.log(hookname);

  const hookInfo = [
    {
      title: "useState",
      question: "What is useState?",
      answer:
        "The useState hook is a built-in React function that allows functional components to manage state. It provides a way to add local state to functional components, replacing the state object and setState method used in class components.",
      syntax: "const [state, setState] = useState(initialValue)",
      points: [
        { name: "state", desc: "The current state value." },
        { name: "setState", desc: "A function to update the state." },
        {
          name: "initialValue",
          desc: "The initial value of the state. It can be of any data type (number, string, object, array, etc.).",
        },
      ],
      subTitle: [
        { name: "Key Features" },
        { name: "Frequently Asked Questions" },
        { name: "Rules of useState" },
        { name: "Syntax" },
      ],
      features: [
        {
          name: "Preserves State Between Renders",
          desc: "The state persists across renders and updates when changed.",
        },
        {
          name: "Triggers Re-Renders",
          desc: "Changing the state with setState triggers a re-render of the component.",
        },
        {
          name: "Independent State",
          desc: "Each useState call is independent, allowing multiple states in a single component.",
        },
      ],
      rules: [
        {
          name: "Call at the Top Level",
          desc: [
            "Do not call useState inside loops, conditions, or nested functions.",
            "Always call it at the top level of the component.",
          ],
        },
        {
          name: "Initialize Only in Functional Components",
          desc: [
            "useState can only be used in functional components or custom hooks.",
          ],
        },
        {
          name: "State Persistence",
          desc: [
            "State is preserved between renders and resets only when the component unmounts.",
          ],
        },
      ],
      freqQuestions: [
        {
          question: "Can I use multiple useState calls in a component?",
          answer:
            "Yes, each useState call creates independent state variables.",
        },
        {
          question:
            "Does useState merge state like setState in class components?",
          answer: "No, useState replaces state instead of merging it.",
        },
        {
          question: "Why does useState use a functional update?",
          answer:
            "Functional updates ensure the state update logic works correctly with asynchronous or batched state updates.",
        },
        {
          question: "How can I reset state to its initial value?",
          answer: "Use setState(initialValue) to reset the state manually.",
        },
      ],
    },
  ];

  return <div>HookPage</div>;
};

export default HookPage;
