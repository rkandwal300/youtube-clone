import axios from 'axios' ;

const base_url = 'https://youtube138.p.rapidapi.com';
const options = {
  params: { hl: "en", gl: "US" },
	headers: {
    
    'X-RapidAPI-Key': 'ee8267b9f3msh0d8220beb39cfb9p114a6djsnc87617053c6a',
		// 'X-RapidAPI-Key': '57507a7b0dmsh827c87992879911p1122ccjsn84dce5960443',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	} ,
};



  
  
  export async function  dataApi (url){     
     const {data} =  await  axios.get(`${base_url}/${url}`,options) ;
    return data ;
}

