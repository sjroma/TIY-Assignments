// The Form Data
// Write your code below this array
let formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "ES"
      },
      {
        "label": "Chinese",
        "value": "CZ"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// Hints -----------

// Accessing specific properties.
formData[0].label // this will give us "First Name"
// as you can see we access the first element in the array
// with [0] and then grab the property "label" using the "." character

function createLabel(fieldDef) {
  let labelNode = document.createElement("label");
  labelNode.setAttribute("for", fieldDef.id);
  // labelNode.textContent = fieldDef.label;
  labelNode.innerText = fieldDef.label;

  return labelNode;
}

function createSelect(fieldDef) {
  console.log("select", fieldDef);
  let divNode = document.createElement("div");
  let labelNode = createLabel(fieldDef);

  let selectNode = document.createElement("select");
  selectNode.setAttribute("id", fieldDef.id);
  selectNode.setAttribute("name", fieldDef.id);

  for (let i = 0; i < fieldDef.options.length; i++) {
    let optionDef = fieldDef.options[i];
    let optionNode = document.createElement("option");
    optionNode.setAttribute("value", optionDef.value);
    optionNode.innerText = optionDef.label;
    selectNode.appendChild(optionNode);
  }

  divNode.appendChild(labelNode);
  divNode.appendChild(selectNode);

  return divNode;
}

function createTextarea(fieldDef) {
  console.log("textarea", fieldDef);
  let divNode = document.createElement("div");
  let labelNode = createLabel(fieldDef);

  let textareaNode = document.createElement("textarea");
  textareaNode.setAttribute("id", fieldDef.id);
  textareaNode.setAttribute("name", fieldDef.id);

  divNode.appendChild(labelNode);
  divNode.appendChild(textareaNode);

  return divNode;
}

function createInput(fieldDef) {
  console.log("input", fieldDef);
  let divNode = document.createElement("div");
  let labelNode = createLabel(fieldDef);

  let inputNode = document.createElement("input");
  inputNode.setAttribute("type", fieldDef.type);
  inputNode.setAttribute("id", fieldDef.id);
  inputNode.setAttribute("name", fieldDef.id);

  divNode.appendChild(labelNode);
  divNode.appendChild(inputNode);

  return divNode;
}

function createFieldNode(fieldDef) {
  let fieldNode;
  if (fieldDef.type === "select") {
    fieldNode = createSelect(fieldDef);
  } else if (fieldDef.type === "textarea") {
    fieldNode = createTextarea(fieldDef);
  } else {
    fieldNode = createInput(fieldDef);    
  }
  return fieldNode;
}

let fieldsNode = document.querySelector(".fields");

// Looping
// Sample of how to loop over the formData
for(let i=0; i<formData.length; i++){
  let fieldDef = formData[i];
  // Check your dev tools console for what the items in formData have
  let fieldNode = createFieldNode(fieldDef);
  fieldsNode.appendChild(fieldNode);
}


// -------- Your Code Goes Here --------

