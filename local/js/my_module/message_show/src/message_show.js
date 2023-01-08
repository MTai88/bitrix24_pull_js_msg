import {Loc, Type} from 'main.core';
import {MessageBox, MessageBoxButtons} from 'ui.dialogs.messagebox';

export class MessageShow {
    eventsEnabled;

    initEvents() {
        BX.addCustomEvent("onPullEvent-my_module", (command, params) => {
            if (!Type.isStringFilled(params.message)) {
                return;
            }

            this.checkType(command, params);
        });
    }

    checkType(type, params) {
        const title = params.title ? params.title : null;
        switch (type) {
            case "error":
                this.showErrorAlert(params.message, title);
                break;
            case "message":
                this.showAlert(params.message, title);
                break;
        }
    }

    showErrorAlert(message, title = null) {
        if (!Type.isStringFilled(title)) {
            title = Loc.getMessage('MT_ERROR_TITLE')
        }
        if (Type.isStringFilled(message)) {
            this.showAlert(title, message);
        }
    }

    showAlert(title = null, message) {
        MessageBox.show({
            title,
            message,
            modal: true,
            buttons: MessageBoxButtons.OK,
            onOk: (messageBox) => {
                messageBox.close();
            }
        });
    }
}

BX.ready(function () {
    if (Type.isUndefined(BX.Mymodule.MessageShow.eventsEnabled)) {
        const messageShow = new BX.Mymodule.MessageShow();
        messageShow.initEvents();
        BX.Mymodule.MessageShow.eventsEnabled = true;
    }
});
