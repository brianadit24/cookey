class AppBar extends HTMLElement {
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <nav>
            <div class="nav-wrapper pink">
            <img class="logo brand-logo center" src="https://i.ibb.co/9cT190G/cookey-logo.png" alt="cookey-logo">
            </div>
        </nav>`;
    }
 }
  
 customElements.define("app-bar", AppBar);