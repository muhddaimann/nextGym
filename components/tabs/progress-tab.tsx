"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", weight: 180 },
  { name: "Tue", weight: 179 },
  { name: "Wed", weight: 179 },
  { name: "Thu", weight: 178 },
  { name: "Fri", weight: 178 },
  { name: "Sat", weight: 177 },
  { name: "Sun", weight: 177 },
];

export default function ProgressTab() {
  return (
    <div className="space-y-6 py-8">
      <h1 className="text-3xl font-bold">Your Progress</h1>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Weight Tracking</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={["dataMin - 5", "dataMax + 5"]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Starting Weight</h3>
          <p className="text-2xl font-bold">185 lbs</p>
          <p className="text-sm text-muted-foreground">4 weeks ago</p>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">Current Weight</h3>
          <p className="text-2xl font-bold">177 lbs</p>
          <p className="text-sm text-muted-foreground">-8 lbs</p>
        </Card>
      </div>
    </div>
  );
}