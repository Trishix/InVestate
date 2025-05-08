export const PropertyType = {
    APARTMENT: 'Apartment',
    CONDO: 'Condo',
    SINGLE_FAMILY: 'Single Family',
    VILLA: 'Villa',
    PLOT: 'Plot',
    COMMERCIAL: 'Commercial'
  };
  
  export const PropertyStatus = {
    ACTIVE: 'Active',
    VACANT: 'Vacant',
    UNDER_MAINTENANCE: 'Under Maintenance',
    SOLD: 'Sold'
  };
  
  // data.js
  export const properties = [
    {
      id: '1',
      name: 'Luxury Apartment - Worli',
      address: '123 Sea View Road, Worli, Mumbai 400018',
      purchaseDate: '2021-03-15',
      purchasePrice: 25000000, // 2.5 Cr
      currentValue: 32000000, // 3.2 Cr
      imageUrl: '/Assets/property1.jpg',
      type: PropertyType.APARTMENT,
      sqft: 1200,
      bedrooms: 2,
      bathrooms: 2,
      yearBuilt: 2015,
      status: PropertyStatus.ACTIVE
    },
    {
      id: '2',
      name: 'Premium Condo - HSR Layout',
      address: '456 Tech Park Road, HSR Layout, Bangalore 560102',
      purchaseDate: '2020-07-22',
      purchasePrice: 18000000, // 1.8 Cr
      currentValue: 22000000, // 2.2 Cr
      imageUrl: '/Assets/property2.jpg',
      type: PropertyType.CONDO,
      sqft: 1050,
      bedrooms: 2,
      bathrooms: 2,
      yearBuilt: 2018,
      status: PropertyStatus.ACTIVE
    },
    {
      id: '3',
      name: 'Independent Villa - Whitefield',
      address: '789 Palm Grove, Whitefield, Bangalore 560066',
      purchaseDate: '2019-05-10',
      purchasePrice: 15000000, // 1.5 Cr
      currentValue: 21000000, // 2.1 Cr
      imageUrl: '/Assets/property3.jpg',
      type: PropertyType.VILLA,
      sqft: 2200,
      bedrooms: 4,
      bathrooms: 2.5,
      yearBuilt: 2005,
      status: PropertyStatus.ACTIVE
    },
    {
      id: '4',
      name: 'Farmhouse - Gurgaon',
      address: '101 Golf Course Road, Gurgaon, Haryana 122002',
      purchaseDate: '2022-01-05',
      purchasePrice: 35000000, // 3.5 Cr
      currentValue: 40000000, // 4 Cr
      imageUrl: '/Assets/property4.jpg',
      type: PropertyType.SINGLE_FAMILY,
      sqft: 2800,
      bedrooms: 4,
      bathrooms: 3,
      yearBuilt: 2010,
      status: PropertyStatus.ACTIVE
    }
  ];
  
  export const financialRecords = [
    {
      id: '101',
      propertyId: '1',
      date: '2023-01-05',
      amount: 85000,
      category: 'Rent',
      description: 'Monthly rental payment',
      type: 'income'
    },
    {
      id: '102',
      propertyId: '1',
      date: '2023-02-05',
      amount: 85000,
      category: 'Rent',
      description: 'Monthly rental payment',
      type: 'income'
    },
    {
      id: '103',
      propertyId: '1',
      date: '2023-01-15',
      amount: 12000,
      category: 'Repairs',
      description: 'Plumbing repair',
      type: 'expense'
    },
    {
      id: '104',
      propertyId: '1',
      date: '2023-01-20',
      amount: 8000,
      category: 'Society Maintenance',
      description: 'Monthly society charges',
      type: 'expense'
    },
    {
      id: '105',
      propertyId: '2',
      date: '2023-01-01',
      amount: 65000,
      category: 'Rent',
      description: 'Monthly rental payment',
      type: 'income'
    },
    {
      id: '106',
      propertyId: '2',
      date: '2023-02-01',
      amount: 65000,
      category: 'Rent',
      description: 'Monthly rental payment',
      type: 'income'
    },
    {
      id: '107',
      propertyId: '2',
      date: '2023-01-10',
      amount: 15000,
      category: 'Property Management',
      description: 'Property management fee',
      type: 'expense'
    },
    {
      id: '108',
      propertyId: '3',
      date: '2023-01-03',
      amount: 75000,
      category: 'Rent',
      description: 'Monthly rental payment',
      type: 'income'
    },
    {
      id: '109',
      propertyId: '3',
      date: '2023-01-25',
      amount: 25000,
      category: 'Insurance',
      description: 'Annual insurance premium',
      type: 'expense'
    },
    {
      id: '110',
      propertyId: '4',
      date: '2023-01-05',
      amount: 125000,
      category: 'Rent',
      description: 'Monthly rental payment',
      type: 'income'
    },
    {
      id: '111',
      propertyId: '4',
      date: '2023-01-12',
      amount: 35000,
      category: 'Property Taxes',
      description: 'Quarterly property tax payment',
      type: 'expense'
    }
  ];
  
  export const performanceData = [
    {
      propertyId: '1',
      cashOnCash: 7.2,
      capRate: 5.8,
      netOperatingIncome: 1020000, // 10.2 Lakhs
      cashFlow: 720000, // 7.2 Lakhs
      roi: 8.4,
      appreciationRate: 5.1
    },
    {
      propertyId: '2',
      cashOnCash: 6.5,
      capRate: 5.2,
      netOperatingIncome: 780000, // 7.8 Lakhs
      cashFlow: 540000, // 5.4 Lakhs
      roi: 7.8,
      appreciationRate: 4.8
    },
    {
      propertyId: '3',
      cashOnCash: 7.8,
      capRate: 6.1,
      netOperatingIncome: 900000, // 9 Lakhs
      cashFlow: 650000, // 6.5 Lakhs
      roi: 9.2,
      appreciationRate: 6.3
    },
    {
      propertyId: '4',
      cashOnCash: 6.3,
      capRate: 5.5,
      netOperatingIncome: 1500000, // 15 Lakhs
      cashFlow: 1000000, // 10 Lakhs
      roi: 7.5,
      appreciationRate: 3.8
    }
  ];
  
  export const tenants = [
    {
      id: 't1',
      propertyId: '1',
      name: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      phone: '+91 98765 43210',
      leaseStart: '2022-08-01',
      leaseEnd: '2023-07-31',
      monthlyRent: 85000
    },
    {
      id: 't2',
      propertyId: '2',
      name: 'Priya Patel',
      email: 'priya.patel@example.com',
      phone: '+91 87654 32109',
      leaseStart: '2022-06-15',
      leaseEnd: '2023-06-14',
      monthlyRent: 65000
    },
    {
      id: 't3',
      propertyId: '3',
      name: 'Vikram Singh',
      email: 'vikram.singh@example.com',
      phone: '+91 76543 21098',
      leaseStart: '2022-09-01',
      leaseEnd: '2023-08-31',
      monthlyRent: 75000
    },
    {
      id: 't4',
      propertyId: '4',
      name: 'Ananya Gupta',
      email: 'ananya.gupta@example.com',
      phone: '+91 65432 10987',
      leaseStart: '2022-11-01',
      leaseEnd: '2023-10-31',
      monthlyRent: 125000
    }
  ];