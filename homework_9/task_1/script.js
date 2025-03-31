let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
}

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((acc, item) => {
            if (Array.isArray(item)) {
                return acc + sumSalaries(item); 
            }
            return acc + item.salary;
        }, 0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep);
        }
        return sum;
    }
}


console.log(sumSalaries(company)); // 6700