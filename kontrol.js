//โซฐโซฏ ๐ต๐๐๐ : ๐ฒ๐๐๐๐ ๐ด๐๐ ๐ซ๐ ๐ฏ๐๐๐๐ ๐ด๐๐๐๐ ๐ซ๐๐๐ ๐ต๐๐๐ ๐บ๐๐๐๐ ๐๐๐๐ ๐ฉ๐๐๐๐ ๐บ๐๐๐๐๐ ๐ซ๐๐ ๐ด๐๐๐๐๐๐๐ ๐ต๐๐

//๐๐ฎ๐ญ๐ก๐จ๐ซ : ๐ฒ๐๐๐ ๐ฏ๐๐๐๐๐๐
//๐๐ : 085786211623 / 0882007324217
//sc : nazedev
//๐๐ฒ ๐๐ซ๐จ๐ฃ๐๐๐ญ : 10 ๐ถ๐๐๐๐๐๐ 2022

//โซนโฐโซบ ๐ต๐ผ๐บ ๐๐ป๐ด๐๐พ๐ ๐๐ โซนโฑโซบ
//โญ ๐จ๐๐๐๐ ๐๐๐๐ ๐ด๐๐๐ ๐ฌ๐๐
//โญ ๐ถ๐๐๐๐ ๐ป๐๐
//โญ ๐ป๐๐๐๐ ๐ฎ๐
//โญ ๐๐๐๐ ๐ผ๐๐๐ ๐บ๐๐๐๐๐๐ ๐ฎ๐๐

//โซนโซบ ๐๐๐ ๐๐๐๐ ๐๐๐๐ก ๐ป๐๐๐๐๐ ๐๐ โซนโซบ
//โธโธโธโธโธโธโธโธโธโธโธโธโธโธโธโธโธโธโธโธ
//โญ ๐จ๐๐๐๐๐๐๐๐๐๐๐
//โญ ๐น๐๐๐๐๐ฉ๐๐๐ ๐ถ๐๐๐
//โญ ๐ฑ๐๐๐๐ ๐ถ๐๐๐
//โญ ๐ช๐๐๐๐๐๐๐๐ ๐ฐ๐
//โญ ๐จ๐๐๐
//โญ ๐๐๐๐๐๐ ๐ถ๐๐
//โญ ๐ฒ๐๐๐ ๐ฏ๐๐๐๐๐๐//

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6285786211623']
global.ownernomer = "6285786211623"
global.premium = ['6285786211623']
global.packname = 'Sticker By'
global.author = 'Kris Hosting'
global.sessionName = 'krisss'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'โDone',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 10
}
global.thumb = fs.readFileSync('./media/image/kris.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/krishosting569'
global.myyt = 'https://youtube.com/channel/UCL0sl0mTiIxL-qjiM9oQwrg'
global.myytv = 'https://youtu.be/sHVzVFMHHk8'
global.mygc = "https://chat.whatsapp.com/KeyflNVrBsN6ctjfevI3n0"
global.botname = 'KrisBotz'
global.akulaku = 'Bot KrisHosting'
global.ytname = 'KrisHosting'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
