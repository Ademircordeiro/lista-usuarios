import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IfilterOptions } from "../interfaces/filter/filter-options.interface";


const filterUsersByDate = (startDate: Date | undefined, endDate: Date | undefined, filteredUsersList: IUser[]): IUser[] => {
    const START_DATE_NOT_TYPED = startDate === undefined || endDate === undefined;

    if (START_DATE_NOT_TYPED) {
        return filteredUsersList;
    }
    filteredUsersList = filteredUsersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: endDate
    }));

    return filteredUsersList;
}
const filterUsersByStatus = (status: boolean | undefined, filteredUsersList: IUser[]): IUser[] => {
    const STATUS_NOT_TYPED = status === undefined;

    if (STATUS_NOT_TYPED) {
        return filteredUsersList;
    }
    const filteredList = filteredUsersList.filter((user) => {
        return user.ativo === status;
    });

    return filteredList;
}
const filterUsersByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPED = name === undefined;

    if (NAME_NOT_TYPED) {
        return usersList;
    }
    const filteredList = usersList.filter((user) => {
        return user.nome.toLowerCase().includes(name.toLowerCase());
    });


    return filteredList;
}

const filterUsersList = (filterOptions: IfilterOptions, usersList: IUser[]): IUser[] => {
    let filteredUsersList: IUser[] = [];
    filteredUsersList = filterUsersByName(filterOptions.name, usersList);
    filteredUsersList = filterUsersByStatus(filterOptions.status, filteredUsersList);
    filteredUsersList = filterUsersByDate(filterOptions.startDate, filterOptions.endDate, filteredUsersList);

    return filteredUsersList;
}

export { filterUsersList };