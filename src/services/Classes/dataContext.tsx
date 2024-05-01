import { createContext, useContext, useState, } from 'react';
import { Account, Transaction } from './classes';

type TransactionDataContextType = Transaction[] | null;
type UserAccountsDataContextType = Account[] | null;
type UserCategoriesDataContextType = string[] | null;

const TransactionsDataContext = createContext<any>(null);
const SetTransactionDataContext = createContext<any>(null);
const UserAccountsDataContext = createContext<any>(null);
const SetUserAccountDataContext = createContext<any>(null);
const UserCategoriesDataContext = createContext<any>(null);
const SetUserCategoryDataContext = createContext<any>(null);

export function TransactionData() {
    return useContext(TransactionsDataContext);
}

export function SetTransactionData() {
    return useContext(SetTransactionDataContext);
}

export function UserAccountsData() {
    return useContext(UserAccountsDataContext);
}

export function SetUserAccountData() {
    return useContext(SetUserAccountDataContext);
}

export function UserCategoriesData() {
    return useContext(UserCategoriesDataContext);
}

export function SetUserCategoryData() {
    return useContext(SetUserCategoryDataContext);
}

export function AppDataProvider({ children }: any){
    const [transactions, setTransactions] = useState<TransactionDataContextType>(null);
    const [userAccounts, setUserAccounts] = useState<UserAccountsDataContextType>(null);
    const [userCategories, setUserCategories] = useState<UserCategoriesDataContextType>(null);

    const updateTransactions = (data: TransactionDataContextType) => {
        setTransactions(data);
    }

    const updateAccounts = (data: UserAccountsDataContextType) => {
        setUserAccounts(data);
    }

    const updateCategories = (data: UserCategoriesDataContextType) => {
        setUserCategories(data);
    }


    return (
        <TransactionsDataContext.Provider value={ transactions }>
            <SetTransactionDataContext.Provider value={ updateTransactions }>
                <UserAccountsDataContext.Provider value={ userAccounts }>
                    <SetUserAccountDataContext.Provider value={ updateAccounts }>
                        <UserCategoriesDataContext.Provider value={ userCategories }>
                            <SetUserCategoryDataContext.Provider value={ updateCategories }>
                                {children}
                            </SetUserCategoryDataContext.Provider>
                        </UserCategoriesDataContext.Provider>
                    </SetUserAccountDataContext.Provider>
                </UserAccountsDataContext.Provider>
            </SetTransactionDataContext.Provider>
        </TransactionsDataContext.Provider>
    );
}