import { IEmployeeDTO } from "./api/dto";
import { IEmployeeService } from "./api/IEmployeeService";
import { moduledEmployees } from "./MockData";

export class EmployeeServiceTest implements IEmployeeService {
    private isError: boolean = false;

    private get getIsError(): boolean {
        this.isError = !this.isError;
        return this.isError;
    }

    public getEmployees(): Promise<IEmployeeDTO[]> {
        return new Promise(resolve => setTimeout(() => resolve(moduledEmployees), 2000));
    }

    public removeEmployee(code: string): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.getIsError) {
                    reject("removeError");
                }
                resolve();
            }, 2000);
        });
    }

    public addEmployee(employee: IEmployeeDTO): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.getIsError) {
                    reject("addError");
                }
                resolve();
            }, 2000);
        });
    }

    public updateEmployee(employee: IEmployeeDTO): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.getIsError) {
                    reject("updateError");
                }
                resolve();
            }, 2000);
        });
    }
}
