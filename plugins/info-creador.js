import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
   await m.react('🎩');

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let edtr = `@${m.sender.split`@`[0]}`;
    let username = conn.getName(m.sender);

    // VCARD
    let list = [{
        displayName: "𝘞𝘪𝘳𝘬 🎩",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN: 𝑾𝒊𝒓𝒌 𝑶𝑭𝑪 🍭\nitem1.TEL;waid=50493732693:50493732693\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNET: sparknova40@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://www.instagram.com/Michibot_wa\nitem3.X-ABLabel:Internet\nitem4.ADR:;; Honduras;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
    }];

    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: `${list.length} Contacto`,
            contacts: list
        },
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: 'һ᥆ᥣᥲ ',
                body: dev,
                thumbnailUrl: 'https://files.catbox.moe/445fzg.jpg',
                sourceUrl: 'https://github.com/Ado926',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    let txt = `👋 *Hola \`${username}\` este es*\n*el contacto de mi creador*`;

    await conn.sendMessage(m.chat, { text: txt });
};

handler.help = ['owner', 'creator'];
handler.tags = ['main'];
handler.command = /^(owner|creator|creador|dueño)$/i;

export default handler;