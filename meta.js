{
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "label": "Project name"
    },
    "description": {
      "type": "string",
      "required": true,
      "label": "Project description",
      "default": "A package project"
    },
    "author": {
      "type": "string",
      "label": "Author"
    },
    "license": {
      "type": "string",
      "label": "License",
      "default": "MIT"
    }
  },
  "completeMessage": "{{#inPlace}}To get started:\n\n  npm install\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev{{/inPlace}}"
}
