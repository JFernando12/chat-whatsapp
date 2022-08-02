import { Client } from "whatsapp-web.js";
import qrcode from 'qrcode-terminal';

//@ts-ignore
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true })
})

client.on('ready', () => {
    console.log('Client is ready!');
})

const bloqueados = ['5217551325370-1433626490@g.us', 'status@broadcast'];
const typeBloqueados = ['image', 'video'];

client.on('message', msg => {
    if(msg.body == '!ping') {
        msg.reply('pong');
    }
    if(!bloqueados.includes(msg.from) && !typeBloqueados.includes(msg.type)) {
        console.log(msg);
    }
})

client.initialize();