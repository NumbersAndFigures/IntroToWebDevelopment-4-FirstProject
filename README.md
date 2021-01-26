## Introduction to Web Development: Pick a Number Project
This is the first project in the [Introduction to Web Development](https://www.youtube.com/watch?v=IkeSfYn7J9o&list=PLxA1UD7PFrg-f5zuwvupc7i9Hoh5rcEZT) series on youtube. You can watch our discussion of the project [here](https://www.youtube.com/watch?v=6KmD5DFKuq8).

To use this code, type `git clone https://github.com/NumbersAndFigures/IntroToWebDevelopment-4-FirstProject.git` into your terminal. This will create a new folder in your current folder named `IntroToWebDevelopment-4-FirstProject`. If you open this folder in Visual Studio Code (or your IDE of choice), you will see a file named `pickNumber.js` which will have the starting code for your project.

### Goals for the project
The goal for this project is to create a program that will pick a number between 1 and 10 and allow the user to guess that number. The program should tell the user whether they guessed too high, too low, or guessed the correct number.

### Final code
To see an example of a finished project, you can type `git checkout final` in your terminal from the `IntroToWebDevelopment-4-FirstProject` folder. Note that if you have made any changes to any files, you may receive an error.

One option to check out the final code while keeping your changes is to do run the following lines in order
```
git stash (this will store your changes within git)
git checkout final (look around at final code)
git checkout start (return back to original code)
git stash pop (bring back any changed code from git)
```