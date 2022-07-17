import { NewMessageResponse } from '../types/resBody';
import { MessageInput } from '../types/input';

export async function sendMessage({ email, fullname, message }: MessageInput) {
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

    const res = await fetch('https://sanaruca-contact.herokuapp.com/new', {
      method: 'POST',
      body: bodyContent,
      headers: headersList,
    });

    // if (!res.ok) throw 'res is not ok';

    const resJSON: NewMessageResponse = await res.json();
    return resJSON;
  } catch (error) {
    throw new Error(error as any);
  }
}
