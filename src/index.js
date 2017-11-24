import React from 'react';
import ReactDOM from 'react-dom';

import Produtcts from './products';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Produtcts />, document.getElementById('root'));
registerServiceWorker();
