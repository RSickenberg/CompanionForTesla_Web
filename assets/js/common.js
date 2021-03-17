import 'scss/common.scss';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

UIkit.notification('An issue has been found with CN account, it\'s not in my hand but a fix should come in the next weeks!',
    {status: 'warning', pos: 'top-right'})