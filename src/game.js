
class Tool {
    constructor(passage){
        this.template = passage
    }
}

class Game {
    constructor(){
        this.test = 1;

        this.tools = []
    }   
}

function setup(){
    window.story.state = new Game();
}

$(setup);