export const convertToByteArray = (base64Data: string): number[] =>
  Array.from(Buffer.from(base64Data?.split(",")[1] ?? "", "base64"));
