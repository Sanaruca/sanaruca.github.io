import { form } from './constants/document';
import { getInput, clearInput } from './util/input';
import { sendMessage } from './util/send-message';

form.addEventListener('submit', function () {
  sendMessage(getInput())
    .then((res) => {
      if (!res.isOk) {
        console.error({ sendMessageError: res.error });
        return alert(
          'the message was not sent\n\n' + JSON.stringify(res.error, null, 4)
        );
      }
      alert('Thanks, I will reply soon!');
      clearInput();
    })
    .catch((error) => {
      alert('something is bad');
      console.log({ sendMessageError: error });
    });
});
