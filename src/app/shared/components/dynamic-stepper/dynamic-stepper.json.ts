export const dynamicStepperJson = [
  { 
    "label": "Step 1", 
    "content": "Content for Step 1",
    "fields": [
      { "name": "firstName", "label": "First Name", "type": "text", "validators": ["required"] },
      { "name": "description", "label": "Description", "type": "textarea", "validators": [] },
      { "name": "options", "label": "Options", "type": "select", "options": [{"label": "Option 1", "value": 1}, {"label": "Option 2", "value": 2}], "validators": ["required"] }
    ]
  },
  { 
    "label": "Step 2", 
    "content": "Content for Step 2",
    "fields": [
      { "name": "email", "label": "Email", "type": "email", "validators": ["required", "email"] },
      { "name": "agree", "label": "Agree to Terms", "type": "checkbox", "validators": ["required"] },
      { "name": "gender", "label": "Gender", "type": "radio", "options": [{"label": "Male", "value": "male"}, {"label": "Female", "value": "female"}], "validators": ["required"] }
    ]
  }
]
