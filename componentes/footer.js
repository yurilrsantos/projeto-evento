const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

footer {
    heigth: 40vh;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 200;
}

.footer{
    padding: 10px;
    background-color: rgb(30, 30, 30);
    color: white;

}

.footer .social {
    text-align: center;
    padding-bottom: 2px;
    color: white;
}

footer .social a {
    font-size: 18px;
    color: inherit;
    border: 1px solid white;
    width: 40px;
    height: 40px;
    line-height: 38px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    margin: 0 8px;
    transition: .5s;
}

footer .social a:hover {
    background: linear-gradient(135deg, aqua, blue);
    color: rgb(30, 30, 30);
    border-color: rgb(30, 30, 30);
}

.footer .copyright {
    margin-top: 5px;
    text-align: center;
    font-size: 12px;
}
</style>
<footer>
    <div class="footer">
        <div class="social">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fas fa-envelope"></i></a>
        </div>
        <p class="copyright">
            &copy; Encontro de Programadores
        </p>
    </div>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('ys-footer', Footer);