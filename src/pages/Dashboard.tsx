import React, { useState } from "react";
import Template from "../components/layouts/template/Template";
import Title from "../components/headers/Title";
import Button from "../components/buttons/Button";
import {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonMetricCard,
  SkeletonTable,
  SkeletonForm,
} from "../components/skeletons";
import type { SkeletonAnimation } from "../interfaces/skeleton";
import {
  DollarSign,
  Users,
  ShoppingBag,
  TrendingUp,
  RefreshCw,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [animation, setAnimation] = useState<SkeletonAnimation>("wave");

  const metrics = [
    {
      title: "Total Revenue",
      value: "$84,250.00",
      change: "+14.2%",
      icon: <DollarSign className="w-5 h-5 text-indigo-600" />,
      bg: "bg-indigo-50",
    },
    {
      title: "Active Users",
      value: "14,820",
      change: "+8.1%",
      icon: <Users className="w-5 h-5 text-emerald-600" />,
      bg: "bg-emerald-50",
    },
    {
      title: "New Orders",
      value: "1,245",
      change: "+23.5%",
      icon: <ShoppingBag className="w-5 h-5 text-amber-600" />,
      bg: "bg-amber-50",
    },
    {
      title: "Conversion Rate",
      value: "3.42%",
      change: "+2.4%",
      icon: <TrendingUp className="w-5 h-5 text-violet-600" />,
      bg: "bg-violet-50",
    },
  ];

  const recentTransactions = [
    {
      name: "Liam Anderson",
      email: "liam@example.com",
      status: "Completed",
      amount: "$320.00",
      date: "Oct 12, 2026",
    },
    {
      name: "Sophia Martinez",
      email: "sophia@example.com",
      status: "Processing",
      amount: "$850.50",
      date: "Oct 11, 2026",
    },
    {
      name: "Noah Johnson",
      email: "noah@example.com",
      status: "Completed",
      amount: "$120.00",
      date: "Oct 11, 2026",
    },
    {
      name: "Emma Williams",
      email: "emma@example.com",
      status: "Pending",
      amount: "$490.00",
      date: "Oct 10, 2026",
    },
  ];

  return (
    <Template styleClass="space-y-8">
      {/* Page Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <Title
            heading="Dashboard Overview"
            description="Welcome back! Preview live data and reusable skeleton loading states."
            headingStyle="text-2xl font-bold text-slate-800"
            descriptionStyle="text-sm text-slate-500 mt-1"
          />
        </div>

        {/* Skeleton Interactive Controls */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-xs text-xs font-medium">
            <button
              type="button"
              onClick={() => setAnimation("wave")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                animation === "wave"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Wave (Shimmer)
            </button>
            <button
              type="button"
              onClick={() => setAnimation("pulse")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                animation === "pulse"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Pulse
            </button>
          </div>

          <Button
            type="button"
            btnStyle={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm ${
              isLoading
                ? "bg-amber-500 hover:bg-amber-600 text-white"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
            onClick={() => setIsLoading(!isLoading)}
            icon={<RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />}
          >
            {isLoading ? "Showing Skeleton (Click to Load)" : "Simulate Loading (Show Skeleton)"}
          </Button>
        </div>
      </div>

      {/* KPI Metric Cards Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-500" />
            Performance Metrics
          </h2>
          {isLoading && (
            <span className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full font-medium">
              Skeleton: SkeletonMetricCard
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <SkeletonMetricCard key={index} animation={animation} />
              ))
            : metrics.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500">{item.title}</span>
                    <div className={`p-2 rounded-xl ${item.bg}`}>{item.icon}</div>
                  </div>
                  <div className="mt-4 mb-2">
                    <h3 className="text-2xl font-bold text-slate-800">{item.value}</h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>{item.change}</span>
                    <span className="text-slate-400 font-normal">vs last month</span>
                  </div>
                </div>
              ))}
        </div>
      </section>

      {/* Table Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-800">Recent Transactions</h2>
          {isLoading && (
            <span className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full font-medium">
              Skeleton: SkeletonTable
            </span>
          )}
        </div>

        {isLoading ? (
          <SkeletonTable rows={4} columns={4} animation={animation} />
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs">
            <div className="grid grid-cols-12 gap-4 px-6 py-3.5 bg-slate-50/80 text-xs font-semibold uppercase text-slate-500 border-b border-slate-200">
              <span className="col-span-4">Customer</span>
              <span className="col-span-3">Status</span>
              <span className="col-span-3">Amount</span>
              <span className="col-span-2 text-right">Date</span>
            </div>
            <div className="divide-y divide-slate-100">
              {recentTransactions.map((tx, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-4 px-6 py-4 items-center text-sm">
                  <div className="col-span-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 font-semibold flex items-center justify-center text-xs">
                      {tx.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{tx.name}</p>
                      <p className="text-xs text-slate-400">{tx.email}</p>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                        tx.status === "Completed"
                          ? "bg-emerald-50 text-emerald-700"
                          : tx.status === "Processing"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </div>
                  <div className="col-span-3 font-semibold text-slate-800">{tx.amount}</div>
                  <div className="col-span-2 text-right text-xs text-slate-500">{tx.date}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Showcase Grid of Other Reusable Skeletons */}
      <section className="space-y-4 pt-4 border-t border-slate-200">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">All Reusable Skeleton Presets</h2>
          <p className="text-sm text-slate-500">
            Use these anywhere in forms, cards, profiles, or custom layouts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* SkeletonCard */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              &lt;SkeletonCard /&gt;
            </span>
            <SkeletonCard hasMedia={true} lines={2} animation={animation} />
          </div>

          {/* SkeletonForm */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              &lt;SkeletonForm /&gt;
            </span>
            <SkeletonForm fields={4} columns={2} animation={animation} />
          </div>

          {/* SkeletonAvatar & Text */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              &lt;SkeletonAvatar /&gt; & &lt;SkeletonText /&gt;
            </span>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-medium text-slate-400">Avatar with details:</p>
                <SkeletonAvatar size="lg" withText animation={animation} />
                <SkeletonAvatar size="md" withText animation={animation} />
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <p className="text-xs font-medium text-slate-400">Multi-line Paragraph Text:</p>
                <SkeletonText lines={4} animation={animation} />
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <p className="text-xs font-medium text-slate-400">Custom Shapes (Primitive):</p>
                <div className="flex items-center gap-3">
                  <Skeleton variant="circular" width={36} height={36} animation={animation} />
                  <Skeleton variant="rounded" width={80} height={36} animation={animation} />
                  <Skeleton variant="rectangular" width={60} height={36} animation={animation} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Template>
  );
};

export default Dashboard;