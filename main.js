const linksRedesSociais = {
  github: 'miguelmachadofs',
  linkedin: 'in/miguelmfs',
  facebook: 'profile.php?id=100005870082408',
  instagram: 'miguelmachadofs',
  twitter: 'miguelmachadofs'
}

function mudarRedesSociais() {
  for (let li of linkRedeSocial.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksRedesSociais[social]}`

    //alert(li.children[0].href)
  }
}
mudarRedesSociais()

function pegarInformacoesUsuarioGitHub() {
  const url = `https://api.github.com/users/${linksRedesSociais.github}`

  /*fetch pega a resposta de uma url e "trás para o código"*/
  fetch(url)
    .then(response => response.json())
    .then(data => {
      /*não precisa do document.getElementById(), pois colocando alguma coisa com um ponto junto, o js já entende que seja um id*/
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

pegarInformacoesUsuarioGitHub()
