// searchinput
// searchbtn


//     const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=bright';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'b35025c8d1mshd4b28c032113469p1fbe6bjsn5b11b67e4657',
//             'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }

const dictionary = (word)=>{
const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b35025c8d1mshd4b28c032113469p1fbe6bjsn5b11b67e4657',
                'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
            }
        };

        fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+word, options)
        .then(response => response.json())
        .then((response) =>{
             
             console.log(response)
             wordinput.innerHTML='Meaning of : '+response.word;
             definition.innerHTML=response.definition.replace('2.','<br>2.').replace('3.','<br>3.').replace('4.','<br>4.').replace('5.','<br>5.').replace('6.','<br>6.').replace('7.','<br>7.');

            })
        .catch(err => console.error(err));
    }
searchbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})
