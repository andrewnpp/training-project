import { IEmployeeDTO } from "./api/dto";

export const moduledEmployees: IEmployeeDTO[] = [
    {
        name: "Иван Иванович Иванов",
        position: "Инженер",
        isManager: false,
        code: "1"
    },
    {
        name: "Егор Егорович Егоров",
        position: "Директор",
        isManager: true,
        code: "2"
    },
    {
        name: "Петр Петрович Петров",
        position: "Стажер",
        isManager: false,
        code: "3"
    }
];
