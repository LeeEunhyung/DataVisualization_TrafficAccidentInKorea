//년도별 교통사고 사상자수 세부 구성
var series = ["부상자수", "경상자수", "중상자수", "사망자수"];
var data_set = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];

var data_사상자 = [8909, 8298, 8522, 8394, 6806, 6013, 5071];
var data_부상자 = [383, 474, 654, 701, 588, 434, 376];
var data_경상자 = [3408, 3172, 3483, 3478, 2950, 2601, 2123];
var data_중상자 = [4612, 4267, 4049, 3855, 2982, 2678, 2321];
var data_사망자 = [510, 385, 336, 360, 286, 300, 251];

var color = ["#d0efff", "#2a9df4", "#1167b1", "#03254c"];

var svg = d3.select(".second")
            .append("svg")
            .attr('width', 900)
            .attr('height', 300);

            svg.append('line') //x축
            .attr('x1', 60)
            .attr('y1', 270)
            .attr('x2', 880)
            .attr('y2', 270)
            .style("stroke", 'black')
            .style("stroke-width",0.5);
            svg.append('line') //x축
            .attr('x1', 60)
            .attr('y1', 36)
            .attr('x2', 880)
            .attr('y2', 36)
            .style("stroke", 'black')
            .style("stroke-width",0.5);

            svg.append('line') //y축
            .attr('x1', 60)
            .attr('y1', 36)
            .attr('x2', 60)
            .attr('y2', 270)
            .style("stroke", 'black')
            .style("stroke-width",0.5);
            svg.append('line') //y축
            .attr('x1', 880)
            .attr('y1', 36)
            .attr('x2', 880)
            .attr('y2', 270)
            .style("stroke", 'black')
            .style("stroke-width",0.5);

            for(var i = 0; i<10; i++) {
                svg.append('line')
                    .attr('x1', 60)
                    .attr('y1', 270 - 26 * i)
                    .attr('x2', 880)
                    .attr('y2', 270 - 26 * i)
                    .style("stroke", 'black')
                    .style("stroke-width",0.2);
    
                svg.append('line')
                    .attr('x1', 60)
                    .attr('y1', 270 - 26 * i)
                    .attr('x2', 70)
                    .attr('y2', 270 - 26 * i)
                    .style("stroke", 'black')
                    .style("stroke-width",0.5);

                svg.append('text')
                    .attr('x', 25)
                    .attr('y', 275 - 26 * i)
                    .text(i*1000)
                    .style("font-size", "13px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
            }    
            for(var i = 1; i<8; i++) {
                svg.append('line')
                    .attr('x1', 117 * i)
                    .attr('y1', 36)
                    .attr('x2', 117 * i)
                    .attr('y2', 270)
                    .style("stroke", 'black')
                    .style("stroke-width",0.2);
            }  
            for(var i = 0; i<7; i++) {
                svg.append('text')
                    .attr('x', 117 * (i+1) - 13)
                    .attr('y', 290)
                    .text(data_set[i])
                    .style("font-size", "13px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
                    .attr("font-weight", "bold")
            }  
            
            for(var i = 0; i < 8; i++) {
                if(i < 6) {
                    svg.append("line")
                    .attr('x1', 117 * (i+1) + 20)
                    .attr('y1', 270 - ((26 * data_부상자[i] / 1000)+(26 * data_경상자[i] / 1000)+(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)))
                    .attr('x2', 117 * (i+2) - 20)
                    .attr('y2', 270 - ((26 * data_부상자[i+1] / 1000)+(26 * data_경상자[i+1] / 1000)+(26 * data_중상자[i+1] / 1000)+(26 * data_사망자[i+1] / 1000)))
                    .style("stroke", 'darkblue')
                    .style("stroke-width",0.5)
                    .style("stroke-dasharray", 3)

                    svg.append("line")
                    .attr('x1', 117 * (i+1) + 20)
                    .attr('y1', 270 - ((26 * data_경상자[i] / 1000)+(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)))
                    .attr('x2', 117 * (i+2) - 20)
                    .attr('y2', 270 - ((26 * data_경상자[i+1] / 1000)+(26 * data_중상자[i+1] / 1000)+(26 * data_사망자[i+1] / 1000)))
                    .style("stroke", 'darkblue')
                    .style("stroke-width",0.5)
                    .style("stroke-dasharray", 3)

                    svg.append("line")
                    .attr('x1', 117 * (i+1) + 20)
                    .attr('y1', 270 - ((26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)))
                    .attr('x2', 117 * (i+2) - 20)
                    .attr('y2', 270 - ((26 * data_중상자[i+1] / 1000)+(26 * data_사망자[i+1] / 1000)))
                    .style("stroke", 'darkblue')
                    .style("stroke-width",0.5)
                    .style("stroke-dasharray", 3)

                    svg.append("line")
                    .attr('x1', 117 * (i+1) + 20)
                    .attr('y1', 270 - ((26 * data_사망자[i] / 1000)))
                    .attr('x2', 117 * (i+2) - 20)
                    .attr('y2', 270 - ((26 * data_사망자[i+1] / 1000)))
                    .style("stroke", 'darkblue')
                    .style("stroke-width",0.5)
                    .style("stroke-dasharray", 3)
                }

                svg.append("rect")
                    .attr('x', 117 * (1+i) - 20)
                    .attr('y', 270 - ((26 * data_부상자[i] / 1000)+(26 * data_경상자[i] / 1000)+(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)))
                    .attr('width',40)
                    .attr('height',(26 * data_부상자[i] / 1000)+(26 * data_경상자[i] / 1000)+(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000))
                    .attr('fill',color[0])

                svg.append("text")
                    .attr('x', 117 * (1+i) - 20 + 3)
                    .attr('y', 270 - ((26 * data_부상자[i] / 1000)+(26 * data_경상자[i] / 1000)+(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)) + 7)
                    .text(data_부상자[i])
                    .style("font-size", "10px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")

                svg.append("rect")
                    .attr('x', 117 * (1+i) - 20)
                    .attr('y', 270 - ((26 * data_경상자[i] / 1000)+(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)))
                    .attr('width',40)
                    .attr('height',(26 * data_경상자[i] / 1000)+(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000))
                    .attr('fill',color[1])

                svg.append("text")
                    .attr('x', 117 * (1+i) - 20 + 3)
                    .attr('y', 270 - ((26 * data_경상자[i] / 1000)+(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)) + 10)
                    .text(data_경상자[i])
                    .style("font-size", "10px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")

                svg.append("rect")
                    .attr('x', 117 * (1+i) - 20)
                    .attr('y', 270 - ((26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)))
                    .attr('width',40)
                    .attr('height',(26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000))
                    .attr('fill',color[2])

                svg.append("text")
                    .attr('x', 117 * (1+i) - 20 + 3)
                    .attr('y', 270 - ((26 * data_중상자[i] / 1000)+(26 * data_사망자[i] / 1000)) + 10)
                    .text(data_중상자[i])
                    .style("font-size", "10px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "white")

                svg.append("rect")
                    .attr('x', 117 * (1+i) - 20)
                    .attr('y', 270 - 26 * data_사망자[i] / 1000)
                    .attr('width',40)
                    .attr('height',26 * data_사망자[i] / 1000)
                    .attr('fill',color[3])
           
                svg.append("text")
                    .attr('x', 117 * (1+i) - 20 + 3)
                    .attr('y', 270 - ((26 * data_사망자[i] / 1000)) + 7)
                    .text(data_사망자[i])
                    .style("font-size", "10px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "white")
                }
           
                for(var i = 0; i < 4; i++) {
                    svg.append("rect")
                    .attr("x", 857) 
                    .attr("y", 40 + i*21)
                    .attr("width", 19) 
                    .attr("height", 19) 
                    .attr("fill", color[i])

                    svg.append("text")
                    .attr("x", 800) 
                    .attr("y", 55 + i*21)
                    .text(series[i])
                    .style("font-size", "13px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
                }
