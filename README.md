# UTK_Project03

Name
-Kennedy Adams

Project Overview
-XXXX

Functionality
-XXXX

Technologies Used
-XXXX
-XXXX
-XXXX

Future Improvements
-XXX
-XXX
-XXX


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