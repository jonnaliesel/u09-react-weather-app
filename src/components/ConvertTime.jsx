export default function convertTime(timestamp, options){
/*     let dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
 */

//  console.log(timestamp);
 /* console.log(options); */

    // return new Date(timestamp*1000).toLocaleTimeString("sv-SE")

    return Intl.DateTimeFormat('sv-SE', options).format(timestamp * 1000);
}
