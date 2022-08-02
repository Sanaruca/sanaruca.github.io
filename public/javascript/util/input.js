define(["require", "exports", "../constants/document"], function (require, exports, document_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.clearInput = exports.getInput = void 0;
    const formElements = document_1.form.elements, messageElement = formElements.namedItem('message'), emailElement = formElements.namedItem('email'), firstNameElement = formElements.namedItem('firstName'), lastNameElement = formElements.namedItem('lastName');
    function getInput() {
        return {
            message: messageElement.value.trim(),
            email: emailElement.value.trim(),
            fullname: `${firstNameElement.value.trim()} ${lastNameElement.value.trim()}`,
        };
    }
    exports.getInput = getInput;
    function clearInput() {
        messageElement.value = '';
        emailElement.value = '';
        firstNameElement.value = '';
        lastNameElement.value = '';
    }
    exports.clearInput = clearInput;
});
