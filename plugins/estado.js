let handler = async (m, { conn, command, usedPrefix }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send3Button(m.chat, `
*ใ๐ Hola estimado usuario ๐ๅฝก*

*ใ๐ค Estado del Bot ๐คๅฝก*
*=> Bot activo โ๏ธ*
*=> Bot uso pรบblico โ๏ธ*
`.trim(), 'โข๐๐ฎ๐๐ธ๐ผ๐ถ๐ฒ๐ฌ - ๐๐๐ฃ', '๐ท๏ธ MENร ๐ท', `${usedPrefix}menu`, '๐ถ๏ธ MENร SIMPLE ๐ถ๏ธ', `${usedPrefix}menusimple`, '๐ ๏ธ MENร AUDIOS ๐ ๏ธ', `${usedPrefix}menuaudios`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(estado|status|estate|state|stado|stats)$/i
module.exports = handler
