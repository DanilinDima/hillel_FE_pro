let jsonData = [];

fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
        jsonData = data;

        let dataVar = jsonData.data;

        console.log(dataVar); // теперь всё работает
        let dataArr = [];
        dataVar.forEach((item) => {
            let i = item.columns;
            let columsDataArr = [];
            i.forEach((item) => {
                columsDataArr.push(item.columnDataValue);
            });

            dataArr.push(columsDataArr);
        });
        console.log(dataArr);
        let column1 = dataArr.map((item) => item[0]);
        let column2 = dataArr.map((item) => item[1]);
        let column3 = dataArr.map((item) => item[2]);
        let column4 = dataArr.map((item) => item[3]);

        let colOneRes = column1.some((item) => item > 0);
        let colTwoRes = column2.some((item) => item > 0);
        let colThreeRes = column3.some((item) => item > 0);
        let colFourRes = column4.some((item) => item > 0);


        console.log(colOneRes);
        console.log(colTwoRes);
        console.log(colThreeRes);
        console.log(colFourRes);

     
    })
    .catch((err) => console.error("Ошибка загрузки JSON:", err));
