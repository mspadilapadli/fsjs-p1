class View {
    static showCompanies(data) {
        console.log(data);
    }

    static showEmployees(data) {
        //   console.log(data);
        let { name, since, address, employees } = data;
        console.log(`====================
== List Employee ===
====================
Company Name: ${name}
Since: ${since}
Address: ${address}`);

        employees = employees.map((employee) => {
            let { name, ktp, joined_year, position, salary } = employee;
            return {
                name: name,
                ktp: ktp,
                joined_year: joined_year,
                position: position,
                lengthOfWork: employee.lengthOfWork(),
                salary: employee.applySalary(),
            };
        });
        console.table(employees);
    }

    static showAdd(data) {
        console.log(`=============
== SUCCESS ==
=============
Success add ${data.name} as employee`);
    }

    static showError(error) {
        //         console.log(`===========
        // == Error ==
        // ===========
        // ${error}`);
        console.log(error);
    }
}

module.exports = View;
