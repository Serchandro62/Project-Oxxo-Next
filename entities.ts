export interface Location {
    locationId: number;
    locationName: string;
    locationAddress: string;
    locationCoords: string;
    manager?: any;
    region?: any;
    employees?: Employee[];
}

export interface Employee{ 
    employeeId: string;
    employeeName: string;
    employeeLastName: string;
    employeePhoneNumber: string;
    employeePhoto?: string
    employeeEmail: string;
    location?: Location; 
    user?: any;
}