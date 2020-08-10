const BUTTON_SIZE = 100;

class App {
    constructor (){
        this.$button = document.querySelectorAll('.button');
        this.addEventListeners();
    }
    
    addEventListeners() {
        this.$button.forEach( (button) => {
            button.addEventListener('click', event => {
                const bound = event.target.getBoundingClientRect();
                const hCenter = (bound.left + bound.right) / 2;
                const vCenter = (bound.top + bound.bottom) / 2;
                const clickDistance = Math.sqrt(Math.pow(event.clientX - hCenter, 2) + Math.pow(event.clientY - vCenter, 2));
                if (clickDistance > BUTTON_SIZE/2) return;
                console.log("Button clicked");
                console.log(button.id);
                const option = document.querySelector(`#${button.id}+.options`);
                option.style.display = 'flex';
            });    
        });
        
    }
                                                   
}
                                        
new App();