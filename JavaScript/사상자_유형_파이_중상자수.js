//중상자수 구성률
var series = ["사상자수", "부상자수", "경상자수", "중상자수", "사망자수"];
var data_set = ['자전거', '보행노인', '무단횡단', '보행어린이', '스쿨존어린이'];
//24764
var data_중상자수 = [6418/24764, 10044/24764, 7047/24764, 1036/24764, 219/24764];

var color = ["#f9ed69", "#f08a5d", "#b83b5e", "#6a2c70", "#08d9d6"];

var svg4 = d3.select(".eighth")
            .append("svg")
            .attr("width", 300)
            .attr("height", 300)

var arc = d3.arc()
            .innerRadius(0)
            .outerRadius(100);

var p4 =  svg4.selectAll("path")
        .data(d3.pie()(data_중상자수))
        .enter()
        .append("path")
        .attr("class", "pie")
        .attr("transform", "translate(150, 150)")
        .style("fill",function(d, i) {
            return color[i];
        })
        .attr('d', arc)
    
        svg4.append("text")
        .attr("x", 80)
        .attr("y", 280)
        .text("<중상자수 구성률>")
        .style("font-size", "16px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")

        svg4.append("text")
        .attr("x", 180)
        .attr("y", 150)
        .text((data_중상자수[1] * 100).toFixed(1)+ "%")
        .style("font-size", "16px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")

        svg4.append("text")
        .attr("x", 120)
        .attr("y", 210)
        .text((data_중상자수[2] * 100).toFixed(1)+ "%")
        .style("font-size", "16px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")

        svg4.append("text")
        .attr("x", 80)
        .attr("y", 130)
        .text((data_중상자수[0] * 100).toFixed(1)+ "%")
        .style("font-size", "16px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")

        svg4.append("text")
        .attr("x", 90)
        .attr("y", 40)
        .text((data_중상자수[3] * 100).toFixed(1)+ "%")
        .style("font-size", "16px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")
    
        svg4.append("text")
        .attr("x", 150)
        .attr("y", 40)
        .text((data_중상자수[4] * 100).toFixed(1)+ "%")
        .style("font-size", "16px")
        .attr("font-family", "맑은고딕")
        .attr("fill", "black")

        function pie_interaction4() {
            var cb1 = document.getElementById('c1');
            var cb2 = document.getElementById('c2');
            var cb3 = document.getElementById('c3');
            var cb4 = document.getElementById('c4');
            var cb5 = document.getElementById('c5');
            
            var color_tmp = ["#f9ed69", "#f08a5d", "#b83b5e", "#6a2c70", "#08d9d6"];

            if(cb1.checked == false && cb2.checked == false && cb3.checked == false && cb4.checked == false && cb5.checked == false)
            {
                p4.style("fill",function(d, i) {
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
            p4.style("fill",function(d, i) {
                return color_tmp[i];
            })
        }