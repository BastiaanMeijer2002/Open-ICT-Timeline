class Timeline {
    
    constructor(amount_of_products){
        this.amount = amount_of_products;
        this.container = this.getContainer();
    }

    createDot (index) {
        var dot = document.createElement('div');
        var container = document.createElement('div');

        if (index % 2 === 0) {
            container.appendChild(this.createFeedbackTree());
            dot.style = 'min-height: 25px;min-width: 25px;background-color: orange;border-radius: 50%;margin-left: 0;margin-right: 0;'
            dot.className = 'dot';
            container.appendChild(dot);
        } else {
            dot.style = 'min-height: 25px;min-width: 25px;background-color: orange;border-radius: 50%;margin-left: 0;margin-right: 0;'
            dot.className = 'dot';
            container.style = 'margin-top: 3.15rem;'
            container.appendChild(dot);
            container.appendChild(this.createFeedbackTree());
        }
        return container;
    }

    createPlusDot () {
        var dot = document.createElement('div');
        dot.style = 'max-height: 25px;min-width: 25px;background-color: green;border-radius: 50%;margin-left: 0;margin-right: 0;text-align: center; margin-top: 3.15rem; '
        dot.innerHTML = '+';
        return dot;
    }

    createLine () {
        var line = document.createElement('div');
        line.style = 'height: 1px;background: black;min-width: 15%; margin-left: 0;margin-right: 0; margin-top: 3.75rem;'
        return line;
    }

    createVerticalLine () {
        var line = document.createElement('div')
        line.style = 'border-left: 2px solid black; height: 50px; position: relative; margin-left: 0.75rem;'
        return line;
    }

    createFeedbackTree (arrayLength) {
        var tree = document.createElement('div');
        tree.appendChild(this.createVerticalLine());

        for (let i=0; i<arrayLength; i++) {
            
        }
        return tree;
    }

    build () {
        this.container.appendChild(this.createDot());

        for (var i=0; i<this.amount-1; i++) {
            this.container.appendChild(this.createLine());
            this.container.appendChild(this.createDot(i));
        }

        this.container.appendChild(this.createLine());
        this.container.appendChild(this.createPlusDot());
        // this.createFeedbackTree();
    }

    getContainer () {return document.getElementById('timelineContainer')}
}



function generateTimeline(amount_of_products) {
    const timeline = new Timeline(amount_of_products)
    timeline.build();
}