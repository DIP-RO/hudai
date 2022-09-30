import React, { useState } from "react";

import dimaria from "../images/dimaria.jpg";
import neymar from "../images/neymar.jpg";
import embappe from "../images/embappe.jpg";
import ramos from "../images/ramos.jpg";
import marquinhos from "../images/marquinhos.jpg";
import kimpembe from "../images/kimpembe.jpg";


const Card = () => {
  const [total, setTotal] = useState(0);
  const [Sum, setSum] = useState(0);

  return (
    <div>
      <div className="body">
        <div className="card-container">
          <h1 className=" text-primary">MY SIX FAV PLAYERS</h1>
          <h3>Sign best players</h3>
          <div className="card-style">
            <div className="bg-white">
              <img className="card-body" src={neymar} alt="" />
              <h6>Neymar</h6>
              <p>
                Neymar is my favourite player. in my eyes he is the most skillfu
                player.
              </p>

              <p>practices:120 min</p>
              <button
                onClick={() => setTotal(total + 120)}
                className=" sector bg-primary text-white border border-primary mb-2 w-75"
              >
                add to list
              </button>
            </div>
            <div className="bg-white">
              <img className="card-body" src={embappe} alt="" />
              <h6>Embappe</h6>
              <p>
                Embappe is my favourite player. in my eyes he is the most
                skillfu player.
              </p>

              <p>practices:120 min</p>
              <button
                onClick={() => setTotal(total + 120)}
                className=" sector bg-primary text-white border border-primary mb-2 w-75"
              >
                add to list
              </button>
            </div>
            <div className="bg-white">
              <img className="card-body" src={dimaria} alt="" />
              <h6>Dimaria</h6>
              <p>
                Dimaria is my favourite player. in my eyes he is the most
                skillfu player.
              </p>

              <p>practices:120 min</p>
              <button
                onClick={() => setTotal(total + 120)}
                className=" sector bg-primary text-white border border-primary mb-2 w-75"
              >
                add to list
              </button>
            </div>
            <div className="bg-white">
              <img className="card-body" src={ramos} alt="" />
              <h6>Ramos</h6>
              <p>
                Ramos is my favourite player. in my eyes he is the most skillfu
                player.
              </p>

              <p>practices:120 min</p>
              <button
                onClick={() => setTotal(total + 120)}
                className="sector bg-primary text-white border border-primary mb-2 w-75"
              >
                add to list
              </button>
            </div>
            <div className="bg-white">
              <img className="card-body" src={marquinhos} alt="" />
              <h6>marquinhos</h6>
              <p>
                marquinhos is my favourite player. in my eyes he is the most
                skillfu player.
              </p>

              <p>practices:120 min</p>
              <button
                onClick={() => setTotal(total + 120)}
                className="sector bg-primary text-white border border-primary mb-2 w-75"
              >
                add to list
              </button>
            </div>
            <div className="bg-white">
              <img className="card-body" src={kimpembe} alt="" />
              <h6>Kimpembe</h6>
              <p>
                kimpembe is my favourite player. in my eyes he is the most
                skillfu player.
              </p>

              <p>Practices:120 min</p>
              <button
                onClick={() => setTotal(total + 120)}
                className=" sector bg-primary text-white border border-primary mb-2 w-75"
              >
                add to list
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <h4 className="mt-3">Dipro Paul</h4>
          <p>Barisal,Bangladesh</p>
          <div className="intro container m-2">
            <div>
              <h5>70kg</h5>
              <p>weight</p>
            </div>
            <div>
              <h5>6 Feet</h5>
              <p>height</p>
            </div>
            <div>
              <h5>23yrs</h5>
              <p>age</p>
            </div>
          </div>
          <h5 className="mt-5">Add a Break</h5>
          <div className="break container m-2">
            <button
              onClick={() => setSum(10)}
              className="border border-white-radius-5 m-1"
            >
              10s
            </button>
            <button
              onClick={() => setSum(20)}
              className="border border-white-radius-5 m-1"
            >
              20s
            </button>
            <button
              onClick={() => setSum(30)}
              className="border border-white-radius-5 m-1"
            >
              30s
            </button>
            <button
              onClick={() => setSum(40)}
              className="border border-white-radius-5 m-1"
            >
              40s
            </button>
            <button
              onClick={() => setSum(50)}
              className="border border-white-radius-5 m-1"
            >
              50s
            </button>
          </div>
          <h5 className="mt-5">Practice details</h5>
          <div className="count container m-2">
            <p>practice time:{total}min</p>
          </div>
          <div className="count container m-2">Break time:{Sum}sec</div>
          <button className="mt-5 bg-primary text-white border border-primary w-75 last">
            Activity completed
          </button>
        </div>
      </div>
      <div className="container mt-3 bg-info">
        <h1>Question and Answer</h1>
        <h3>1.How does React work?</h3>
        <p>
          While building client-side apps, a team of Facebook developers
          realized that the DOM is slow (The Document Object Model (DOM) is an
          application programming interface (API) for HTML and XML documents. It
          defines the logical structure of documents and the way a document is
          accessed and manipulated.). So, to make it faster, React implements a
          virtual DOM that is basically a DOM tree representation in JavaScript.
          So when it needs to read or write to the DOM, it will use the virtual
          representation of it. Then the virtual DOM will try to find the most
          efficient way to update the browser’s DOM. Unlike browser DOM
          elements, React elements are plain objects and are cheap to create.
          React DOM takes care of updating the DOM to match the React elements.
          The reason for this is that JavaScript is very fast and it’s worth
          keeping a DOM tree in it to speed up its manipulation.
        </p>
        <h3>2.State Vs. Props</h3>
        <p>
          State: The state is an updatable structure that is used to contain
          data or information about the component and can change over time. The
          change in state can happen as a response to user action or system
          event. It is the heart of the react component which determines the
          behavior of the component and how it will render. A state must be kept
          as simple as possible. It represents the component's local state or
          information. It can only be accessed or modified inside the component
          or by the component directly.
        </p>
        <p>
          Props: Props are read-only components. It is an object which stores
          the value of attributes of a tag and work similar to the HTML
          attributes. It allows passing data from one component to other
          components. It is similar to function arguments and can be passed to
          the component the same way as arguments passed in a function. Props
          are immutable so we cannot modify the props from inside the component.
        </p>
        <h3>3.A Simple Explanation of React.useEffect()</h3>
        <p>
          useEffect(callback, dependencies) is the hook that manages the
          side-effects in functional components. callback argument is a function
          to put the side-effect logic. dependencies is a list of dependencies
          of your side-effect: being props or state values.
        </p>
        <p>
          Side-effect cleanup: After initial rendering, useEffect() invokes the
          callback having the side-effect. cleanup function is not invoked. On
          later renderings, before invoking the next side-effect callback,
          useEffect() invokes the cleanup function from the previous side-effect
          execution (to clean up everything after the previous side-effect),
          then runs the current side-effect. Finally, after unmounting the
          component, useEffect() invokes the cleanup function from the latest
          side-effect.
        </p>
        <p>
          useEffect() is for side-effects: A functional React component uses
          props and/or state to calculate the output. If the functional
          component makes calculations that don't target the output value, then
          these calculations are named side-effects.
        </p>
        <p>
          Fetching data: useEffect() starts a fetch request by calling
          fetchEmployees() async function after the initial mounting. When the
          request completes, setEmployees(fetchedEmployees) updates the
          employees state with the just fetched employees list.
        </p>
      </div>
    </div>
  );
};

export default Card;
