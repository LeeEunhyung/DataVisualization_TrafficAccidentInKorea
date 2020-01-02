//사고유형별 발생건수
var series = ["자전거", "보행노인", "무단횡단", "보행어린이", "스쿨존어린이"];
var data_set = [17769, 16201, 11772, 2942, 558];

var color = ["#f9ed69", "#f08a5d", "#b83b5e", "#6a2c70", "#08d9d6"];

var svg = d3.select(".third")
            .append("svg")
            .attr('width', 600)
            .attr('height', 500);

    svg.append('line') //x축
        .attr('x1', 60)
        .attr('y1', 470)
        .attr('x2', 580)
        .attr('y2', 470)
        .style("stroke", 'black')
        .style("stroke-width",0.5);
        svg.append('line') //x축
        .attr('x1', 60)
        .attr('y1', 110)
        .attr('x2', 580)
        .attr('y2', 110)
        .style("stroke", 'black')
        .style("stroke-width",0.5);

    svg.append('line') //y축
        .attr('x1', 60)
        .attr('y1', 110)
        .attr('x2', 60)
        .attr('y2', 470)
        .style("stroke", 'black')
        .style("stroke-width",0.5);
        svg.append('line') //y축
        .attr('x1', 580)
        .attr('y1', 110)
        .attr('x2', 580)
        .attr('y2', 470)
        .style("stroke", 'black')
        .style("stroke-width",0.5);

        for(var i = 1; i<5; i++) {
            svg.append('line')
                .attr('x1', 60)
                .attr('y1', 470 - 90 * i)
                .attr('x2', 580)
                .attr('y2', 470 - 90 * i)
                .style("stroke", 'black')
                .style("stroke-width",0.2);

                svg.append('line')
                .attr('x1', 60)
                .attr('y1', 470 - 90 * i)
                .attr('x2', 70)
                .attr('y2', 470 - 90 * i)
                .style("stroke", 'black')
                .style("stroke-width",0.5);
        }    
        for(var i = 1; i<6; i++) {
            svg.append('line')
                .attr('x1', 105 * i)
                .attr('y1', 110)
                .attr('x2', 105 * i)
                .attr('y2', 470)
                .style("stroke", 'black')
                .style("stroke-width",0.2);
        }    

        svg.append("text")
        .attr('x', 85)
        .attr('y', 490)
        .text("자전거")
        .style("font-size", "13px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")
        .attr("font-weight", "bold")

        svg.append("text")
        .attr('x', 185)
        .attr('y', 490)
        .text("보행노인")
        .style("font-size", "13px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")
        .attr("font-weight", "bold")

        svg.append("text")
        .attr('x', 290)
        .attr('y', 490)
        .text("무단횡단")
        .style("font-size", "13px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")
        .attr("font-weight", "bold")

        svg.append("text")
        .attr('x', 387)
        .attr('y', 490)
        .text("보행어린이")
        .style("font-size", "13px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")
        .attr("font-weight", "bold")

        svg.append("text")
        .attr('x', 485)
        .attr('y', 490)
        .text("스쿨존어린이")
        .style("font-size", "13px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")
        .attr("font-weight", "bold")

        for(var i = 0; i< 5; i++) { //t축 값
            svg.append("text")
            .attr('x', 15)
            .attr('y', 470 - (i*90))
            .text(i*5000)
            .style("font-size", "13px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")
        }
        for(var i = 0; i < 5; i++) {
        svg.append("rect")
            .attr('x', 105 * (i+1) - 25)
            .attr('y', 470 - 90 * data_set[i] / 5000)
            .attr('width',50)
            .attr('height',90 * data_set[i] / 5000)
            .attr('fill',color[i])

            svg.append("text")
            .attr('x', 105 * (i+1)-20)
            .attr('y', 470 - 90 * data_set[i] / 5000 - 10)
            .text(data_set[i])
            .style("font-size", "13px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")
        }