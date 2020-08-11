const BUTTON_SIZE = 100;

class App {
    constructor (){
        this.$buttons = document.querySelectorAll('.button');
        this.addEventListeners();
    }
    
    addEventListeners() {
        this.$buttons.forEach( (button) => {
            button.addEventListener('click', event => {
                const bound = event.target.getBoundingClientRect();
                const hCenter = (bound.left + bound.right) / 2;
                const vCenter = (bound.top + bound.bottom) / 2;
                const clickDistance = Math.sqrt(Math.pow(event.clientX - hCenter, 2) + Math.pow(event.clientY - vCenter, 2));
                if (clickDistance > BUTTON_SIZE/2) return;
                console.log("Button clicked");
                console.log(button.id);
                const option = document.querySelector(`#${button.id}+.options`);
                
                this.$buttons.forEach( (button) => {
                    let option = document.querySelector(`#${button.id}+.options`);
                    if (option.classList.contains('options-open-animation')) {
                        option.classList.remove('options-open-animation');
                        option.classList.add('options-close-animation');
                    }
//                    option.style.visibility = 'hidden';
//                    option.style.opacity = '0';
                });
                option.classList.remove('options-close-animation');
                option.classList.add('options-open-animation');
//                option.style.visibility = 'visible';
//                option.style.opacity = '1';
            });    
        });
        
    }
                                                   
}
                                        
new App();