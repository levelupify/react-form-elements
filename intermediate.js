// module.exports = {
//   Textfield:          require('./src/components/textfield'),
//   Textarea:           require('./src/components/textarea'),
//   Checkbox:           require('./src/components/checkbox'),
//   Dropdown:           require('./src/components/dropdown'),
//   SearchableDropdown: require('./src/components/searchable_dropdown'),
// };

import Textfield from './src/components/textfield'
import Textarea from './src/components/textarea'
import Checkbox from './src/components/checkbox'
import Dropdown from './src/components/dropdown'
import SearchableDropdown from './src/components/searchable_dropdown'

export { Textfield as Textfield };
export { Textarea as Textarea };
export { Checkbox as Checkbox };
export { Dropdown as Dropdown };
export { SearchableDropdown as SearchableDropdown };

export default {
  Textfield,
  Textarea,
  Checkbox,
  Dropdown,
  SearchableDropdown,
};
