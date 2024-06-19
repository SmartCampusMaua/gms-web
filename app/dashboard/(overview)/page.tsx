// export default function Page() {
//     return <p>Dashboard Page</p>;
//   }

//   // if the development server is running and visit http://localhost:3000/dashboard. You should see the "Dashboard Page" text.


import CardWrapper from '@/app/ui/dashboard/cards';
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
// import { fetchRevenue } from '@/app/lib/data'; //To fetch data for the <RevenueChart/> component, import the fetchRevenue function from data.ts and call it inside your component:
// import { fetchLatestInvoices } from '@/app/lib/data'; // função sql que importa os ultimmos 5 registros
// import {
//   fetchRevenue,
//   fetchLatestInvoices,
//   fetchCardData,
// } from '@/app/lib/data';

import { fetchCardData } from '@/app/lib/data'; // função sql que importa os ultimmos 5 registros

import { Suspense } from 'react';
import { RevenueChartSkeleton ,LatestInvoicesSkeleton, CardsSkeleton,} from '@/app/ui/skeletons';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'dash',
};
export default async function Page() {
  // const revenue = await fetchRevenue(); //To fetch data for the <RevenueChart/> component, import the fetchRevenue function from data.ts and call it inside your component: 
  // const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  /> */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}




// Page é um componente assíncrono . Isso permite que você use await para buscar dados.