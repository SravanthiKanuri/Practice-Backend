// The thirteenth edition of ECMAScript Language specification was officially approved on June 22, 2022. With its release, 
//new features were added to the JavaScript language:

// Method .at();
// Object.hasOwn();
// RegExp: match indices(‘d’ flag);
// Error: .cause;
// New members of Classes;
// Private Slot Checks;
// Top-level Await.

//before Method .at()
//The method .at() is supported by indexable values like Array, String, or TypedArray. 
//It takes a positive or negative integer value and returns the element at the given index. 
let animals = ["Cat", "Dog", "Cow"];

console.log(animals[0]); //Cat
console.log(animals[animals.length - 1]) //Cow
console.log(animals[animals.length]) //undefined

//after Method .at()
console.log(animals.at(0)); //Cat
console.log(animals.at(-1));//Cow

//with string
let string1 = "Hello, World!";

console.log(string1.at(-1));//!

//==========================================================================================================================

//Object: .hasOwn()
//Object.hasOwn() returns true if the specified object has the indicated property as its own property. 
//If the property is inherited or does not exist, the method returns false.

//before
let user = {
    name: 'John Doe',
    role: 'Admin'
    };
    //to find length of object
    console.log(Object.keys(user).length)
    
    console.log(user.hasOwnProperty('role'));
    console.log(user.hasOwnProperty('age'));
    
    //true
    //false
//after
console.log(Object.hasOwn(user, 'role'));
console.log(Object.hasOwn(user, 'age'));
console.log("role" in user)

//true
//false

//=====================================================================================================================


//Error: .cause
//With the Error .cause, you can add more essential information to the errors you receive. 
//You should specify the error options as a second parameter, and with the “cause“ key you can pass the error that you want to chain.


//before 
// const getUsers = async(array)=> {
//     try {
//       const users =  await fetch('http://myapi/myusersfake');
//       return users;
//     } catch (error) {
//       console.log('enter')
//       throw new Error('Something when wrong, please try again later')
//     }
//   }
  
//   try{
//     const users = getUsers();
//   } catch(error) {
//     console.log(error); // Error: Something when wrong, please try again later
    
//   }

//after

// const getUsers = async(array)=> {
//     try {
//       const users =  await fetch('http://myapi/myusersfake');
//       return users;
//     } catch (error) {
//       console.log('enter')
//       throw new Error('Something when wrong, please try again later', { cause: error })
//     }
//   }
  
//   try{
//     const users = getUsers();
//   } catch(error) {
//     console.log(error); // Error: Something when wrong, please try again later
//     console.log(error.cause); // TypeError: fetch failed
//   }

//=========================================================================================================================================


//New Members of Classes
//Static class fields and methods are not used on instances of a class. Instead, they can be called on the class 
//itself and are declared using the static keyword. Static methods are often utility functions and helpers, whereas
//static properties are useful for caches,fixed-configuration,or any other data we do not need to be replicated across instances.

//before
class User1 {
    firstName = 'Jon';
};

console.log(User1.firstName);

//undefined

//after 
class User {
    static firstName = 'Jon';
};

console.log(User.firstName);//Jon



//==============================================================================================================================================

//Private Slot Checks
//EcmaScript 2022 added new features such as private instance fields, methods, and accessors. To initialize
// a private method or a field before you had to add an underscore at the beginning of its name, 
//but this did not guarantee that the method/field will be private. Now, you just need to add a # at the beginning of the 
//method name to have it declared as private.

//before
class User2 {
    firstName = 'Joh123n';
    lastName = 'Doe';
    #role = 'Admin';
}

const adminUser = new User2();
console.log(adminUser.role);//undefined

//after
class User3 {
    firstName = 'John';
    lastName = 'Doe';
    role = 'Admin';
    // #sayHi() {
    sayHi() {
        return this.firstName + ' ' + this.lastName + ' with role ' + this.role + ' says Hi!';
    }
}

  const adminUser1 = new User3();
  console.log(adminUser1.sayHi());//TypeError: adminUser.sayHi is not a function



  //=============================================================================================================================

  //Top-level Await
//Before ECMAScript 2022 await could only be used in the scope of asynchronous functions. Now the await keyword can be 
//used outside of an async function within a JavaScript module. This means that a module waits for its child modules that 
//use await to execute before it runs itself.

// const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=67a20d293903cbcf9aab38633b30fbf9');
// const info = await response.json();
// const description = info.weather[0].description;
// console.log(description); //SyntaxError: await is only valid in async functions and the top level bodies of modules

//=================================================================================================================