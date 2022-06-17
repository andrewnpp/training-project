import { IEmployeeDTO } from "./api/dto";
import { IEmployeeService } from "./api/IEmployeeService";
import { moduledEmployees } from "./MockData";

export class EmployeeServiceTest implements IEmployeeService {
    public getEmployees(): Promise<IEmployeeDTO[]> {
        return new Promise(resolve => setTimeout(() => resolve(moduledEmployees), 2000));
    }

    public removeEmployee(code: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if (Math.floor(Math.random() * 10) <= 4) {
                setTimeout(() => resolve(), 2000);
            } else {
                setTimeout(() => reject("removeError"), 2000);
            }
        });
    }

    public addEmployee(employee: IEmployeeDTO): Promise<void> {
        return new Promise((resolve, reject) => {
            if (Math.floor(Math.random() * 10) <= 4) {
                setTimeout(() => resolve(), 2000);
            } else {
                setTimeout(() => reject("addError"), 2000);
            }
        });
    }

    public updateEmployee(employee: IEmployeeDTO): Promise<void> {
        return new Promise((resolve, reject) => {
            if (Math.floor(Math.random() * 10) <= 4) {
                setTimeout(() => resolve(), 2000);
            } else {
                setTimeout(() => reject("updateError"), 2000);
            }
        });
    }
}
