export const defaultUrl = process.env.NODE_ENV === 'development'
  ? "http://localhost:3000"
  : "https://airsoft-events.vercel.app";


export const getErrorMessage = (
  error: unknown,
  defaultMessage: string = "Something went wrong",
) => {
  console.error(error);
  let errorMessage = defaultMessage;
  if (error instanceof Error && error.message.length < 100) {
    errorMessage = error.message;
  }
  return errorMessage;
};

export function formatName(fullName: string) {
  const nameSplit = fullName.split(" ");
  return `${nameSplit.at(0)?.charAt(0)}${nameSplit.at(nameSplit.length - 1)?.charAt(0)}`;
}


export function formatFirstName(fullName: string) {
  return fullName.split(' ').at(0)
}

export function formatLastName(fullName: string) {
  const nameSplit = fullName.split(" ");
  return nameSplit.at(nameSplit.length - 1);
}