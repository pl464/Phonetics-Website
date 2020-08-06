const BUTTON_SIZE = 100;

class App {
    constructor (){
        this.$introductionButton = document.querySelector('#introduction-button');
        
        this.addEventListeners();
    }
    
    addEventListeners() {
        this.$introductionButton.addEventListener('click', event => {
            const bound = event.target.getBoundingClientRect();
            const hCenter = (bound.left + bound.right) / 2;
            const vCenter = (bound.top + bound.bottom) / 2;
            const clickDistance = Math.sqrt(Math.pow(event.clientX - hCenter, 2) + Math.pow(event.clientY - vCenter, 2));
            if (clickDistance > 50) return;
            console.log("Button clicked");
        })
    };
                                                   
}

console.log("hi");                                                   
new App();