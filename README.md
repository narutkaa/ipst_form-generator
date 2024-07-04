# Form generator

This project is a form generator built with React. It dynamically generates forms based on provided JSON configuration files. The project uses Bootstrap for styling.

## Configuration

The forms are generated based on JSON configuration files located in the `src/data` directory. Each JSON file defines the structure of a form, including its fields and buttons. Here are examples of the configuration files:

### form-test-1.json

```json
{
  "title": "Test #1",
  "fields": [
    {
      "label": "First Name",
      "attrs": {
        "name": "name",
        "type": "text"
      }
    },
    {
      "label": "Last Name",
      "attrs": {
        "name": "surname",
        "type": "text"
      }
    },
    {
      "label": "Middle Name",
      "attrs": {
        "type": "text",
        "name": "middlename"
      }
    }
  ],
  "buttons": ["submit", "clear"]
}
```

### form-test-2.json

```json
{
  "title": "Test #2",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque ducimus eius ex iste nihil nisi nobis praesentium repellendus rerum.",
  "fields": [
    {
      "label": "What's your name?",
      "attrs": {
        "name": "name",
        "type": "text"
      }
    },
    {
      "label": "Your Gender",
      "attrs": {
        "name": "sex",
        "type": "radio",
        "variants": [
          {
            "value": "male",
            "label": "Male"
          },
          {
            "value": "female",
            "label": "Female"
          }
        ]
      }
    },
    {
      "label": "Tell us about yourself",
      "attrs": {
        "name": "about",
        "type": "textarea"
      }
    }
  ],
  "buttons": ["submit"]
}
```

### form-test-3.json

```json
{
  "title": "Test #3",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cumque ducimus eius ex iste nihil nisi nobis praesentium repellendus rerum.",
  "fields": [
    {
      "label": "What's your name?",
      "attrs": {
        "name": "name",
        "type": "text"
      }
    },
    {
      "label": "Your Gender",
      "attrs": {
        "name": "sex",
        "type": "select",
        "variants": [
          {
            "value": "male",
            "label": "Male"
          },
          {
            "value": "female",
            "label": "Female"
          }
        ]
      }
    },
    {
      "label": "Tell us about yourself",
      "attrs": {
        "name": "about",
        "type": "textarea"
      }
    },
    {
      "label": "What roles in IT would you like to try?",
      "attrs": {
        "name": "question-1",
        "type": "checkbox",
        "variants": [
          {
            "value": "F",
            "label": "Frontend Developer"
          },
          {
            "value": "B",
            "label": "Backend Developer"
          },
          {
            "value": "M",
            "label": "Manager"
          },
          {
            "value": "QA",
            "label": "Tester"
          },
          {
            "value": "D",
            "label": "Designer"
          }
        ]
      }
    }
  ],
  "buttons": ["submit"]
}
```