define(["require", "exports", "./constants/document", "./util/input", "./util/send-message"], function (require, exports, document_1, input_1, send_message_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    document_1.form.addEventListener('submit', function () {
        (0, send_message_1.sendMessage)((0, input_1.getInput)())
            .then((res) => {
            if (!res.isOk) {
                console.error({ sendMessageError: res.error });
                return alert('the message was not sent\n\n' + JSON.stringify(res.error, null, 4));
            }
            alert('Thanks, I will reply soon!');
            (0, input_1.clearInput)();
        })
            .catch((error) => {
            alert('something is bad');
            console.log({ sendMessageError: error });
        });
    });
});
