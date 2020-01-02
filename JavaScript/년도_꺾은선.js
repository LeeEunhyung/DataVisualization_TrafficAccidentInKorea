//년도별 교통사고 발생건수와 사상자수
var series = ["교통사고 발생건수", "교통사고 사상자수"];
var data_set = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
var data_발생건수 = [8494, 7856, 8047, 7932, 6423, 5666, 4824];
var data_사상자수 = [8909, 8298, 8522, 8394, 6806, 6013, 5071];

var color = ["#fa4659", "#11cbd7"];

var svg = d3.select(".first")
            .append("svg")
            .attr('width', 500)
            .attr('height', 300);

            svg.append('line') //x축
            .attr('x1', 30)
            .attr('y1', 270)
            .attr('x2', 480)
            .attr('y2', 270)
            .style("stroke", 'black')
            .style("stroke-width",0.5);
            svg.append('line') //x축
            .attr('x1', 30)
            .attr('y1', 36)
            .attr('x2', 480)
            .attr('y2', 36)
            .style("stroke", 'black')
            .style("stroke-width",0.5);

            svg.append('line') //y축
            .attr('x1', 30)
            .attr('y1', 36)
            .attr('x2', 30)
            .attr('y2', 270)
            .style("stroke", 'black')
            .style("stroke-width",0.5);
            svg.append('line') //y축
            .attr('x1', 480)
            .attr('y1', 36)
            .attr('x2', 480)
            .attr('y2', 270)
            .style("stroke", 'black')
            .style("stroke-width",0.5);

            svg.append('text')
            .attr('x', 15)
            .attr('y', 270 - 46 * 0.5)
            .text("...")
            .style("font-size", "15px")
            .attr("font-family", "맑은고딕")
            .attr("fill", "black")

            for(var i = 0; i<6; i++) {
                svg.append('line')
                    .attr('x1', 30)
                    .attr('y1', 270 - 46 * i)
                    .attr('x2', 480)
                    .attr('y2', 270 - 46 * i)
                    .style("stroke", 'black')
                    .style("stroke-width",0.2);
    
                svg.append('line')
                    .attr('x1', 30)
                    .attr('y1', 270 - 46 * i)
                    .attr('x2', 40)
                    .attr('y2', 270 - 46 * i)
                    .style("stroke", 'black')
                    .style("stroke-width",0.5);
                if(i == 0) {
                svg.append('text')
                    .attr('x', 0)
                    .attr('y', 270 - 46 * i)
                    .text(i*1000)
                    .style("font-size", "13px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
                } else {
                    svg.append('text')
                    .attr('x', 0)
                    .attr('y', 270 - 46 * i)
                    .text(i*1000 + 4000)
                    .style("font-size", "13px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
                }
            }    

            for(var i = 1; i<8; i++) {
                svg.append('line')
                    .attr('x1', 63 * i)
                    .attr('y1', 36)
                    .attr('x2', 63 * i)
                    .attr('y2', 270)
                    .style("stroke", 'black')
                    .style("stroke-width",0.2)
            }  
            for(var i = 0; i<7; i++) {
                svg.append('text')
                    .attr('x', 63 * (i+1) - 13)
                    .attr('y', 290)
                    .text(data_set[i])
                    .style("font-size", "13px")
                    .attr("font-family", "맑은고딕")
                    .attr("fill", "black")
                    .attr("font-weight", "bold")
            }

            for (var i = 0; i < 6; i++) {
                svg.append('line')
                .attr('x1', 63 * (i+1))
                .attr('y1', 224 - (46 * data_발생건수[i] / 1000) + 230)
                .attr('x2', 63 * (i+2))
                .attr('y2', 224 - (46 * data_발생건수[i+1] / 1000) + 230)
                .style("stroke", color[0])
                .style("stroke-width", 1.5)
                

                svg.append('line')
                .attr('x1', 63 * (i+1))
                .attr('y1', 224 - (46 * data_사상자수[i] / 1000) + 230)
                .attr('x2', 63 * (i+2))
                .attr('y2', 224 - (46 * data_사상자수[i+1] / 1000) + 230)
                .style("stroke", color[1])
                .style("stroke-width", 1.5)
            }

            for (var i = 0; i < 7; i++) {
                svg.append('circle')
                .attr('cx', 63 * (i+1))
                .attr('cy', 224 - (46 * data_발생건수[i] / 1000) + 230)
                .attr('r', 2)
                .style("fill", color[0])

                svg.append('text')
                .attr("x", 63 * (i+1) + 10) 
                .attr("y", 224 - (46 * data_발생건수[i] / 1000) + 230 + 5)
                .text(data_발생건수[i])
                .style("font-size", "10px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")

                svg.append('circle')
                .attr('cx', 63 * (i+1))
                .attr('cy', 224 - (46 * data_사상자수[i] / 1000) + 230)
                .attr('r', 2)
                .style("fill", color[1])

                svg.append('text')
                .attr("x", 63 * (i+1) + 10) 
                .attr("y", 224 - (46 * data_사상자수[i] / 1000) + 230 + 5)
                .text(data_사상자수[i])
                .style("font-size", "10px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
            }
            
            for(var i = 0; i < 2; i++) {
                svg.append("rect")
                .attr("x", 457) 
                .attr("y", 40 + i*21)
                .attr("width", 19) 
                .attr("height", 19) 
                .attr("fill", color[i])

                svg.append("text")
                .attr("x", 345) 
                .attr("y", 55 + i*21)
                .text(series[i])
                .style("font-size", "13px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
            }
