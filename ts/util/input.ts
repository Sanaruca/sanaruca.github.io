import { form } from '../constants/document';
import { MessageInput } from '../types/input';

const formElements = form.elements,
  messageElement = formElements.namedItem('message') as HTMLTextAreaElement,
  emailElement = formElements.namedItem('email') as HTMLInputElement,
  firstNameElement = formElements.namedItem('firstName') as HTMLInputElement,
  lastNameElement = formElements.namedItem('lastName') as HTMLInputElement;

export function getInput() {
  return {
    message: messageElement.value.trim(),
    email: emailElement.value.trim(),
    fullname: `${firstNameElement.value.trim()} ${lastNameElement.value.trim()}`,
  } as MessageInput;
}

export function clearInput() {
  messageElement.value = '';
  emailElement.value = '';
  firstNameElement.value = '';
  lastNameElement.value = '';
}
