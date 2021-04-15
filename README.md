# Unit Testing Practice

In the words of the immortal Monty Python:
**"And now for something completely different!"**

## Introduction

Up until now, you have written code that met test specs, and you've gotten
pretty darn good at it. Now it's time to flip that around. In this practice, you
will:
1. Write unit tests to test functions 
2. Write unit tests to test class methods
3. Use the results of your unit tests to correct mistakes in code.

## Practice overview

You have just landed your dream job as a junior developer at SuperDevs, Inc. You
and your colleague are tasked with writing the codebase for your next project,
and suddenly they had an emergency and had to leave the office. Your boss runs
the code and notices the code isn't working the way it's supposed to. It seems
that in their haste, your colleague left a few bugs in the actual code.

At a recent conference on "How To Be A Better Boss", they learned about unit
testing and thinks you are just the developer to implement them here. They have
written the `describe` and `it` blocks for you, you just have to flesh them out
to write the specs. Your boss doesn't know a lot about tests, so you are going
to have to use your developing 'Developer Brain' to figure out what to do on
your own.

Your mission, should you choose to accept it, *which, spoiler alert, you do* is
to write the unit tests that will check to see if the code does what it says it
does, and correct the code to make sure that it does.

## Phase 0: Setup

In this practice, you have been provided with three files, each one with various
functions and classes already written for you. You also have the skeleton test
files with all of the required imports already there.

Run `npm install` to install all necessary dependencies.

Run `mocha` to ensure that everything is working on your machine in order to run
tests. You should see all tests failing.

Refer to the [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)
documentation to write your tests.

Refer to the [MDN](https://developer.mozilla.org/en-US/) documentation for help
with your functions and class methods.

**Make sure to use your problem solving plan and get testy with it!**

## Phase 1: Functions

In this phase, you have code written for four familiar functions: isFive,
isOdd, myRange,  and fizzBuzz.

Write the unit tests for the provided `describe` and `it` blocks. 

Run your tests and find where they fail. Find the error in the code and once you
have it corrected, run the tests again to see if they pass. 

## Phase 2: More Functions

In this phase, you have code written for another four old friends: mirrorArray,
hiddenCounter, myMap, avgValue. The first two files are functions. These are a
little more complicated, but they are no match for you, the star junior dev at
SuperDevs, Inc. 

Again, you will write the tests for the provided `describe` and `it` blocks.
This would be a great time to see if any of these test specs could use a chai
spy. Figuring this out is sure to get you noticed by the boss.

Once again, run your tests and find where they fail. Find the error in the code
and once you have it corrected, run the tests again to see if they pass.

## Phase 3: Let's go out with class

In this final phase, you will write tests for methods on a class that manipulate
a word. This one has no errors, most likely because you were a focused,
well-rested developer who wrote some clean code. Nonetheless, your boss wants
unit tests written for the class to assist with future refactoring and adding
new features. 

Write your test specs for the instance methods. Remember when you test a class,
you will need to create a new instance of that class in your test code and call
the instance methods appropriately. 

Once your tests address all of the `describe` and `it` blocks, run them to
ensure your tests pass.

## Wrap up

You've done it! You saved the day and corrected faulty code and wrote some unit
tests to make sure that any future refactoring or upgrading doesn't break the
code. Next step, corporate car and a hefty raise. 

### Helpful links

[Mocha Documentation](https://mochajs.org/)  
[Chai Documentation](https://www.chaijs.com/)  
[MDN Documentation](https://developer.mozilla.org/en-US/)