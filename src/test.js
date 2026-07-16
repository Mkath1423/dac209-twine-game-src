console.log("loaded test");

class CharacterCard extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="card">
                <h2>Hero</h2>
                <p>HP: 100</p>
            </div>
        `;
    }
}

customElements.define(
    "character-card",
    CharacterCard
);