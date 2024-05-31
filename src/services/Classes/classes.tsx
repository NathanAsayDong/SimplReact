export class Transaction {
    id: number;
    timestamp: number;
    amount: number;
    description: string;
    category: string;
    account: string
    constructor(id: number = -1, timestamp: number, amount: number, description: string, account: string, category: string) {
        this.id = id;
        this.timestamp = timestamp;
        this.amount = amount;
        this.description = description;
        this.category = category;
        this.account = account;
    }
}

export class Budget {
    id: number;
    name: string;
    category: string;
    amount: number;
    constructor(id: number, name: string, category: string, amount: number) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.amount = amount;
    }
}

export const accountSources = [
    'Uccu', 'Chase', 'Discover', 'CapitalOne', 'Venmo', 'CashApp', 'Paypal', 'Cash', 'Other'
];

export const accountTypes = [
    'Checking', 'Savings', 'Credit'
];

export class Account {
    name: string;
    type: string;
    source: string
    refDate: string;
    refBalance: number;
    constructor(name: string, type: string, source: string, refDate: string = "NA", refBalance: number = 0) {
        this.name = name;
        this.type = type;
        this.source = source;
        this.refDate = refDate;
        this.refBalance = refBalance;
    }

    getAccountSource(): string {
        return this.source;
    }
}

export class DashboardFilterData {
    selectedAccounts: string[];
    selectedCategories: string[];
    startDate: number | null;
    endDate: number | null;
    areaChartDateScale: 'day' | 'week' | 'month' | 'year';
    accountOptions: string[];
    categoryOptions: string[];

    constructor(selectedAccounts: string[], selectedCategories: string[], startDate: number, endDate: number, areaChartDateScale: 'day' | 'week' | 'month' | 'year', accountOptions: string[], categoryOptions: string[]) {
        this.selectedAccounts = selectedAccounts;
        this.selectedCategories = selectedCategories;
        this.startDate = startDate;
        this.endDate = endDate;
        this.areaChartDateScale = areaChartDateScale;
        this.accountOptions = accountOptions;
        this.categoryOptions = categoryOptions;
    }
}