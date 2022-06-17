import { IEmployeeDTO } from "./dto";

export interface IEmployeeService {
    getEmployees(): Promise<IEmployeeDTO[]>;
    removeEmployee(code: string): Promise<void>;
    addEmployee(employee: IEmployeeDTO): Promise<void>;
    updateEmployee(employee: IEmployeeDTO): Promise<void>;
}
