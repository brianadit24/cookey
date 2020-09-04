class MealItem extends HTMLElement {
  
    set meal(meal) {
        this._meal = meal;
        this.render();
    }
  
    render() {
        this.innerHTML = `
            <div class="card" id="id${this._meal.idMeal}">
                <div class="card-image">
                    <img src="${this._meal.strMealThumb}" alt="Meal Image">
                    <a href="#id${this._meal.idMeal}" class="halfway-fab btn-floating pink pulse">
                    <i class="material-icons">favorite</i>
                    </a>
                </div>
                <div class="card-content">
                    <span class="card-title pink-text"><b>${this._meal.strMeal}</b></span>
                    <br>
                    <h6><b>Instructions :</b></h6>
                    <p>${this._meal.strInstructions}</p>
                </div>
                <div class="card-action center pink pulse">
                    <a href="${this._meal.strYoutube}" target="_blank" class="white-text">Check This Instruction Video</a>
                </div>
            </div>`;
    }
}
  
customElements.define("meal-item", MealItem);