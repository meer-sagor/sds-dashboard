export const useApiCall = async ({url}) => {
  console.log({url});
  try {
    return await $fetch(url);
  } catch (error) {
    console.log(error);
  }
};
