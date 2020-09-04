class SearchBar extends HTMLElement {
  
    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        return this.querySelector("#searchElement").value;
    }
  
    render() {
        this.innerHTML = `
        <nav>
            <div class="nav-wrapper pink">
                <div id="search-container" class="input-field col s12 search-container">
                    <div class="input-field center">
                    <input id="searchElement" type="search" placeholder="What menu are you looking for today?">
                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                    <i class="material-icons">close</i>
                    <button id="searchButtonElement" class="waves-effect waves-light btn-large pink pulse" type="submit" name="action">SEARCH RECIPE</button>
                    </div>
                </div>
            </div>
        </nav>
        `;
  
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
 }
  
 customElements.define("search-bar", SearchBar);