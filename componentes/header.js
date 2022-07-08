const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
.header {
    width: 100%;
    height: 10vh;
    display: block;
    background-color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.inner_header {
    width: 75vw;
    height: 100%;
    display: block;
    margin: 0 auto;
}
.logo_conteiner {
    height: 100%;
    display: table;
    float: left;
}
.logo_conteiner h1 {
    color: white;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    font-size: 32px;
    font-weight: 200;
}
.logo_conteiner h1 span {
    font-weight: 800;
}
.nav {
    float: right;
    height: 100%;
}
.nav a {
    height: 100%;
    display: table;
    float: left;
    padding: 0px 20px;
    position: relative;
    border: none;
    transition: all .5s;
}
.nav a:hover {
    background: linear-gradient(135deg, aqua, blue);
}
.nav a li {
    display: table-cell;
    vertical-align: middle;
    height: 100%;
    color: white;
    font-size: 16px;
    transition: .5s;
}
.nav a li:hover {
    color: black;
}
</style>
<header>
    <div class="header">
        <div class="inner_header">
            <div class="logo_conteiner">
                <h1>Encontro de <span>Programadores</span></h1>
            </div>
            <ul class="nav">
                <a href="../index.html"><li>Inicio</li></a>
                <a href="../palestras/palestras.html"><li>Palestras</li></a>
                <a href="../adicionar/adicionar.html"><li>Adicionar</li></a>
            </ul>
        </div>
    </div>
</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('ys-header', Header);