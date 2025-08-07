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
            return {
                name: employee.name,
                ktp: employee.ktp,
                joined_year: employee.joined_year,
                position: employee.position,
                lengthOfWork: employee.lengthOfWork(),
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
        console.log(`===========
== Error ==
===========
${error.message}`);
    }
}

module.exports = View;
