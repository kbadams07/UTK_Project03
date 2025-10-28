# UTK_Project03

Name
-Kennedy Adams

Project Overview
-React web app to submit, view, and track status of to do tasks. Feedback form is provided on the contact page.

Functionality
-Navigation between pages
-Displays to do tasks
-Allows users to create, delete, and change the status of tasks
-Allows users to filter tasks by completion status
-Allows user to submit feedback form

Technologies Used
-React
-CSS
-JavaScript

Future Improvements
-Add due dates
-Add calendar view
-Add priority
-Add other categories/labels/color coding


User Stories
-As a user, I want to add new tasks to my to do list.
-As a user, I want to be able to check off tasks as I complete them.
-As a user, I want to be able to view all of my tasks in a list.
-As a user, I want to be able to distinguish between completed and incompleted tasks in my overall list.
-As a user, I want to be able to delete tasks as needed.
-As a user, I want to be able to provide feedback to the app developer through a contact form.


State Tree
App State:
{
  todos: [
    {
      id: 1,
      text: "Task A",
      completed: false
    },
    ...
  ],
  filter: "all" // "all" | "completed" | "incomplete"
}

ContactForm (local component state only):
{
  firstName: "",
  lastName: "",
  email: "",
  comments: ""
}


Component List
-App (Container)
-Navbar (Presentational)
-TodosPage (Container)
-TodoForm (Presentational)
-TodoList (Presentational)
-TodItem (Presentational)
-FilterButtons (Presentational)
-ContactPage (Container)
-ContactForm (Presentational)


GitHub Pages Link
https://kbadams07.github.io/UTK_Project03/

GitHub Repo Link
https://github.com/kbadams07/UTK_Project03
