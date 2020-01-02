//각 속성의 색깔 표시
var series = ['자전거', '보행노인', '무단횡단', '보행어린이', '스쿨존어린이'];

var color = ["#f9ed69", "#f08a5d", "#b83b5e", "#6a2c70", "#08d9d6"];

var svg = d3.select(".main")
            .append("svg")
            .attr("width", 1500)
            .attr("height", 50)

            for(var i = 0; i < 5; i++) {
                svg.append("rect")
                .attr("x", 80 + (i+1)*200) 
                .attr("y", 15)
                .attr("width", 23) 
                .attr("height", 23) 
                .attr("fill", color[i])

                svg.append("text")
                .attr("x", 105 + (i+1)*200) 
                .attr("y", 33)
                .text(series[i])
                .style("font-size", "18px")
                .attr("font-family", "맑은고딕")
                .attr("fill", "black")
            }