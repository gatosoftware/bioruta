export interface PendingBalance {
    amount: number;
    currency: string;
    lastUpdated: Date;
    consumptionPeriod: {
        startDate: Date;
        endDate: Date;
    };
}

export interface ConsumptionData {
    userId: string;
    totalConsumed: number;
    pendingAmount: number;
    lastTravelCost: number;
    currency: string;
    lastTravelRoute: { from: string; to: string ; color: string };
    routes: { from: string; to: string ; color: string }[];
    travelHistory: { from: string; to: string ; color: string; amount: number; date: Date }[];
}

// Simulated data for pending consumption balance
const mockConsumptionData: ConsumptionData[] = [
    {
        userId: "user_001",
        totalConsumed: 150.75,
        pendingAmount: 45.25,
        lastTravelCost: 12.50,
        currency: "MXN",
        routes : [
            { from: "Garcia", to: "MTY", color: "red" },
            { from: "MTY", to: "Saltillo", color: "blue" },
            { from: "MTY", to: "Cavazos", color: "green" },
            { from: "Garcia", to: "Sta Catarina", color: "yellow" },
            { from: "Sta Catarina", to: "Saltillo", color: "purple" },
        ],
        lastTravelRoute: { from: "MTY", to: "Saltillo", color: "white" },
        travelHistory: [
            { from: "Garcia", to: "MTY", color: "red", amount: 10.00, date: new Date('2024-06-01') },
            { from: "MTY", to: "Saltillo", color: "blue", amount: 12.50, date: new Date('2024-06-02') },
            { from: "MTY", to: "Cavazos", color: "green", amount: 8.75, date: new Date('2024-06-03') },
        ],
    }
];

export class SampleDataService {
    getPendingBalance(userId: string): number {
        return mockConsumptionData[0].pendingAmount || 0;
    }

    getRoutes(userId: string): { from: string; to: string; color: string }[] {
        return mockConsumptionData[0].routes || [];
    }

    getLastTravelCost(userId: string): number {
        return mockConsumptionData[0].lastTravelCost || 0;
    }

    getLastTravelRoute(userId: string): { from: string; to: string; color: string } {
        return mockConsumptionData[0].lastTravelRoute || { from: "", to: "", color: "" };
    }

    getTravelHistory(userId: string): { from: string; to: string; color: string; amount: number; date: Date }[] {
        return mockConsumptionData[0].travelHistory || [];
    }
}