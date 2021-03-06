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

    









                    
                        
                    








