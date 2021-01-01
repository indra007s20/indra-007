const help = (prefix) => {
╔═══════════════════════════════════════
║                ⚜️🐊️BOT DO TIO PAIN🐊⚜️
╠═══════════════════════════════════════
║	return `   《*Comando de sticker*》 
║╭──────────────────────
║│➸comando : *${prefix}sticker* or *${prefix}stiker*
║│➸descricao : converter imagem / gif / vídeo em adesivo
║│➸modo de uso : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n
╠════════════════════
║│➸comando : *${prefix}sticker nobg* or *${prefix}stiker nobg*
║│➸descricao : converter imagem em adesivo removendo o fundo
║│➸modo de uso : reply image, or send image with caption\
╠════════════════════
║│➸comando : *${prefix}ftosstiker*
║│➸descricao : converter adesivo em imagem
║│➸modo de uso : reply sticker\n
╠════════════════════
║│➸comando : *${prefix}tsticker* or *${prefix}tstiker*
║│➸descricao : converter texto em adesivo
║│➸modo de uso : *${prefix}tsticker text in here*\n
║╰──────────────────────
╠════════════════════════════════════════
║          《*Comandos Meme*》 
║╭──────────────────────
║│➸comando : *${prefix}meme*
║│➸descricao : imagens aleatórias de meme [english]
║│➸modo de uso : just send the command\n
╠════════════════════
║│➸comando : *${prefix}memeindo*
║│➸descricao : imagens aleatórias de meme [indo]
║│➸modo de uso : apenas envie o comando\n
║╰──────────────────────
╠════════════════════════════════════════
║         《*Outros Comandos*》 
║╭──────────────────────
║│➸comando : *${prefix}gtts*
║│➸descricao : converter texto em fala / áudio
║│➸modo de uso : *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts ja On2-chan*\n
╠════════════════════
║│➸comando : *${prefix}loli*
║│➸descricao : imagens aleatórias de loli
║│➸modo de uso : apenas envie o comando\
╠════════════════════
║│➸comando : *${prefix}nsfwloli*
║│➸descricao : imagens aleatórias de nsfw loli
║│➸modo de uso: basta enviar o comando\n
╠════════════════════
║│➸comando : *${prefix}url2img*
║│➸descricao : tirar screenshots da web
║│➸modo de uso : *${prefix}url2img [tipe] [url]*\
╠════════════════════
║│➸comando : *${prefix}simi*
║│➸descricao : sua mensagem será respondida por simi
║│➸modo de uso : *${prefix}simi sua mensagem*\n
╠════════════════════
║│➸comando : *${prefix}ocr*
║│➸descricao : pegue o texto na foto
║│➸modo de uso : responder imagem ou enviar imagem com legenda\n
╠════════════════════
║│➸comando : *${prefix}wait*
║│➸descricao : procure anime com imagem [ O que anime é isso / aquilo ]
║│➸modo de uso : responder imagem ou enviar imagem com legendan\n
╠════════════════════
║│➸comando : *${prefix}setprefix*
║│➸descricao : substituir prefixo
║│➸modo de uso : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
║│➸nota : Este comando só pode ser usado pelo proprietário do bot\n
║
╠════════════════════════════════════════
║        《*comandos de grupo*》
║
║│➸comando : *${prefix}linkgroup*
║│➸descricao : pegue o link do grupo
║│➸modo de uso : just send the command\
║│➸nota : can only be used when the bot becomes admin, and the one who sends the ║│➸command is admin!\n
╠════════════════════
║│➸comando : *${prefix}tagall*
║│➸descricao : marca todos os membros do grupo, incluindo administradores também
║│➸modo de uso : apenas envie o comando
║│➸nota : Este comando pode ser usado se você for um administrador do grupo\n
╠════════════════════
║│➸comando : *${prefix}simih*
║│➸descricao : ative o modo simi no grupo
║│➸modo de uso : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* para ║│➸desativar o modo simi
║│➸nota : Este comando pode ser usado se você for um admin\n
╠════════════════════
║│➸comando: *${prefix}add
║│➸descricao: adiciona um membro ao grupo
║│➸modo de uso: *${prefix}add 55999998888
║│➸nota:o bot precisa ser adm!\n
╠════════════════════
║│➸comando: *${prefix}kick
║│➸descricao: banir membro do grupo
║│➸modo de uso: *${prefix}kick @tag do membro
║│➸nota: o bot precisa ser adm!\n
╠════════════════════
║│➸comando: *${prefix}promote
║│➸descricao: promve um membro a ser adm
║│➸modo de uso: *${prefix}promote @tag do membro
║│➸nota:o bot precisa ser adm!\n
╠════════════════════
║│➸comando: *${prefix}demote
║│➸descricao:despromover um admin
║│➸modo de uso: *${prefix}demote @tag do membro
║│➸nota: o bot precisa ser adm!\n
╠════════════════════
║│➸comando: *${prefix}listadmins
║│➸descricao: chamar todos os adms
║│➸modo de uso: *${prefix}listaadms
║│➸nota: somente em grupo\n
╠════════════════════
║│➸comando: *${prefix}welcome
║│➸descricao:para ter recepção ao entrar um membro 
║│➸modo de uso:*${prefix}bemvindo 1 para desativar e *${prefix}bemvindo 0
║│➸nota:1 para ativar, 0 para desativar e o bot tem que ser adm\n
╠════════════════════
║│➸comando: *${prefix}clone
║│➸descricao: clona a foto de perfil de qual quer membro
║│➸modo de uso: *${prefix}clone @tag do membro
║│➸nota:so adm pode usar
╠════════════════════════════════════════
║           《yt comandos》
║
║│➸comando: *${prefix}yt2mp3
║│➸descricao: faz do download de musica mp3
║│➸modo de uso:*${prefix}yt2mp3 com o link da musica 
║│➸nota:so digitar e mandar\n
╠════════════════════
║│➸comando: *${prefix}ytsearch
║│➸descricao:procura musica e videos
║│➸modo de uso:*${prefix}ytsearch nome do video ou musica
║│➸nota:so digitar e mandar\n
╠════════════════════════════════════════
║           《tiktok comando》
║
║│➸comando: *${prefix}tiktok
║│➸descricao: abaixa video de tiktok
║│➸modo de uso:*${prefix}tiktok e o link do tiktok
║│➸nota: so digitar e mandar\n
╠════════════════════
║│➸comando: *${prefix}tiktokstalk
║│➸descricao: procura o tiktok da pessoa
║│➸modo de uso:*${prefix}tiktokstalk e o username do tiktoker
║│➸nota:so digitar e mandar\n
╠════════════════════════════════════════
║╭───────────────────
║│➸DONO DO BOT: TIO PAIN🐊🙌🔱
╠════════════════════
║│➸CONTATO: wa.me/11949545217
╠════════════════════
║│➸🔱BASE BOT : BY TIO PAIN
╠════════════════════
║│➸ STATUS BOT: BOT ULTRA VIP
╠════════════════════
║                 ⚜️🐊️BOT DO TIO PAIN🐊⚜️
╚═════════════════════════════════════════
}

exports.help = help




