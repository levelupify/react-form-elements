## React Form Elements

This is a set of form elements for React implemented as [Formsy](https://github.com/christianalfoni/formsy-react) components.

## Usage
First, install the package in your project:

```sh
npm install --save git+ssh://git@github.com:levelupify/react-form-elements.git
```

Then import the elements you want to use (from the "dist" folder):

```js
import Textfield from 'react-form-elements/dist/textfield';
import Textarea from 'react-form-elements/dist/textarea';
import Checkbox from 'react-form-elements/dist/checkbox';
import Dropdown from 'react-form-elements/dist/dropdown';
import SearchableDropdown from 'react-form-elements/dist/searchable_dropdown';
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
