import { notification } from "antd";

export const copyTextToClipboard = (id: string) => {
  var copyText = document.getElementById(id) as HTMLInputElement;
  if (copyText) {
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
  }
  notification.open({
    message: "Copy to Clipboard",
    description: "Code have been copy to clipboard",
  });
};

export const stringFormat = (input: string, ...replacer: string[]) => {
  for (let i = 0; i < replacer.length; i++) {
    input = input.replaceAll(`{${i}}`, replacer[i]);
  }
  return input;
};
