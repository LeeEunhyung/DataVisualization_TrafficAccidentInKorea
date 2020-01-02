//사고유형별 년도에 따른 발생건수 추이
var series = ["자전거", "보행노인", "무단횡단", "보행어린이", "스쿨존어린이"];
var data_set = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];

var data_자전거 = [2432, 2505, 3329, 3384, 2558, 1967, 1594];
var data_보행노인 = [2049, 2220, 2549, 2582, 2393, 2252, 2156];
var data_무단횡단 = [3231, 2531, 1607, 1493, 1056, 1122, 732];
var data_보행어린이 = [708, 544, 472, 385, 321, 257, 255];
var data_스쿨존어린이 = [74,  56, 90, 88, 95, 68, 87];

var color = ["#f9ed69", "#f08a5d", "#b83b5e", "#6a2c70", "#08d9d6"];

var svg = d3.select(".fourth")
            .append("svg")
            .attr('width', 500)
            .attr('height', 500);

            svg.append('line') //x축
            .attr('x1', 40)
            .attr('y1', 470)
            .attr('x2', 480)
            .attr('y2', 470)
            .style("stroke", 'black')
            .style("stroke-width",0.5);
            svg.append('line') //x축
            .attr('x1', 40)
            .attr('y1', 30)
            .attr('x2', 480)
            .attr('y2', 30)
            .style("stroke", 'black')
            .style("stroke-width",0.5);
    
        svg.append('line') //y축
            .attr('x1', 40)
            .attr('y1', 30)
            .attr('x2', 40)
            .attr('y2', 470)
            .style("stroke", 'black')
            .style("stroke-width",0.5);
            svg.append('line') //y축
            .attr('x1', 480)
            .attr('y1', 30)
            .attr('x2', 480)
            .attr('y2', 470)
            .style("stroke", 'black')
            .style("stroke-width",0.5);
    
            for(var i = 0; i<8; i++) {
                svg.append('line')
                    .attr('x1', 40)
                    .attr('y1', 470 - 63 * i)
                    .attr('x2', 480)
                    .attr('y2', 470 - 63 * i)
                    .style("stroke", 'black')
                    .style("stroke-width",0.2);
    
                    svg.append('line')
                    .attr('x1', 40)
                    .attr('y1', 470 - 63 * i)
                    .attr('x2', 50)
                    .attr('y2', 470 - 63 * i)
                    .style("stroke", 'black')
                    .style("stroke-width",0.5);

                    svg.append('text')
                    .attr('x', 5)
                    .attr('y', 470 - 63 * i + 7)
                    .text(i * 500)
                    .style("font-size", "13px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
            }    
            for(var i = 0; i<7; i++) {
                svg.append('line')
                    .attr('x1', 64 * (i+1))
                    .attr('y1', 30)
                    .attr('x2', 64 * (i+1))
                    .attr('y2', 470)
                    .style("stroke", 'black')
                    .style("stroke-width",0.2);

                    svg.append('text')
                    .attr('x', 64 * (i+1) - 15)
                    .attr('y', 490)
                    .text(data_set[i])
                    .style("font-size", "13px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
                    .attr("font-weight", "bold")
            }

            //line
            for (var i = 0; i < 6; i++) {
                svg.append('line')
                .attr('x1', 64 * (i+1))
                .attr('y1', 470 - (63 * data_자전거[i] / 500))
                .attr('x2', 64 * (i+2))
                .attr('y2', 470 - (63 * data_자전거[i+1] / 500))
                .style("stroke", color[0])
                .style("stroke-width", 2)
                
                svg.append('line')
                .attr('x1', 64 * (i+1))
                .attr('y1', 470 - (63 * data_보행노인[i] / 500))
                .attr('x2', 64 * (i+2))
                .attr('y2', 470 - (63 * data_보행노인[i+1] / 500))
                .style("stroke", color[1])
                .style("stroke-width", 2)
                
                svg.append('line')
                .attr('x1', 64 * (i+1))
                .attr('y1', 470 - (63 * data_무단횡단[i] / 500))
                .attr('x2', 64 * (i+2))
                .attr('y2', 470 - (63 * data_무단횡단[i+1] / 500))
                .style("stroke", color[2])
                .style("stroke-width", 2)
                
                svg.append('line')
                .attr('x1', 64 * (i+1))
                .attr('y1', 470 - (63 * data_보행어린이[i] / 500))
                .attr('x2', 64 * (i+2))
                .attr('y2', 470 - (63 * data_보행어린이[i+1] / 500))
                .style("stroke", color[3])
                .style("stroke-width", 2)
                
                svg.append('line')
                .attr('x1', 64 * (i+1))
                .attr('y1', 470 - (63 * data_스쿨존어린이[i] / 500))
                .attr('x2', 64 * (i+2))
                .attr('y2', 470 - (63 * data_스쿨존어린이[i+1] / 500))
                .style("stroke", color[4])
                .style("stroke-width", 2)
            }

            //dot
            for (var i = 0; i < 7; i++) {
                svg.append('circle')
                .attr('cx', 64 * (i+1))
                .attr('cy', 470 - (63 * data_자전거[i] / 500))
                .attr('r', 3)
                .style("fill", color[0])
                
                svg.append('text')
                .attr("x", 64 * (i+1) + 10) 
                .attr("y", 470 - (63 * data_자전거[i] / 500) + 5)
                .text(data_자전거[i])
                .style("font-size", "10px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg.append('circle')
                .attr('cx', 64 * (i+1))
                .attr('cy', 470 - (63 * data_보행노인[i] / 500))
                .attr('r', 3)
                .style("fill", color[1])

                svg.append('text')
                .attr("x", 64 * (i+1) + 10) 
                .attr("y", 470 - (63 * data_보행노인[i] / 500) + 5)
                .text(data_보행노인[i])
                .style("font-size", "10px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg.append('circle')
                .attr('cx', 64 * (i+1))
                .attr('cy', 470 - (63 * data_무단횡단[i] / 500))
                .attr('r', 3)
                .style("fill", color[2])

                svg.append('text')
                .attr("x", 64 * (i+1) + 5) 
                .attr("y", 470 - (63 * data_무단횡단[i] / 500) - 5)
                .text(data_무단횡단[i])
                .style("font-size", "10px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg.append('circle')
                .attr('cx', 64 * (i+1))
                .attr('cy', 470 - (63 * data_보행어린이[i] / 500))
                .attr('r', 3)
                .style("fill", color[3])

                svg.append('text')
                .attr("x", 64 * (i+1) + 10) 
                .attr("y", 470 - (63 * data_보행어린이[i] / 500) + 5)
                .text(data_보행어린이[i])
                .style("font-size", "10px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg.append('circle')
                .attr('cx', 64 * (i+1))
                .attr('cy', 470 - (63 * data_스쿨존어린이[i] / 500))
                .attr('r', 3)
                .style("fill", color[4])

                svg.append('text')
                .attr("x", 64 * (i+1) + 10) 
                .attr("y", 470 - (63 * data_스쿨존어린이[i] / 500) + 5)
                .text(data_스쿨존어린이[i])
                .style("font-size", "10px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
            }

            for(var i = 0; i < 5; i++) {
                svg.append("rect")
                .attr("x", 457) 
                .attr("y", 34 + i*21)
                .attr("width", 19) 
                .attr("height", 19) 
                .attr("fill", color[i])

                svg.append("text")
                .attr("x", 376) 
                .attr("y", 48 + i*21)
                .text(series[i])
                .style("font-size", "13px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
            }