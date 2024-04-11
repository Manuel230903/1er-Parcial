ejecutar();
function ejecutar(){
    let f = new Date();
    let h = f.getHours();
    let m = f.getMinutes();
    let s = f.getSeconds();

    let hora = h+":"+m+":"+s;

    document.getElementById('reloj').innerHTML=hora;
    setTimeout(()=>{ejecutar()},1000);
}
