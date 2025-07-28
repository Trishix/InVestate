// app/dashboard/page.js
"use client";
import { properties, financialRecords, performanceData, tenants } from '@/lib/data';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

export default function Dashboard() {
  // Calculate summary metrics
  const totalProperties = properties.length;
  const totalPortfolioValue = properties.reduce((sum, property) => sum + property.currentValue, 0);
  const totalAnnualRent = tenants.reduce((sum, tenant) => sum + (tenant.monthlyRent * 12), 0);
  const averageROI = (performanceData.reduce((sum, data) => sum + data.roi, 0) / performanceData.length);

  // Prepare property performance data
  const propertyPerformanceData = properties.map(property => {
    const performance = performanceData.find(p => p.propertyId === property.id);
    const tenant = tenants.find(t => t.propertyId === property.id);
    const rentalYield = tenant 
      ? ((tenant.monthlyRent * 12 / property.currentValue) * 100)
      : 0;
    
    return {
      name: property.name.split(' ')[0],
      fullName: property.name,
      value: property.currentValue,
      purchasePrice: property.purchasePrice,
      roi: performance?.roi || 0,
      rentalYield: rentalYield,
      monthlyRent: tenant?.monthlyRent || 0,
      valueGrowth: ((property.currentValue - property.purchasePrice) / property.purchasePrice * 100)
    };
  });

  // Prepare recent transactions (last 3 months)
  const recentTransactions = financialRecords
    .filter(record => {
      const recordDate = new Date(record.date);
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      return recordDate > threeMonthsAgo;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Prepare data for charts
  // Property Value Distribution Pie Chart
  const propertyValueData = {
    labels: propertyPerformanceData.map(p => p.name),
    datasets: [
      {
        data: propertyPerformanceData.map(p => p.value),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF'
        ]
      }
    ]
  };

  // ROI Comparison Bar Chart
  const roiComparisonData = {
    labels: propertyPerformanceData.map(p => p.name),
    datasets: [
      {
        label: 'ROI (%)',
        data: propertyPerformanceData.map(p => p.roi),
        backgroundColor: propertyPerformanceData.map(p => 
          p.roi >= 0 ? 'rgba(75, 192, 192, 0.7)' : 'rgba(255, 99, 132, 0.7)'
        ),
        borderColor: propertyPerformanceData.map(p => 
          p.roi >= 0 ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)'
        ),
        borderWidth: 1
      }
    ]
  };

  // Monthly Income/Expense Line Chart
  const monthlyRecords = financialRecords
    .filter(record => {
      const recordDate = new Date(record.date);
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      return recordDate > oneYearAgo;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const monthlySummary = {};
  monthlyRecords.forEach(record => {
    const monthYear = new Date(record.date).toLocaleString('default', { month: 'short', year: 'numeric' });
    if (!monthlySummary[monthYear]) {
      monthlySummary[monthYear] = { income: 0, expense: 0 };
    }
    if (record.type === 'income') {
      monthlySummary[monthYear].income += record.amount;
    } else {
      monthlySummary[monthYear].expense += record.amount;
    }
  });

  const monthlyTrendsData = {
    labels: Object.keys(monthlySummary),
    datasets: [
      {
        label: 'Income',
        data: Object.values(monthlySummary).map(m => m.income / 1000), // in K
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.1,
        fill: true
      },
      {
        label: 'Expenses',
        data: Object.values(monthlySummary).map(m => m.expense / 1000), // in K
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.1,
        fill: true
      }
    ]
  };

  // Helper function to format numbers with color
  const formatNumberWithColor = (value, isCurrency = false, isPercentage = false) => {
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;
    const color = numericValue >= 0 ? 'text-green-600' : 'text-red-600';
    const prefix = isCurrency ? '₹' : '';
    const suffix = isPercentage ? '%' : '';
    
    let formattedValue;
    if (isCurrency) {
      if (Math.abs(numericValue) >= 10000000) {
        formattedValue = (numericValue / 10000000).toFixed(2) + ' Cr';
      } else if (Math.abs(numericValue) >= 100000) {
        formattedValue = (numericValue / 100000).toFixed(1) + ' L';
      } else if (Math.abs(numericValue) >= 1000) {
        formattedValue = (numericValue / 1000).toFixed(0) + ' K';
      } else {
        formattedValue = numericValue.toFixed(0);
      }
    } else {
      formattedValue = numericValue.toFixed(1);
    }
    
    return <span className={`font-semibold ${color}`}>{prefix}{formattedValue}{suffix}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Property Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Total Properties</h3>
          <p className="text-2xl font-bold text-gray-800">{totalProperties}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Portfolio Value</h3>
          <p className="text-2xl font-bold text-gray-800">₹{(totalPortfolioValue / 10000000).toFixed(2)} Cr</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Annual Rental Income</h3>
          <p className="text-2xl font-bold text-green-600">₹{(totalAnnualRent / 100000).toFixed(1)} L</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Avg. ROI</h3>
          {formatNumberWithColor(averageROI, false, true)}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Property Value Distribution */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Property Value Distribution</h2>
          <div className="h-64">
            <Pie 
              data={propertyValueData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        const value = context.raw;
                        return `${context.label}: ₹${(value / 10000000).toFixed(2)} Cr`;
                      }
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* ROI Comparison */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">ROI Comparison</h2>
          <div className="h-64">
            <Bar 
              data={roiComparisonData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'ROI (%)'
                    }
                  }
                },
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        return `ROI: ${context.raw}%`;
                      }
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Second Row of Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Monthly Trends */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Income & Expenses (₹K)</h2>
          <div className="h-64">
            <Line 
              data={monthlyTrendsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Rental Yield vs Property Value */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Rental Yield vs Property Value</h2>
          <div className="h-64">
            <Bar 
              data={{
                labels: propertyPerformanceData.map(p => p.name),
                datasets: [
                  {
                    label: 'Property Value (₹Cr)',
                    data: propertyPerformanceData.map(p => p.value / 10000000),
                    backgroundColor: '#3B82F6',
                    yAxisID: 'y'
                  },
                  {
                    label: 'Rental Yield (%)',
                    data: propertyPerformanceData.map(p => p.rentalYield),
                    backgroundColor: '#10B981',
                    yAxisID: 'y1'
                  }
                ]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                      display: true,
                      text: 'Property Value (₹Cr)'
                    }
                  },
                  y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                      display: true,
                      text: 'Rental Yield (%)'
                    },
                    grid: {
                      drawOnChartArea: false
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Property Performance */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Property Performance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchase Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value Growth</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rental Yield</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {propertyPerformanceData.map((property, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{property.fullName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{(property.value / 10000000).toFixed(2)} Cr</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{(property.purchasePrice / 10000000).toFixed(2)} Cr</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {formatNumberWithColor(property.valueGrowth, false, true)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {formatNumberWithColor(property.roi, false, true)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                    {property.rentalYield.toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tenant Information */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Tenant Information</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tenant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lease Period</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Rent</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tenants.map((tenant) => {
                const property = properties.find(p => p.id === tenant.propertyId);
                return (
                  <tr key={tenant.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{property?.name || 'Unknown'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tenant.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(tenant.leaseStart).toLocaleDateString()} - {new Date(tenant.leaseEnd).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">₹{(tenant.monthlyRent / 1000).toFixed(0)}K</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tenant.phone}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {recentTransactions.slice(0, 5).map((transaction) => {
            const property = properties.find(p => p.id === transaction.propertyId);
            return (
              <div key={transaction.id} className="border-b pb-3 last:border-b-0 last:pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{property?.name || 'Unknown Property'}</p>
                    <p className="text-sm text-gray-500">{transaction.category}</p>
                  </div>
                  <p className={`font-semibold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                    {transaction.type === 'income' ? '+' : '-'}₹{(transaction.amount / 1000).toFixed(0)}K
                  </p>
                </div>
                <p className="text-xs text-gray-400 mt-1">{new Date(transaction.date).toLocaleDateString()}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}