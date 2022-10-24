class Timeline {
    
    constructor(amount_of_products){
        this.amount = amount_of_products;
        this.container = this.getContainer();
    }

    createDot (index) {
        var dot = document.createElement('div');
        var container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexDirection = 'column';

        if (index % 2 === 0) {
            container.appendChild(this.createBranches(5, index));
            dot.style = 'height: 40px;width: 40px;background-color: orange;border-radius: 50%;margin-left: 0.75rem;margin-right: 0.75rem;'
            dot.className = 'dot';
            container.appendChild(dot);
        } else {
            dot.style = 'height: 40px;width: 40px;background-color: orange;border-radius: 50%;margin-left: 0.75rem;margin-right: 0.75rem;'
            dot.className = 'dot';
            container.style = 'margin-top: 3.15rem;'
            container.appendChild(dot);
            let branches = this.createBranches(5, index);
            container.appendChild(branches);
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
        line.style = 'height: 1px;background: black;min-width: 35%; margin-left: 0;margin-right: 0; margin-top: 4.25rem;'
        return line;
    }

    createVerticalLine () {
        var line = document.createElement('div')
        line.style = 'border-left: 2px solid black; height: 50px; position: relative; margin-left: 0.75rem;'
        return line;
    }


    createBranches (amount, index) {
        let branches = document.createElement('div');
        // branches.style.display = 'flex';
        // branches.style.flexDirection = 'row';
        branches.style = 'display:flex; flex-direction:row; position: relative; right: 9%;'
    
        if (index % 2 !== 0){
            switch (amount) {
                case 1:
                    branches.appendChild(this.createVerticalLine());
                    branches.style.marginLeft = 25;
                    break;
                case 2:
                    branches.appendChild(this.createRotatedLine(15));
                    branches.appendChild(this.createRotatedLine(-15));
                    branches.style.marginLeft = 17.5;
                    break;
                case 3:
                    for (let i=0; i<amount; i++) {
                        if (i===0) {
                            branches.appendChild(this.createRotatedLine(28));
                        } else if (i===1) {
                            branches.appendChild(this.createVerticalLine());
                        } else {
                            branches.appendChild(this.createRotatedLine(-28));
                        }
                    }
                    branches.style.marginLeft = 10;
                    break;
                case 4:
                    for (let i=0; i<amount; i++) {
                        if (i===0) {
                            branches.appendChild(this.createRotatedLine(15));
                        } else if (i===1) {
                            let line = this.createRotatedLine(5);
                            line.style.marginTop = '10%';
                            branches.appendChild(line);
                        } else if (i===2) {
                            let line = this.createRotatedLine(-5);
                            line.style.marginTop = '10%';
                            branches.appendChild(line);
                        } else {
                            branches.appendChild(this.createRotatedLine(-15));
                        }
                    }
                    branches.style.marginLeft = 2.5;
                    break;
                case 5:
                    branches.appendChild(this.createRotatedLine(25));

                    let line = this.createRotatedLine(15);
                    line.style.marginTop = '10%';
                    branches.appendChild(line);


                    line = this.createRotatedLine(5);
                    line.style.marginTop = '15%';
                    branches.appendChild(line);

                    line = this.createRotatedLine(-5);
                    line.style.marginTop = '15%';
                    branches.appendChild(line);

                    line = this.createRotatedLine(-15);
                    line.style.marginTop = '10%';
                    branches.appendChild(line);

                    branches.appendChild(this.createRotatedLine(-25));

                    branches.style.marginLeft = -7.5;
                    break;

            }
        } else {
            switch (amount) {
                case 1:
                    branches.appendChild(this.createVerticalLine());
                    branches.style.marginLeft = 25;
                    break;
                case 2:
                    branches.appendChild(this.createRotatedLine(-15));
                    branches.appendChild(this.createRotatedLine(15));
                    branches.style.marginLeft = 17.5;
                    break;
                case 3:
                    for (let i=0; i<amount; i++) {
                        if (i===0) {
                            branches.appendChild(this.createRotatedLine(-28));
                        } else if (i===1) {
                            branches.appendChild(this.createVerticalLine());
                        } else {
                            branches.appendChild(this.createRotatedLine(28));
                        }
                    }
                    branches.style.marginLeft = 10;
                    break;
                case 4:
                    for (let i=0; i<amount; i++) {
                        if (i===0) {
                            branches.appendChild(this.createRotatedLine(-15));
                        } else if (i===1) {
                            let line = this.createRotatedLine(-5);
                            // line.style.height = '90%';
                            line.style.marginTop = '-10%';
                            branches.appendChild(line);
                        } else if (i===2) {
                            let line = this.createRotatedLine(5);
                            // line.style.height = '90%'
                            line.style.marginTop = '-10%';
                            branches.appendChild(line);
                        } else {
                            branches.appendChild(this.createRotatedLine(15));
                        }
                    }
                    branches.style.marginLeft = 2.5;
                    break;
                case 5:
                    branches.appendChild(this.createRotatedLine(-25));

                    let line = this.createRotatedLine(-15);
                    line.style.marginTop = '-10%';
                    branches.appendChild(line);


                    line = this.createRotatedLine(-5);
                    line.style.marginTop = '-15%';
                    branches.appendChild(line);

                    line = this.createRotatedLine(5);
                    line.style.marginTop = '-15%';
                    branches.appendChild(line);

                    line = this.createRotatedLine(15);
                    line.style.marginTop = '-10%';
                    branches.appendChild(line);

                    branches.appendChild(this.createRotatedLine(25));

                    branches.style.marginLeft = -7.5;
                    break;
                

            }
            

            
        }


        return branches;

    } 

    createRotatedLine (degrees) {
        let line = this.createVerticalLine();

        line.style.mozTransform    = 'rotate('+degrees+'deg)';
        line.style.msTransform     = 'rotate('+degrees+'deg)';
        line.style.oTransform      = 'rotate('+degrees+'deg)';
        line.style.transform       = 'rotate('+degrees+'deg)';
        
        return line;
    }

    build () {
        let temp = this.createDot();
        temp.style.marginLeft = '10%';
        this.container.appendChild(temp);

        for (var i=0; i<this.amount-1; i++) {
            this.container.appendChild(this.createLine());
            this.container.appendChild(this.createDot(i));
        }

        this.container.appendChild(this.createLine());
        this.container.appendChild(this.createPlusDot());
    }

    getContainer () {return document.getElementById('timelineContainer')}
}



function generateTimeline(amount_of_products) {
    const timeline = new Timeline(amount_of_products);
    timeline.build();
}