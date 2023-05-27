import React from 'react';
import "./Questions.css";


const Questions = () => {
    return (
        <div className='questions my-5 w-75 me-auto ms-5'>
            <h1>Questions: </h1>
            <div className="accordion mt-4" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How Does React Js Work?
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        React Js is Javascript library that helps user build front-end interfaces using a component-based approach. Basically, react js uses a virtual dom to efficientl update and render components.When something changes on the UI this virtual DOM compares(under the hood) the differences using <code>diff algorithm</code> and re-renders the ui accordingly. Also react supports JSX which gives a syntactic sugar to HTML that makes the code cleaner and easier to understand.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Difference Between Props and State?
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        In react js props and state are both used for data managing and passing but both are different in usage and working.

                       <ul>
                         <li>
                            Props (short for properties) are passed from parent components to child components with some fixed data that are read-only to the child component.
                        </li>
                        <li>
                            State, on the other hand, is managed within a component and used for data storing that can be changed. The state is changed using setState function.
                        </li>
                       </ul>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        What other things does useEffect do other than loading data?
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <h3>Other uses of useEffect besides loading data:</h3>
                        <ul>
                            <li>useEffect can be used to listen to event-handlers like mouse-movement, keyboard-input, window-reload etc and can re-render the ui.</li>
                            <li>
                                useEffect can be used to start and stop timers or intervals for tasks like animations, timeouts ect.
                            </li>
                            <li>
                                useEffect allows to integrate with external libraries and frameworks.
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;