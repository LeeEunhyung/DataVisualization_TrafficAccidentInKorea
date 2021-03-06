//부상자수 구성률
var series = ["사상자수", "부상자수", "경상자수", "중상자수", "사망자수"];
var data_set = ['자전거', '보행노인', '무단횡단', '보행어린이', '스쿨존어린이'];
//3610
var data_부상자수 = [2396/3610, 551/3610, 440/3610, 201/3610, 22/3610];

var color = ["#f9ed69", "#f08a5d", "#b83b5e", "#6a2c70", "#08d9d6"];

var svg2 = d3.select(".sixth")
            .append("svg")
            .attr("width", 300)
            .attr("height", 300)

var arc = d3.arc()
            .innerRadius(0)
            .outerRadius(100);

var p2 = svg2.selectAll("path")
        .data(d3.pie()(data_부상자수))
        .enter()
        .append("path")
        .attr("class", "pie")
        .attr("transform", "translate(150, 150)")
        .style("fill",function(d, i) {
            return color[i];
        })
        .attr('d', arc)

        svg2.append("text")
        .attr("x", 80)
        .attr("y", 280)
        .text("<부상자수 구성률>")
        .style("font-size", "16px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")

        svg2.append("text")
        .attr("x", 180)
        .attr("y", 180)
        .text((data_부상자수[0] * 100).toFixed(1)+ "%")
        .style("font-size", "16px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")

        svg2.append("text")
        .attr("x", 70)
        .attr("y", 160)
        .text((data_부상자수[1] * 100).toFixed(1)+ "%")
        .style("font-size", "16px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")

        svg2.append("text")
        .attr("x", 80)
        .attr("y", 110)
        .text((data_부상자수[2] * 100).toFixed(1)+ "%")
        .style("font-size", "16px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")

        svg2.append("text")
        .attr("x", 100)
        .attr("y", 40)
        .text((data_부상자수[3] * 100).toFixed(1)+ "%")
        .style("font-size", "16px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")

        svg2.append("text")
        .attr("x", 150)
        .attr("y", 40)
        .text((data_부상자수[4] * 100).toFixed(1)+ "%")
        .style("font-size", "16px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")


        function pie_interaction2() {
            var cb1 = document.getElementById('c1');
            var cb2 = document.getElementById('c2');
            var cb3 = document.getElementById('c3');
            var cb4 = document.getElementById('c4');
            var cb5 = document.getElementById('c5');
            
            var color_tmp = ["#f9ed69", "#f08a5d", "#b83b5e", "#6a2c70", "#08d9d6"];

            if(cb1.checked == false && cb2.checked == false && cb3.checked == false && cb4.checked == false && cb5.checked == false)
            {
                p2.style("fill",function(d, i) {
                    return color_tmp[i];
                })
            }
            else {
                if (cb1.checked == false) {
                    color_tmp[0] = "gray";

                }
                if (cb2.checked == false) {
                    color_tmp[1] = "gray";

                }
                if (cb3.checked == false) {
                    color_tmp[2] = "gray";

                }
                if (cb4.checked == false) {
                    color_tmp[3] = "gray";

                }
                if (cb5.checked == false) {
                    color_tmp[4] = "gray";

                }
            }
            p2.style("fill",function(d, i) {
                return color_tmp[i];
            })
        }