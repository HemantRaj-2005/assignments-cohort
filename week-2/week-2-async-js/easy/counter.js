/*
function main(){
    for(let i = 0; i < 10; i++){
        //add a delay of 1 second before the next iteration
        setTimeout(() => {
            console.log(i);
        }, 1000*i);
    }

    // create a counter that counts from 0 to 9
}

main();
*/

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main(){
    for(let i = 0; i < 10; i++){
        console.log(i);
        await delay(1000);
    }
}

main();