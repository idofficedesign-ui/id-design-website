async function loadComponent(id, file) {

  const response = await fetch(file);
  const data = await response.text();

  document.getElementById(id).innerHTML = data;

}


loadComponent("navbar", "./components/navbar.html");
loadComponent("footer", "./components/footer.html");
loadComponent("whatsapp", "./components/whatsapp.html");
loadComponent("cta-porto", "./components/cta-porto.html");
loadComponent("cta-porto-detail", "./components/cta-porto-detail.html");
