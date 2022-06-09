import { IEmployee } from "./Interfaces";
export const moduledEmployees: IEmployee[] = [
    {
        fullName: "Иван Иванович Иванов",
        position: "Инженер",
        isManager: false,
        id: 1
    },
    {
        fullName: "Егор Егорович Егоров",
        position: "Директор",
        isManager: true,
        id: 2
    },
    {
        fullName: "Петр Петрович Петров",
        position: "Стажер",
        isManager: false,
        id: 3
    }
];
