export const promiseWithDelay = (delay, args = []) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try{
        resolve(args);
      }
      catch(error){
        reject(error);
      }
    }, delay)
  })
}