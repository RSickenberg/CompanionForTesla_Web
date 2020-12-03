import 'scss/common.scss';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);
UIkit.notification({
    message: 'WIP Texts!',
    timeout: null,
    status: "warning",
    pos: "top-center"
})