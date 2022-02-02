
const iniciarRang = (idrang) =>{
    const  mudarvalor = () => document.getElementById(`valor-${idrang}`).textContent = document.getElementById(idrang).value;
    document.getElementById(idrang).addEventListener('input', mudarvalor);


}


export{
    iniciarRang
}