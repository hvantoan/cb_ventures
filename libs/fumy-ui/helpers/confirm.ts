import { createConfirmationCreater, createMountPoint, createReactTreeMounter } from 'react-confirm';

import { ConfirmDialog } from '../components/confirm-dialog';

const mounter = createReactTreeMounter();
export const MountPoint = createMountPoint(mounter);

const creator = createConfirmationCreater(mounter);

export const confirm = creator(ConfirmDialog);
