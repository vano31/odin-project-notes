//-Fundamentals Part 5 Objects and Intermediate/Advanced Arrays


//-https://javascript.info/object#property-value-shorthand

    //- Task 1- Hello Object


user = {};
user.name = `John`;
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

    //- Task 2- Check for Emptiness- My answer


    let isEmpty = function(obj) {
        for (let key in obj) {
          if (key == undefined) {
            return "True";
          } else {
            return "False";
          }
        }
      };
      
      
      let test1 = {};
      
      let test2 = {
        color: "green",
      };

    //- Task 3- Check for Emptiness- Their answer

    function isEmpty(obj) {
        for (let key in obj) {
          // if the loop has started, there is a property
          return false;
        }
        return true;
      }


    //Task 3- Sum Object Properties



    function salaryAdder(obj) {
        let total = 0;
        for (let key in obj) {
          total += obj[key];
        }
        return total;
      };


    //Task 4- Multiply Numeric Property Values by 2


    let multiplyNumeric = function(obj) {
        for (let key in obj) {
          if (typeof(obj[key]) === `number`) {
            obj[key] *= 2;
          }
        }
      }
      
      multiplyNumeric(menu);


      


