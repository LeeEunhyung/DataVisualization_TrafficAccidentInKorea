# TrafficAccidentInKorea_DataVisualization
- 데이터시각화 HW2 - d3.js를 활용한 한국 교통사고 데이터 시각화
  https://leeeunhyung.github.io/TrafficAccidentInKorea_DataVisualization/

### Environment
- OS : Windows 10 Pro
- Tool : Visual Studio Code
- Language : html, JavaScript(with d3.js), css

### Data Source 정보
- __도로교통공단_교통사고다발지역.csv__ : 2012년부터 2018년까지의 교통사고 발생 정보 (database : accident)
  https://www.data.go.kr/dataset/15003493/fileData.do
- __지역별인구_및_인구밀도.csv__ : 2014년부터 2018년까지의 지역별인구 및 인구밀도 정보 (database : population)
  http://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1007

### 시각화 대상 및 데이터 전처리(mySQL) 정보
- 년도별 교통사고 발생건수와 사상자수
  ```
  SELECT 사고년도, SUM(발생건수), SUM(사상자수) FROM accident GROUP BY 사고년도;
  ```
  
- 년도별 교통사고 사상자수 세부 구성
  ```
  SELECT 사고년도, SUM(부상자수) FROM accident GROUP BY 사고년도;
  SELECT 사고년도, SUM(경상자수) FROM accident GROUP BY 사고년도;
  SELECT 사고년도, SUM(중상자수) FROM accident GROUP BY 사고년도;
  SELECT 사고년도, SUM(사망자수) FROM accident GROUP BY 사고년도;
  ```
  
- 사고유형별 발생건수 (2012년도 ~ 2018년도)
  ```
  SELECT 사고유형구분, SUM(발생건수) FROM accident GROUP BY 사고유형구분;
  ```
  
- 년도별 교통사고 발생건수와 사상자수
  ```
  SELECT 사고년도, 사고유형구분, 사고유형, SUM(발생건수) FROM accident GROUP BY 사고년도, 사고유형구분;
  ```
  
- 사고유형별 교통사고 세부 구성 (2012년도 ~ 2018년도)
  ```
  SELECT 사고유형구분, SUM(사상자수), SUM(부상자수), SUM(경상자수), SUM(중상자수), SUM(사망자수) FROM accident GROUP BY 사고유형구분;
  ```
  
- 년도별 지역의 사상자 발생률 (2014년도 ~ 2018년도)
  ```
  SELECT SUM(a.사상자수)/b.2014년도 FROM accident a INNER JOIN population b ON a.도시명 = 지역 WHERE 사고년도 = 2014;
  SELECT SUM(a.사상자수)/b.2015년도 FROM accident a INNER JOIN population b ON a.도시명 = 지역 WHERE 사고년도 = 2015;
  SELECT SUM(a.사상자수)/b.2016년도 FROM accident a INNER JOIN population b ON a.도시명 = 지역 WHERE 사고년도 = 2016;
  SELECT SUM(a.사상자수)/b.2017년도 FROM accident a INNER JOIN population b ON a.도시명 = 지역 WHERE 사고년도 = 2017;
  SELECT SUM(a.사상자수)/b.2018년도 FROM accident a INNER JOIN population b ON a.도시명 = 지역 WHERE 사고년도 = 2018;
  ```
  
### Interaction 정보
- __사고유형별 교통사고 세부 구성__ 과 __년도별 지역의 사상자 발생률__ 그래프에서 체크박스를 통해 데이터를 항목에 맞게 필터링할 수 있습니다.

# Installation
- 이 프로젝트는 웹 기반의 d3.js를 활용하고 있기 때문에 별도의 설치는 필요하지 않습니다.

# Screenshot
### 1. Google Chrome 실행 화면

![크롬](https://user-images.githubusercontent.com/48666975/71653364-3f9b8d00-2d6f-11ea-82b2-a2dbd516e156.PNG)

### 2. Microsoft Edge 실행 화면

![엣지](https://user-images.githubusercontent.com/48666975/71653381-58a43e00-2d6f-11ea-8451-15ef48eb31d6.PNG)

### 3. Internet Explorer 실행 화면

※ __차단된 콘텐츠 허용(A)__ 클릭 ※

![익스_12](https://user-images.githubusercontent.com/48666975/71653552-5a223600-2d70-11ea-8fbe-a70a9f22f3dc.PNG)
