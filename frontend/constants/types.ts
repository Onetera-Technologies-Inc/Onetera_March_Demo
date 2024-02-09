
export interface ServiceType {
    serviceName: string;
    key: string;
  }
  
  export interface DataType {
    key: string;
    userId: string;
    profile: string;
    firstname: string;
    lastname: string;
    service: ServiceType;
    address: string;
    date: string;
  }
  