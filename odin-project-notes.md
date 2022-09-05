Concepts from Previous Lessons

"-" is used to write stuff found in Lesson Overview part of Odin pages
"-*" is used to write extra stuff I want to look into that I found in those pages that wasn't explicitly taught

Foundations




Javascript Fundamentals 2 (Datatypes, booleans, comparisons, and condiitonals)
    -https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-2
        -Data Types
        - Mathematical operations (+, -, *, /, %, **, += (vs =+ and =-), -=, + or - to variables)
        -Null vs Undefined
        -single, double, and backtick quotes
        -embedding variables in a string
        -'escaping' characters in a string
        -slice/substring/substr string methods
        -&&, ||, and ! (logical operators)
        - !=. ===. >=, <=, <, > (comparison operators)
        -truthy and falsy values ("", null, undefined, and 0 are falsy)
        -if-else, else-if, switch-case-break (easier version of else if); 
        -using ? instead of if-else
        -nesting
Javascript Developer Tools
    -https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/javascript-developer-tools
        - Changing the DOM
        - REPL (Read Evaluate Print Loop)
        - Debugging Javascript
        - Using breakpoints
        - Editing HTML Elements in tab
        - Resources Panel- Runnign Scripts
        - Adding CSS Pseudostate, CSS Properties in Alphabetical Orders
        - Editing the Box Model Chrome Dev Tools
        - View a page in print mode
        - Enable/Disable CSS Classes
        - Simulate Media Queries in Device Mode
        -* document.querySelector('[insert HTML element here]')
        -* https://developer.chrome.com/docs/devtools/console/javascript/ --> (Run Javascript in Console; 
            -* To change text in HTML --> document.getElementById('[id name]').textContent = 'New String')
            -* Simple addition functions (http://es6-features.org/#DefaultParameterValues)
            -* https://developer.chrome.com/docs/devtools/console/log/ --> Change Chrome Devtools to Seperate Window, 
                -* console.log, console.info, console.warn, console.error, etc...
                -*debug(insert function name here)

        -* 14 Must Know Chrome Dev Tricks: https://www.youtube.com/watch?v=xkzDaKwinA8
            -* console.assert --> Line of code only runs if statement is true
            -* console.dir(element)--> shows you all attributes, classes, styles, scripts of a particular element
            -* console.count() tells you how many times an object was run
            -* console.time() --> tells you how long it takes script to run


Javascript Fundamentals 3 (Functions)
    -https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-3
        -Define and invoke different kinds of functions
            -*Optional Parameters/Default Parameters for functions, Anonymous Functions (not hoisted), Arrow Functions
            -* (Making textboxes in HTML via the form element) --> https://www.w3schools.com/html/html_forms.asp
            -*textbox.addEventListener(`name of event`, function_to_use);
            -* Function Parenthesis -> https://www.codecademy.com/forum_questions/54bfd1c351b887e95c0017f3 for 
            'function() {}`, the word after `function` is the function's name, the curly braces contain whatever code you want the function to always pass, while the parenthesis contains whatever INPUT PARAMETERS the function will be working with and is expecting. for example--> function addThree(number) {console.log(number + 3)}; addThree(7)---> 
            in this example, 'number' represents the variable that you will put inside the function parenthesis when you call it again, but it could have been called 'x' or 'y', not just 'number'. you call it number so you know what to normally put in the function when calling it via code.
            -* Good explanation of function biology --> https://www.tabnine.com/academy/javascript/how-to-use-functions-in-javascript/
            -* in function name(parameter1, parameter2, parameter3) {}; the commas seperate all the different parameters required for the function. in function name(parameter1=1) {}; the equal sign allows you to set a default parameter for the function to use if you invoke that function in the future and no parameter was specified. --> https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#default_parameters
        -* How the `return` statement works --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
        -* Default input text of prompt() --> https://www.w3schools.com/jsref/met_win_prompt.asp
        -* For long return statements, you need to put everything in () and add a ; after
        -* Callback functions allow you to define functions that have parameters that can be replaced with even newer functions later down the road. However, when making a function, you can just make the parameters of that function **functions**, but they will be anonymous (https://javascript.info/function-expressions)
            -* confirm() function 
        -* Arrow functions return function results for you without using brackets and without having to type the word `function`. However, multiline arrow functions still require 'return'

        -Use the return value
        -Explain function scope

Problem Solving
    -(https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/problem-solving)
    -Explain the three steps in the problem solving process;
    -Explain what pseudocode is and be able to use it to solve problems
    -Be able to break a problem down into subproblems
    -*Steps of Problem Solving
        -Understand the problem- write it down in plain English
        -Plan- Inputs? Ouputs? User interface? Steps that take Input and Creates Output (aka Algorithm)
        -Pseudocode- Writing Out Code Logic in Natural Language instead of code through steps
        -Divide and Conquer- Turn problems into rally small subproblems, and work on the smaller subproblems first
        -* once a function is returned, you cannot edit it anymore because 'returning' a function exits the function permanetly
    -* for loop--> for(let i = 1; i <= answer; i++) {..loop code..}
        *-i is the variable determining the for loop, i=1 the is initial value of this determining variable, i <= answer is the final value to reach for the loop to stop, and i++ is what the loop does every iteration (increment by one)


Error Messages
    -(https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/understanding-errors)
    -Identify at least 3 Types of Javascript Errors (Syntax Errors, Type Errors, Reference Errors);
    Identify two parts of an error message that help you find where the error originates (Name of the file name, stack trace);
    -Be able to understand how to research and reoslve errors
    -*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        -* Math.random(); - generates a random decimal number between 0 and 1;
        -* Math.floor(); rounds whatever is in the parenthesis down to nearest integer (alternate round-up version is Math.ceil();)
    -* document.querySelector(`.class-of-html-element-to-change`)
    -* https://www.w3schools.com/tags/tag_input.asp
        Submit buttons, labels, etc
    -* Recursion Basics
        -*https://www.programiz.com/javascript/recursion


Function Scope
    -* https://www.youtube.com/watch?v=SBwoFkRjZvE&ab_channel=LearnCode.academy
    -*https://ultimatecourses.com/blog/everything-you-wanted-to-know-about-javascript-scope


Clean Code 
    -https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/clean-code
        -Know how to distinguish hard hard to read code from easy to read code
        -Use programming principles to make your code cleaner
        -write good comments
    -https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/
        -* Use 2 tabs to break up extremely long lines
Installing NODE.JS
    -https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/installing-node-js
        -* press 'node' in the terminal to run the Node console, which lets you run js in the terminal without needing to open the browser

Fundamentals Part 4 (Arrays, Loops, Test Driven Development)
    -https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-4
        -Arrays- https://www.w3schools.com/js/js_arrays.asp
        -* Arrays are similiar to objects. While arrays use array_name[0] to access its `elements`, objects use curly brackets and descriptors to name its `members` and  can be used to create objects with  different descriptive characteristics (example const aotMaincharacter = {firstName:'Eren', lastName:'Jaegar', Titan:`Attack Titan`}; aotMaincharacter.firstName = `Eren` )
            -Arrays have elements. Objects have `members`
        -Arrays are special types of objects, but arrays should be referred to as arrays
        -Arrays can have functions, objects, and even more arrays
        -*Looping through arrays or other collections 
            -*https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code
            -* for (const individualItem of arrayOfitems) {}; This creates a loop that performs activities within the curly brackets on every item in the array starting from [0]
            -* const new_array = old_array.map(function); --> map() allows tou to create a new array that is simply the old array with a function running through it. Values are returned.  Old and new array still exist.
            -* const newString = oldString.filter(conditional_function); a loop that makes a new array that includes items from the original only if they fulfill the boolean conditions for the function
        -Javascript.info- Loops: while and for
            -https://javascript.info/while-for
                -while- condiiton is checked before each iteration
                -do while- condition is checked after each iteration- the function must run at least once
                -for- condition is checked before each iteration, but additional settings are available
                -break loop- uses and if statement- if the if condition is met, the loop stops
                -continue loop- uses an if statement- if the condition is met, the loopp skips over that specific iteration and continues running the loop
                -*? mark fo if/then statement does not work with break and continue
                -* Breaks or continues can be used to make a loop stop when a prompt input is not defined (ie, let value; if (!value) break;
                -* For, do..while, and while loops can be recieve a label prior to calling them, and a break <label Name> or continue<label Name> can be used to break or continue a specifically identified loop. Good for breaking out of the most outer-nested loop. See above link for details.
                -* Alternative text for prompt function --> https://www.w3schools.com/jsref/met_win_prompt.asp
                -* When creating loops that involve the prompt function, remember that you need to make sure the variable is true via an && so that pressing cancel doesn't restart the loop (see repeat until the input is correct example)
        -* Javascript Rest Parameters- https://www.javascripttutorial.net/es6/javascript-rest-parameters/


DOM Manipulation and Events
    -https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/dom-manipulation-and-events
    -DOM Manipulation and Events
    -Explain what the DOM is in relation to a webpage
    -Explain the difference between a node and an element
    -Explain how to target nodes with `selectors`
    -Explain the basic methods for finding/adding/removing and altering DOM nodes
    -Explain the difference between a `nodelist` and an array of `nodes`
    -Explain what `bubbling` is and how it works
    -const var = element.querySelector(selector) -> returns references to the first match of selector and puts it into var
    -const var = element.querySelectorAll(selector)- returns a `nodelist` containing references to all of the matches of selectors and puts it into var
    -const var = document.createElement(`element`);
        -* Doesnt put new element into DOM, simply stores the HTML element created into the variable var
        -* to actually put it into DOM, use parentNode.appendChild(childNode); to put childNode at the end of parentNode
        -* parentNode.insertBefore(newNode, referenceNode);
        -* parentNode.removeChild(child) --> removes child from parentNode on DOM and returnss a reference to child
    -* const divVariable = document.createElement(`element`);
        -* divVariable.setAttribute(`style`, `color: blue; background-color: yellow');
            -* Allows to change the CSS of the elements inside variable divVariable
        -* divVariable.setAttribute(`id`, `theDiv`);
            -* whatever element inside variable divVariable now has the HTML id=theDiv
            .getAttribute returns the stated attribute, and .removeAttribute removes it

    -* divVariable.classList.add(`new`); divVariable.classList.remove(`new`); divVariable.classList.toggle(`active`);
        -* adds class from elements in divVariable, removes class from elements in divVariable, respecively. For toggle, if divVariable's elements dont have class `active` in them, then add it, and if it does, then remove it
        -* Use to change properties of divs based on event linking (see below)
    -* divVariable.textContent = `Hello World`;
        -* creates a text node containing `Hello World` and inserts it into divVariable
    -* PREFERRED WAY TO ADD JAVASCRIPT TO FILE, SINCE HTML RENDERS DATA FROM TOP TO BOTTOM:
        -* <head>
            <script src="js-file.js" defer></script>
        </head>
    
    -* Main way of Adding Events via Javascript
        -* const btn = document.querySelector(`#btn`);
        btn.addEventListener(`click`, () => {
            alert(`Hello World`);
        });
        -* Can use named functions
        -*btn.addEventListener(`click`, function(e) {
            console.log(e);
        });
            -* The e parameter, if used in a function you are creating, is an object that represents EVERY ASPECT OF THE EVENT (in this case, the `click` event). So in the above example, the function with e as a parameter will console.log everything about the click event, including what DOM element was clicked, what happened when it was clicked, whether it was right or left clicked, etc
            -*console.log(e.target) --> console logs the DOM element that the event occured on, which in this case, is the DOM element that was clicked on--> the DOM within const btn, which is the <div id="btn"> 
            -* e.target.style.background = `blue`; ---> Something like this can be put into a function within an addEventListener to change the button in const btn to blue background
        -* List of events: click, dblclick, keypress, keydown, keyup, TRANSITIONEND, and many more


        -*Attaching Listeners to a Group of Nodes

            <div id="container">
                <button id="1">Click Me</button>
                <button id="2">Click Me</button>
                <button id="3">Click Me</button>
            </div>

            // buttons is a node list. It looks and acts much like an array.
                const buttons = document.querySelectorAll('button');

                // we use the .forEach method to iterate through each button
                buttons.forEach((button) => {

                // and for each one we add a 'click' listener
                button.addEventListener('click', () => {
                    alert(button.id);
                });
                });


    -*https://www.youtube.com/watch?v=VuN8qwZoego&ab_channel=WesBos
        -*transition Css property for animation
        -* window.addEventListener(`keydown`, () => {}); Looks for a `keydown` event in the entire WINDOW
        -* each button on keyboard has a keycode
        -*window.addEventListener(`keydown`, function(e) {
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
            console.log(audio);
            });
            -* for querySelector(`element[class=""]`); this can be used to select specific classes, id or data-* for DOM elements
            -* data-* essentially allows you to make your own specific ids for DOM elemeents
            -* using `` and ${e} allows you to use the e event object that is initiated under the eventListener and select a DOM element that has the same class attribute as whatever the event you intiated was
            

    -* <audio src=""></audio> --> audio tags
        -*audio.play();
        -*audio.currentTime = 0;
    -* Transition CSS Attribute 
        -*https://developer.mozilla.org/en-US/docs/Web/CSS/transition
        -* Affects how an element changes between two states changes (in this case, the use of Javascript to add a class to an element temporarily while an event is initiated. Can also be done with pseudo classes like :hover or :active)
        /* property name | duration | easing function | delay */
        transition: margin-right 4s ease-in-out 1s;

        /* Apply to 2 properties */
        transition: margin-right 4s, color 1s;
    -* Transform CSS : https://developer.mozilla.org/en-US/docs/Web/CSS/transform
        -* Matrix, translate, scale, rotate, skew
    -*border shadow (for shining shadows of borders)
    -*The importance of THIS
        const keys = document.querySelectorAll(`.key`);
        keys.forEach(key => key.addEventListener(`transitionend`, removeTransition));
        function removeTransition(e) {
            if (e.propertyName !== `transform`) {
            return;
            };
            this.classList.remove(`playing`);
            //`this` refers to the variable that the addEventListener is
            //being attached to, which in this case, is the variable `key`, which in turn holds the <div class="key"> element
            //to use `this` in a function, e MUST be a parameter in the function because, to target the variable being affected by the event, the event must be what is used in the function
        }

    -* Wes Bos--> Event Capture, Propogation, and Bubbling
        -* https://www.youtube.com/watch?v=F1anRyL37lE&ab_channel=WesBos
        -* Event Capture-> outer most parent element to child element 
        -* capture: false is the default
        -* Bubble --> inner most child element to outer parent element 
        -* e.stopPropogation(); --> prevents bubbling up (when capture: false, it is good for focusing on just the child element only, but also works when capture is on to isolate just the parent element)
        -* once: true; --> is essentially var.removeEventListener(); removes the previous addEventListener once the original addEventListener has been activated, only allowing the event to occur once (useful for making buttons that only work once, link in shopping cart purchases)


Javascript Fundamentals Part 5
    -https://www.theodinproject.com/lessons/foundations-fundamentals-part-5
        -Creating Objects
        -Accessing Object Properties
        -Being able to use multiple object operators
        -Being able to use some powerful array functions
        -Objects (Javascript.info)--> https://javascript.info/object
            -Questions: 
                -Square brackets also prive a way to obtain property name as the result of an expression?
                -Square brackets and complex variable expressions? Addition of string in brackets...
                -The use case of making a property from a variable
                -0 and propery names
                - _proto_ ?
                -Quotes vs variables when using for property existence in test ?
                -Storing undefined?
                -How is the word `key` used when making object properties? Is it a reserved word?
                -Integer properties
            -*Object Creations
                -* let user = new Object(); --> object constructor syntax
                -* let user = {}; --> object literal syntax
            -* Object Literals and Properties
                -* let user = {
                    name: "John",
                    age: 30,
                    isAdmin: false,
                    "likes birds": true,
                }; --> name and age are keys, which have to be strings. The keys store values, which in this case are "John" or 30, which can be any type of data. The variable user is now an object that holds the properties name and age. 
            -* Add new key properties after an object has been declared
                -* let goku = {}; goku.transformation = "Kaio-Ken"; goku["power level"] = "over 9000!!"; // This is how you add new keys and properties to an already made object
                -* alert(user.name);// returns the value for the key name in object user, which is John
                -* alert(user["likes birds"]);// returns the value for the key "likes birds", which is true. strings with spaces need keys that are written in "" when they are declared as literals and can only be called with [" "].
                -* delete user.age;// Use to delete a  property
            -* Extended Use of Square Brackets
                -* Square brackets can be used to make variables return the values for pre-established keys of an object (property key names can be put in variables, and those variables can be called as a property of an object)if 1) the data the variable holds is a preestablished key in the object in question and 2) if the variable is called as a property of the object through [] and not . .
                    -* let user = {}; user["likes birds"] = true; let varCheck = "like birds";          alert(user[varCheck]); //returns true
                    -* Another example
                        -* let user = {
                            name: "John",
                            age: 30
                            };

                            let key = prompt("What do you want to know about the user?", "name");

                            // access by variable
                            alert( user[key] ); // John (if enter "name")
                -* Computed Properties
                    -* [fruit] means that the key/property name should be taken from what the value of the variable fruit is, which, if the prompt is left unchanged, is apple
                    VARIABLES CAN HOLD PROPERTY NAMES AKA KEYS, AND YOU CAN CALL THOSE VARIABLES AS PROPERTIES OF OBJECTS INSTEAD OF WRITING OUT THE PROPERTY NAME
                    -* let fruit = prompt("Which fruit to buy", "apple");
                        let bag {
                            [fruit]: 5; //name/key of the property is taken from the variable fruit
                        }
                        alert(bag.apple); // returns 5 if the propmpt was named apple

                -* Property value shorthand
                    -* If you are creating a function that accepts parameters that have the same name as the property names/keys, and those parameters hold the values that you want to assign to those property names/keys, just use commas.
                    -* function makeUser (name, age) {
                        return {
                            name,
                            age,
                        };
                    }
                    let user = makeUser("John", 30);
                    alert(user.name); //John
                    alert(user.age); //30
                -* Property Name Limitations
                    -* Property Names can be anything
                    -* QUESTION--> WHAT IS _proto_???
                -* Property Existence Test, "in" operator
                    -* let user = { name: "John", age: 30 };
                        alert( "age" in user ); // true, user.age exists
                        alert( "blabla" in user ); // false, user.blabla doesn't exist
                    -* let user = { age: 30 };
                        let key = "age";
                        alert( key in user ); // true, property "age" exists

                -* "For...in" loops and Objects
                    -* Allow you to create expressions that run as you loop through an object's property names/keys. Within the () of the for loop, you declare a variable that contains all of the keys within the object you are looping through (Similiar to an array's for loop);
                    -* let user = {
                        name: "John",
                        age: 30,
                        isAdmin: true
                        };

                        for (let key in user) {
                        // keys
                        alert( key );  // name, age, isAdmin
                        // values for the keys
                        alert( user[key] ); // John, 30, true
                        }
                -* Order of property names/keys in an Object when looped through or listed
                    -* Property names/keys are looped through or listed in the order they were created, unless they arenumber, in which case they are looped through via number. See below example
                        -* let codes = {
                            "49": "Germany",
                            "41": "Switzerland",
                            "44": "Great Britain",
                            // ..,
                            "1": "USA"
                            };

                            for (let code in codes) {
                            alert(code); // 1, 41, 44, 49
                            }

                        -* let codes = {
                            "+49": "Germany",
                            "+41": "Switzerland",
                            "+44": "Great Britain",
                            // ..,
                            "+1": "USA"
                            };

                            for (let code in codes) {
                            alert( +code ); // 49, 41, 44, 1
                            }



Fullstack Javascript- Intermediate HTML and CSS


Form Basics 
    -https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-form-basics
    -Create Forms with HTMl
    -Have a basic idea of how to style forms
    -MDN- Form Overarching Guides (https://developer.mozilla.org/en-US/docs/Learn/Forms#introductory_guides)
        -Introductory Guides to Forms
        -The Differetnt Form Contorls Guides
        -Form Styling Guides
    -The Internetingishard Guide to Forms-https://web.archive.org/web/20210515225808/https://www.internetingishard.com/html-and-css/forms/
        -Mobile First Development Approach-https://web.archive.org/web/20210515225808/https://www.internetingishard.com/html-and-css/responsive-design/#mobile-first-development
        -Text input, Text Area, Radio Buttons, Checkboxes, Dropdown Menu, button
        -<form action="" method="" class="">
            -action- URL that processes form
            -method- either post (change server info) or get (retrievce server info)
            -if action is blank, server is submitted to the same URL
            -*em element- italics
            -*  * selecetor in CSS- the universal selector- used to select everything in html, can be used to reset all margins and paddings to account for all browsers
            -* width:50% for CSS- defines what percentage the selected element's width makes up the parent container's width
        -<label for="fullName">Name</label>
         <input id="fullName" name="fullName" type="text"/>  
            - label- used to make state what the input is. for="" must equal input's id="". 
            -input tag is a single <>
            -input tag for general form information. name="" is the name for the variable  that is sent to the server. value="", which will be introduced later, is for the variable's value that is sent to the server, usually used for answer choices. type="text" shows that the input is for text-typing.
            -elementparent elementchild[input="text"] {} for CSS is an attribute selector
        -<label for="email">Email</label>
         <input id="email" name="email" type="email" placeholder=""/>
            -input type email is for emails
            placeholder allows you to have a placeholder, per name
            -.form-row input[type='email']:invalid --> CSS pseudo classes are used in CSS files to make elements look different when they are wrong(ie red)

        -fieldset > legend > input[type="radio" id(same as for in label), name, value] > label[for(same as id in inout)]
            - Input type Radio buttons are used for selection
            -Radio type input must always work in groups, and must always have a fieldset and legend
            -each radio type input mudst share a name (same variable access) but differ in value (the variable data) for the backend
            -Radio type inputs must have labels like text type inputs, each label having the same for value as the id type of the radio input
            -fieldset does not use flexbox and instead uses float 
            -legend is the "label" for the entire fieldset and only needs text
        -Select Elements(aka Dropdown Elements)
            -select[id, name] > option[value]
            -Use for drop down menus/ selection. Harder to style
        -Checkboxes
            -<input type="checkbox"/>
            -Similiar to radio elements, but multiple values can be checked off. This means that you dont need a fieldset or legend
        -Text Areas
            -<text area id, name></textarea>
            -Used to create a textbox that people can write into. This uses its own individual tag and has a closing tag, unlike the <input> tag, that is an individual tag
        -Buttons
            -Act like buttons- can reate error messages depending on email specifics
            -for CSS, use button:hover and button:active for knowledge on how to change status
    -MDN Docs- Your First Form - https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form
        -<button type="">
            -type="submit" means that all information in the form the button is placed in gets sent to the server
            -type="reset" resets all information in the form that the button is placed in
            -type="button" can is custom to whatever you want it to do
            -*Lists can be used to organize forms. Just make list-style:none, padding:0 and margin:0 for uL
            -* :focus CSS (https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)
                -*Any element that recieves focus can be changed using the element:focus {} selector in CSS
                -can be used to make text field borders highligh a certain color when highlighted
            -*Vertical Align (https://css-tricks.com/almanac/properties/v/vertical-align/)
                -*inline or inline-block elements that are lined up next to each other can have their vertical locations lined up in various formats (akin to flexbox row align items)
                -* Can be used to align large text areas with their labels via vertical align: top, so long as the labels are inline or inline block
    -MDN Docs- How to Structure a Web Form (https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form)
        -....


Form Validation
    -https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-form-validation
        -LO
            -Explain what vorm validations are
            -Know how to use a few of the basic built-in HTML validations
            -Know how to build custom validations
        -required attribute
        -minlength = "" and maxlength="" for character length
        -min="" and max="" (for type="number)
        -Pattern Validations - pattern=""
        -placeholder="" --> For having information in a form as an example
        -title = "" --> Used to give a more descriptive message in input 
        -CSS: pseudo classes :invalid and :valid for when the input fits validation criteria (ex: input:invalid { border-color: red;})
    -MDN Docs- Client-Side Form Validation (https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
        -if required attribute is on an element and that element is not filled by client, it counts as an :invalid pseudoclass on CSS
        -Its good user ettiquete to indicate to users what parts of the form are necessary (use the *)
        -Basic pattern rules (for pattern="")
            -a--> matches the character a
            -abc --> matches a followed by b followed by c
            -ab?c --> matches a, optional b, followed by c
            -ab*c --> matches a, followed by any number of b, followed by c
            -a|b --> matches one character, a or b
            -abc|xyz --> matches character combination abc or xyz (but not abcxyz)
            -[Aa]bc --> matches character combination Abc or abc
            -<textarea> does not support the pattern attribute
        -for <input type="number" min="1" max="10" valiue="1">, value is the default number in the input if no number is specified
        - Example of Styling for specific inputs
            -input[type="text"],
            input[type="email"],
            input[type="number"],
            textarea,
            fieldset {
            width : 100%;
            border: 1px solid #333;
            box-sizing: border-box;
            }
    -Sitepoint- A Complete Guide to HTML Forms and Constraint Validation (https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/)
        -Remember- client side validation is not a substitute for server-side validation!!!
        -List of possible INPUT TYPES: button, checkbox, color, date, datetime-local, email, file (used to pick files), hidden, image, month, number, password, radio, range (acts as a slider control), reset, search, submit, tel, text, time, url, week
        -List of possible INPUT ATTRIBUTES: accept (for file upload), alt (alternative text for image types), autocomplete, autofocus, capture, checked (to decide if radio option is checked)...
        -HTML Output Fields
            -https://www.w3schools.com/tags/tag_output.asp --> Info on the output tag --> Used to display results from calculations, usually as a result of a script
            -https://www.w3schools.com/jsref/event_oninput.asp --> Essentially using JS code in HTML for forms
            -output: a text result of a calculation or user action
            -progress: a progress bar with value and max attributions
            -meter: a scale which can change between green, amber, and red depending on the values set for the value, min, max, low, high, and optimum attributes
        -Input Labels: You can wrap input elements inside label elements:
            -<label>your name <input type="text" name="name" /><label>
        -Input Behaviors: 
            -Credit Cards: Instead of using type="number", use type="text" and and set inputmode="numeric" so that the text that you type is a number (and so a number keyboard appears on phones) --> https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode
                -autocomplete="cc-number" fills in pre-configured or previously entered credit card numbers, source usually up to browser --> https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
        -Avoid reinventing standard controls with Javascript
        -CSS Validation Style
            -Example: input:invalid{color: red}
            -See list of pseudoclasses
            -Styling placeholder text:
                -input[type="email"]::placeholder {
                    color: blue;
                    }
    -Form Validation UX in HTML and CSS (https://css-tricks.com/form-validation-ux-html-css/)
        -**First Time Experimenting with Fast Switching Strategy for Skim Reading
        -Headings and SUbheadings
            -You can make the label look like a placeholder
            -Make certain inputs required
            -Positively indicate valid input values
            -Show reminders about validation of type
                -Sub Trick! Testing if an input has a value or not
            -You can create robust validations
                -http://www.the-art-of-web.com/javascript/validate-password/
SVG
    -https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-svg
        -What are SVGs?
            -Extensive Markup Language
        -Drawbacks
        -Anatony
            -xmlns- XML Namespace
            -viewBox
            -class and id attributes
            -<circle>, <rect>, <path>, <text>
            -fill and stroke
        -Embedding
            -Through either <img> or background-image: url(./my-image.svg)

Tables
    -https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-tables
        - HTML Table (https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics)
            -What is a table
                -Styling Tables
                    -https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables
                -Link to CSS Table Stylesheet (https://github.com/mdn/learning-area/blob/main/html/tables/basic/minimal-table.css) and HTML Template (https://github.com/mdn/learning-area/blob/main/html/tables/basic/blank-template.html)
            -Active Learning: Creating your first table
                -<table></table> --> Used for body of table
                -<td> --> table data --> Smallest container for a table --> Make up rows when placed consecutively
                -<tr> --> table row --> Used to define a row within a table
            -Adding headers with <th> elements
                - -<th> --> table header
                - scope="row" or scope="col" are attributes in <th> that define whether headings are for columns or rows
            -Allowing cells to span multiple rows and columns
                -colspan="1" use to expand column via cells
                -rowspan="1" use to expand row via cells
            -Providing common styling to columns
                -<col>
                -<colgroup>
                -Used to prevent styling of entire rows and columns to be done via cell by cell
                    -<colgroup>
                        <col>
                        <col style="background-color: yellow">
                    </colgroup>
                    -In the above example, only the second column in the table would have a yelloe background color

        -HTML table advanced features and accessibility (https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced)
            -Adding a caption to your table with <caption>
            -Adding structure with <thead>, <tfoot>, <tbody>
            -Nesting Tables
            -Tables for Visually Impaired Users
                -Using column and row headers
                -The scope attribute
                -The id and headers attributes





Intermediate HTML and CSS --> Intermediare CSS Concepts

Default Styles
    -https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-default-styles
        -You'll learn about default browser styles
        -You'll learn how to use a CSS reset to remove, or change those default styles
        -Reboots, Resets and Reasoning --> https://css-tricks.com/reboot-resets-reasoning/
            -https://css-tricks.com/reboot-resets-reasoning/
                -resets "reset" CSS styles to have no cusotmization in order to increase browser compatibility
                    -Meyers Reset, HTML5 Reset
                -Normalize.css
                    -The standard reset used for modern browsers
                    -Didnt remove styling from things that were consistent for all browsers
                    -More detailed in documentation
                    -Supports altering groups based on user specification rather than just mass changing w/o consent

                -Reboot
                    - A more opinionted version of Normalize.css??
                -Browserslist
                    -https://css-tricks.com/browserlist-good-idea/
                    -Used to determine which resets are good for which browser


CSS Units
    -https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-css-units
        -LO: Learn the difference between  relative and absolute units
        -LO: You'll learn when its approproate to use different units
        -Absolute Units
            -Units that are always the same in any context
            -Ex: the -px unit (pixel size does not change relative to anything on the page)
            -px shouold be the only absolute unit you use
        -Relative Units
            -Can change based on the context
            -em and rem (https://css-tricks.com/confused-rem-em/   https://www.geeksforgeeks.org/difference-between-em-and-rem-units-in-css/)
                -Both refer to font size of elements
                -1em: relative to the font size of its nearest or direct parent --->font-size of an element-> if an element's font size is 16px, then settings its widths to 4em would make its width 64px
                -1rem: relative tot the html (root) font-size font-size of the root element (either :root or html) and not the font-size of its nearest parent
                -Better to use rem over em due to being able control font size of website overall
            -Viewport Units
                -vh and vw refer to the relative size and width of the viewport 
                    -Making something 200vh means that you can scroll down because the element is twice the size of the screen. Same concept applies for 200 vw.
                -1vh equals 1% of the viewport height, 1vw equals 1% of the viewport width
        -MDN Docs- What is a CSS Value (https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#what_is_a_css_value)
            -What is a CSS Value
                -value types such as <color> or <length> that are usable for a elements in a page have full access to all the possible values those value types can take 
            -Numbers, Lenghts, and Percentages
                -Lengths
                    -Absolute lengths: pt, px
                    -Relative lengths: em, rem, vh, vw, lh (line height), rlh (root element line height)
                    -em--> relative to the font size of the parent element (can be progressively stacked, ie if each nested div has 0.5em as a font size, the divs will continually get smaller and smaller)
                    -rem --> relative to the root element (ie html {font-size: 16px}) font size. Does not stack with progressive div nesting
                -Percentages
                    - When CSS properties such as font-size or width are set via percentage, value percentage is relative to that of the parent element
                    -Effect of percentage values also stacks with progressive div nesting
                -Numbers (Opacity)
                    - Opacity value of elements can take a number between 0 (full transparency) and 1 (full opacity)
            -Color
                -Color Keywords (ie red, blue, antiquewhite, greenyellow)
                -Hexadecimal RGB Values
                -RGB and RGBA Values --> ( rgb(x,y,z) where x,y,z represent numbers from 0 to 255)
                    -rgba(x,y,z,t) exists where t is a number from 0 to 1 for opacity. The opacity only affects the color and not the enitre element, unlike the normal opacity value type
                -Hue, Saturation, and Lightness Values --> hsl (x,y,z) where x,y,z are percentages from 0-100%
                    -x is hue (color wheel), y is saturation (0 is no color/grey and 100% is full sat, z is lightness (0 is complete black and 100 is complete white))
                    -hsla(x,y,z,t) exists where t is opacity again, same rules as rgba() apply
            -Images
                -Used whenever an image is a valid value (ie: url or linear gradient )
                -Ex: .image {
                    background-image: url(star.png)
                }
                -Better explanation of linear-gradients: https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient
            -Position
                -Represents 2d coordinated for positioning a background image
                -Can use <background-position> property
                -Examples: background-position: bottom 50px right 100px 
                -background-position: center
                -background-position: right 35% bottom 45%
            -String and String Identifiers
                -String identifiers are keywords used for values
                -Quoted strings in CSS are used to display strings in the window
                -See Example Below--> It will show "Read this- My name is Goku"
                <p>My name is Goku<p>
                -<style>
                    p::before {
                    content: "Read this -";
                    }
                </style> 
                -Content must be used with the pseudo elements ::before or ::after
            -Functions
                -CSS can be used to perform basic arithmetic for values
                -Example Below:
                -.box {
                width: calc(20% + 100px);
                }
        -CSS Units: em, rem, px (https://codyloyd.com/2021/css-units/)
            -Use rem for better relative spacing
            -px can be used when you want exact dimensions and dont mind mobile or non-tradiional web zooming
        -https://css-tricks.com/fun-viewport-units/ --> Stickies, headers, footers, scroll indicators

More Text Styles
    -https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-more-text-styles
        -LO: Learn how to use custom fonts on your web pages
        -LO: Learn some text-related CSS properties
        -Fonts
            -The System Font Stack
                -Use to ensure that you don't run out of compatible font
                -body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                    }
            -Online Font Libraries
                -Use when you want to get fonts off of the internet
                -Make sure that you still have a backup font plan
                -Use HTML <link> Tag on top of HTML File 
                    -<link rel="preconnect" href="https://fonts.googleapis.com">
                -Use @import tag on top of CSS File
                    -@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
                -Using either above method can allow you to put font into CSS file
                -Still use fallbacks in case an external API is being used to access the font
            -Downloaded Fonts
                -Use the @font-face on top of CSS file to load a font-family onto your webpage that is local to your computer
                - @font-face {
                    font-family: my-cool-font;
                    src: url(../fonts/the-font-file.woff);
                    }
        -Text Styles
            -font-styles
                -Used to make a font italic (ie font-style: italic;)
                    -Use for large sentences or headings
                -<em></em> is used in the HTML for specific words to be italic WHILE also marking the word for importance within the HTML file.
                    -Use only for single words or phrases that you want to have semantic phrases
            -letter-spacing
                -Used to decrease or increase spacing between letters
                -ie: letter-spacing: 0.5em; (increases spacing)
                -ie: letter-spacing: -0.15em; (decreases spacing)
            -line-height
                -Adjusts spacing between lines (ie like Word documents double space or single space)
                -ie: line-height: 1.5; (increases space between lines by 1.5)
                -https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
            -text-transform
                - Changes the case of the given text
                -https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
                    -text-transform- capitalize; Turns the first letter of each word capitalized
                    -More values: upperclose, lowercase, none, full width, full-size-kana
            -text-shadow
                -Used for making text shadows
                -NOT RELATED: You can use span and background color to highlight words (https://www.computerhope.com/issues/ch001391.htm)
                -https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow
                    -text-shadow: 5px 5px #558ABB ; (offset of x, offset of y, color)
            -ellipsis
                -For dealing with text overflow, show to "..." 
                
More CSS Properties
    -https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-more-css-properties
        -LO: Learn about a lot of useful CSS Properties
        -Background
            -The background property is shorthand for 8 different background properties
            -Used to change background colors, specify background images, change the position and size of background images, and change how background images repeat or tile if they are too small to fit container
            -https://developer.mozilla.org/en-US/docs/Web/CSS/background
        -Borders
            -Border: width, style, color (ie border: 2px dashed green)
            -https://developer.mozilla.org/en-US/docs/Web/CSS/border
            -Border Radius: Used to create rounded corners on borders
            -border-radius: 10px; radius for all 4 sides
            -border-radius: 10px 5%; radius for top left/bottom right AND top right/bottom left
            -https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
        -Box-shadow
            -Used to create a shadow around boxes for interesting effects
            -https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
        -Overflow
            - Used to control what happens when an element's content becomes too big to fit in its block formatting context
            -https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
        -Opacity
            -https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-more-css-properties
        -Additional Resources
            -CSS Tricks- Background Shorthand
                -https://css-tricks.com/almanac/properties/b/background/
            -CSS Tricks- Overflow


Advanced Selectors
    -https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-advanced-selectors
        -LO: Understand how to use parent and sibling selectors
        -LO: Recognize difference between pseudo classes and pseudo elements
        -LO: Learn about some of the most useful and common pseudo elements and pseudo classes
        -LO: Learn about the different ways to select an attirubte or its parts
        -Parent and Sibling Combinators
            -The Child Combinator >
                -Ex: main > div {}
            -The Adjacent Sibling Combinator +
                -Ex: main + div {}
            -The General Sibling Combinator ~
                -Ex: main ~ div {}
        -Pseudo-Selectors
            -Made up of pseudo classes and pseudo elements
        -Pseudo-Classes
            -Have one colon :
            -Have the same specificity of normal classes (0,0,1,0)
            -CSS Tricks Article on CSS Specifity (https://css-tricks.com/specifics-on-css-specificity/)
            -Dynamic and User Selected Pseudo Classes
                - :focus - for elements selected via cursor or keyboard
                - :hover - for anything selected by the mouse pointer
                - :active - elements currently being clicked
                - :link - for unvisited links
                - :visited - for all visited links
            -Structural Pseudo Classes
                - :root - equivalent to the html element and represents the top of the document (but can be used for SVG)
                - :first-child - first child within a group of sibling elements
                - :last-child - last child within a group of sibling elements
                - :empty - elements with no children
                - :only-child - elements with no siblings
                - :nth-child(d) - selects the dth element
                - :nth-child(dn) - selects every dth element
        -Pseudo Elements
            -Have two colons ::
            - Allow you to affect parts of HTML that are not elements as all
            - Have the same specificity of normal elements (0,0,0,1)
            - ::marker - customize <li> bullets or numbers
            - ::first-letter and ::first-line - allow you to (you guessed it!) give soecial styling to the first letter or line of some text
            - ::selection allows you to change the highlighting when a user selects text on the page
            -::before and ::after allow us to add extra elements onto the page with CSS, instead of HTML. Using it to decorate in text in various ways is one common use case
            - <style>
                .emojify::before {
                    content: '😎 🥸 🤓';
                }
        -Attribute Selectors
            -[attribute] - This general selector will select anything where the given attribute exists. Its value doesn’t matter.
            selector[attribute] - Optionally we can combine our attribute selectors with other types of selectors, such as class or element selectors.
            [attribute="value"] - To get really specific, we can use = to match a specific attribute with a specific value.
                -Example: img[src="puppy.jpg"] {
                    width: 100vw;
                    height: 100vh;
                }

            -[attribute^="value"] - ^= Will match strings from the start.
            [attribute$="value"] - $= Will match strings from the end.
            [attribute*="value"] - *= The wildcard selector will match anywhere inside the string.


Positioning
    -https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-positioning
        -LO: Learn how to use absolute positioning
        -LO: Lean how to use fixed positioning
        -LO: Learn how to use sticky positioning
        -LO: Learn the difference between each property
        -Static and Relative Positioning
            -position: static -- Default position mode; top, right, bottom, and left do not affect element position
            -position: relative -- allow top, right etc. to displace element relative to its normal position in the flow of the document
        -Absolute Positioning
            -position: abosolute -- allows you to position something at the exact point of the screen without disturbing other elements around it and without other elements being disturbed by it
            -Removes that element from normal document flow while being positioned relative to an ancestor element
            -Good for modals ("sign up before continuing" forms), images with captions, and icons on top of other elements
            -Not suggested for entire page layouts---> For entire page layouts, use grid or flexbox!
        -Fixed Positioning
            -position: fixed -- removes elements from normal document flow and uses top, right, left, bottom to position element relative to viewport. 
            -Element will stay fixed to position on screen even as page scrolls
        -Sticky Positioning
            -position: sticky -- Sticky elements will act like relative  positioned elements until you scroll past them, then they start behaving like fixed elements. They are also not taken out of the normal flow of the document.
        -Learn CSS Position in 9 Minutes (https://www.youtube.com/watch?v=jx5jmI0UlXU)
        -MDN Docs- CSS Position - (https://developer.mozilla.org/en-US/docs/Web/CSS/position)
            -Absolute positioning: The element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial containing block.
            -Absolute positioning: The containing block is the ancestor relative to which the element is positioned.) If the element has margins, they are added to the offset.
            -Sticky Positioning: is an element whose computed position value is sticky. It's treated as relatively positioned until its containing block crosses a specified threshold (such as setting top to value other than auto) within its flow root (or the container it scrolls within), at which point it is treated as "stuck" until meeting the opposite edge of its containing block.
        -CSS Tricks- Absolute, Relative, Fixed Positioning (https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/)
            - Relative Positioning: limits the scope of absolutely positioned child elements. Any element that is a child of the relatively positioned element can be absolutely positioned within that block. 
            - Relative Positioning: One is that it introduces the ability to use z-index on that element, which doesn’t work with statically positioned elements. Even if you don’t set a z-index value, this element will now appear on top of any other statically positioned element. You can’t fight it by setting a higher z-index value on a statically positioned element.
        -Kevin Powell- Fixed vs Sticky Positioning- (https://www.kevinpowell.co/article/positition-fixed-vs-sticky/)

CSS Functions
    -https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-css-functions
        -LO: Recognize the basic parts of a CSS Function
        -LO: Learn about the calc(), min(), max(), and clamp() functions and how to use each one
        -What is a function and how are they used in CSS?
            -functions are reusable pieces of code which perform specific tasks
            -Ex: rgb(0,42,255) or linear-gradient(90deg, blue,red)
            -Can't make your own functions in CSS
        -calc()
            -Used for calculations and can be nested and also can mix units
            -Ex: :root {
                --header: 3rem;
                --footer: 40px;
                --main: calc(100vh - calc(var(--header) + var(--footer)));
}
        -min()
            -Holds a list of arguments and will always choose the smallest of the list whenever possible
            -Ex: #iconHolder {
                    width: min(150px, 100%);
                    height: min(150px, 100%);
            }
            -In the above example, if #iconholder is present within a container that has resize set to both (meaning the container's size can be changed by the user), then #iconholder will always be the SMALLEST size within the min() function
            -MORE INFO ON resize --> https://developer.mozilla.org/en-US/docs/Web/CSS/resize

        -max()
            -Holds a list of arguments and will always choose the largest of the list whenever possible
            -Ex: width: max(100px, 4em, 50%);
            --In the above example, if #iconholder is present within a container that has resize set to both (meaning the container's size can be changed by the user), then #iconholder will always be the LARGEST size within the min() function
        -clamp()
            -Holds three values and uses them to set the smallest, largest, and ideal value
            -Ex: h1 {
                font-size: clamp(320px, 80vw, 60rem);
                }
        -MDN CSS Functional Notation(https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions)
            -
        -Web.dev article- min(), max(), and clamp(): three logical CSS functions to use today
            -When using a calculation inside of a min(), max(), or clamp() function, you can remove the call to calc().  For example, writing font-size: max(calc(0.5vw - 1em), 2rem) would be the same as font-size: max(0.5vw - 1em, 2rem). 
            -Elements of Typographic Style: optimal length of lines in a normal column page is anything from 45ch to 75ch in length
                -p {
                    width: clamp(45ch, 50%, 75ch);
                    }
            -min() max() and clamp() can be used to keep padding at a certain size (SEE EXAMPLES IN ARTICLE)
            -Can be also be used to scale font size as window changes in size (SEE EXAMPLES IN ARTICLE)
        -(Optional article)- Moderncss.dev- Practical Uses of CSS Math Functions: calc, clamp, min, max
            -LOOK AT THIS LATER TO GET A BETTER GRASP OF COLOR PALLETE GENERATION

Custom Properties
    -https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-custom-properties
        -LO: Learn how to declare a custom property
        -LO: Learn how to access a custom property in a rule declaration
        -Using Custom Properties
            - Example (in CSS): 
                -.error-modal {
                    --color-error-text: red;
                    --modal-border: 1px solid black;
                    --modal-font-size: calc(2rem + 5vw);

                    color: var(--color-error-text);
                    border: var(--modal-border);
                    font-size: var(--modal-font-size);
                    }
                - use "--variable-is-hyphenated" to create a variable with a preset CSS property
                -to call the CSS variable later in the CSS file, use var(--variable-is-hyphenated)
            -Fallback Values
                -var(x,y) accepts two parameters. x is the initial property assigned to a CSS variable. y is the fallback value for the property if x does not exist yet. 
                -Example: color: var(--undeclared-variable, black);
                    -Since --undeclared-variable does not exist, the property of color will just be black
                -y in var(x,y) can be another var(x,y), so you can stack fallback values
                    -Example: color: var(--undeclared-again, var(--color-text, yellow));
        -Scope
            -Similiar to Javascript, CSS variables can only be used as properties for the selectors in which they were made in. If a CSS variable is created in a CSS selector element and another CSS selector element that is not within the scope of the first CSS selector element tries to use the CSS variable, it won't work
            -The :root Selector
                -A psuedo:class that acts like html selector element in CSS but with higher specificity (probably because its technically a class (see CSS specifity 0,0,1,0))
                -All CSS variables declared in :root {} in the CSS file can be freely used by any CSS selector element
        -Creating Themes with Custom Properties
            -Using Javascript (const root = document.documentElement, which puts the root element into constant root) for button functionality and two different scopes for the two different classes in the root element we want (:root.light and :root.dark), each with their own CSS variables, we can create a toggle button for light and dark themes (SEE ORIGINAL ODIN PROJECT ARTICLE FOR CLEARER EXAMPLE)
            -Remember that the reason :root.light {} can exist as a selector is because :root and .light are simply two classes (one normal class and one pseudo class that represents the <html> element) that are stacked and can have whatever property values you want, similiar to how, for <p class="animal mammal">, in CSS .animal.mammal{} can have as many properties and values as you want. 

            -Media Queries
                - @media (prefers-color-scheme: dark) {
                    :root {
                        --dark-setting-one: black;
                        --dark-setting-two: grey; 
                    }
                }
                -Use if you want to have the user's native computer or browser settings to be automatically inputed on the site
                -Only "light" or "dark" are valid values for the media query
                -"light" is for when a user has a light theme specified or when there is no preference
                -DOES NOT ALLOW USER TO CHANGE THEME THEMSELVES
        -MDN Using CSS Custom Properties (Variables) (https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
            -Inheritance of Custom Properties
                -Remember that Custom Properties (ak CSS Variables) do inherit from the parent. Be mindful of this when assigning values to siblings, children, or parents
            -Handling Invalid Custom Properties
                -When a normal (not custom CSS variable) value is invalid for a specific element property (ie: color: 16px), then the browser finds the next suitable property value assigned by the file
                -When using a custom CSS variable value for a specific element property and it is invalid, the browser will first see if the custom property will be inherited from a parent. If not, it does not look for the next suitable property value assigned by the file-IT GOES STRAIGHT TO TEH DEFAULT INITIAL VALUE
            -Values in Javascript
                -(Javascript: Getting Style Declarations)https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue
                    -Use to get/return the property value of a specific element's CSS style property
                    -Ex:  const value = declaration.getPropertyValue('margin'); // returns "1px 2px"
                -https://stackoverflow.com/questions/15241915/how-to-change-css-property-using-javascript
                    -Use to directly set the style property of an element using Javascript/JS
                    -Ex: document.elm.style.border = "3px solid #FF0000";
                    -Ex: document.getElementById("p2").style.color="blue";
                -(Getting All Computed Styles of a Specific Element)-https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
                    -getComputedStyle(desiredElement) is a Javascript method that gets all of the computed styles values of an Element in Javascript (keep in mind this element must first be a variable in js first, obviously)
                    -Ex (see result in article): const para = document.querySelector('p');
                        const compStyles = window.getComputedStyle(para);
                        para.textContent = `My computed font-size is ${compStyles.getPropertyValue('font-size')},\n` +
                        `and my computed line-height is ${compStyles.getPropertyValue('line-height')}.`;
                    -Ex: getComputedStyle(element).getPropertyValue("--my-var"); (this example is from MDN's Using CSS Custom Properties article)
        -EXTRA: MDN document.documentElement(Javascript JS) - https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
            -document.documentElement returns the element that is the root element of the document (for example, the <html> element for HTML documents)
            -Ex: const rootElement = document.documentElement;
                -the variable rootElement now stores the <html> element as a JS variable
            -Remember that since :root is a pseudoelement that represents the <html> element in CSS, If you add a bunch of CSS variables with properties and define them in CSS under :root {}, they can be used anywhere in the CSS sheet because they are scoped everywhere
            -Also remember that since :root is still technically a pseudoCLASS (even though it represents an element), it can have more classes stacked on them and used seperately in the CSS file (ie :root.light{} and :root.dark{}) to be called upon later in JS during events (similiar to how animal.mammal{} and animal.fish{} are stacked classes in CSS that can have different property values that can be toggled with JS later)
        -Extra: MDN Documents- Child Nodes- https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes

        


                









                    
                        
                    








