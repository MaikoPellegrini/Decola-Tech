async function resolvePromise (){
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvido !'));
    },2000);
});

let result;

  try {

    result = await myPromise
    .then((result)=>result + ' passando pelo then')
    .then((result)=>result + ' agora acabou')
    }catch(err) {
        result =  err.message;
    }
    return resolved;
}
console.log (resolvePromise);