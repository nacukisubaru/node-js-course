const cluster = require('cluster');
const os = require('os');

//console.log(os.platform());
//console.log(os.arch());
//количество потоков проца
//console.log(os.cpus().length);

const cpus = os.cpus();
//главный процесс
if(cluster.isPrimary) {
    //создание дочерних процессов
    for(let i = 0; i < cpus.length -2; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker) => {
        console.log(`Воркер с pid = ${worker.process.pid} умер`);
        cluster.fork();
    })
} else {
    console.log(`Воркер с pid = ${process.pid} запущен`);
    
    setInterval(()=>{
        console.log(`Воркер с pid = ${process.pid} ещё работает`);
    }, 5000);
}