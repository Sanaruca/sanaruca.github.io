var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sendMessage = void 0;
    function sendMessage({ email, fullname, message }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let headersList = {
                    Accept: '*/*',
                    'Content-Type': 'application/json',
                };
                let bodyContent = JSON.stringify({
                    fullname,
                    email,
                    message,
                });
                const res = yield fetch('https://sanaruca-contact.herokuapp.com/new', {
                    method: 'POST',
                    body: bodyContent,
                    headers: headersList,
                });
                const resJSON = yield res.json();
                return resJSON;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    exports.sendMessage = sendMessage;
});
