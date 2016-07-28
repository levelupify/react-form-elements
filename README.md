# React Form Elements

This is a set of form elements for React implemented as [Formsy](https://github.com/christianalfoni/formsy-react) components.

## Usage
First, install the package in your project:

```sh
npm install --save git+ssh://git@github.com:levelupify/react-form-elements.git
```

Then import the parts you want to use:

```js
import {Textfield} from 'react-form-elements';
import {Textarea} from 'react-form-elements';
import {Checkbox} from 'react-form-elements';
import {Dropdown} from 'react-form-elements';
import {SearchableDropdown} from 'react-form-elements';
```

Then, use them in the `render` method:

```html
<Formsy.Form ...>
  <Textfield ... />
  <Checkbox ... />
  <Dropdown>
    ...
  </Dropdown>
</Formsy.Form>
```

Most components accept the standard props for the HTML elements they represent, ie. **Textfield** accepts `placeholder`, `value` etc.

## Styling

The components can be styled by targetting the class *.lvlp-<name of component>*, for example:

```css
.lvlp-textfield {
  background-color: #ddd;
}

.lvlp-checkbox {
  border: none;
}
```

The class is applied to the outermost HTML element of the component, so if a component adds one or more wrappers around the *actual* form elements you may need to target sub-elements:

```css
.lvlp-textfield input {
  background-color: #ddd;
}

.lvlp-textarea textarea {
  border: none;
}
```

Look at the source or use your browser’s inspect tool to figure out the structure of a given component.
