# Makmur Warm Up - BookStore

![image](doc/Screenshot%20(461).png)
![image](doc/Screenshot%20(462).png)

## How To Run
Please follow the steps below:

- Install Dependencies: Open your terminal and navigate to the project's root directory. Run the following command to install all the required packages:
    ```
    yarn 
    ```

- Run the Website: Once the packages are installed, run the following command to start the website:
    ```
    yarn dev
    ```
    This command will start the development server, and the website will be accessible at the specified URL.

- Run Unit Testing: If you want to run the unit tests for the project, use the following command:
    ```
    yarn test
    ```
    This command will execute the unit tests and display the results in the terminal.

## Assumptions
Validation on form inputs was not specified in the task. Therefore, the following assumptions were made regarding input validation:
- All input fields are required. Empty fields will not be accepted.
- The title, author, and ISBN fields must follow the string pattern /^[A-Za-z0-9:-]+$/ to be considered valid. Any input not matching this pattern will be considered invalid.

There are no input for image in the UI design, so I put the default ```https://picsum.photos/200/300``` for all new book.

## Notes
Unfortunately, I encountered an issue while trying to integrate Linaria JS into this project. Despite attempting several configurations, I received the following error message: "Using the 'styled' tag in runtime is not supported. Make sure you have set up the Babel plugin correctly."