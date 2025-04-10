"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Award, Calendar, BarChart } from "lucide-react";

export default function ProfileTab() {
  return (
    <div className="space-y-6 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Profile</h1>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex flex-col items-center">
        <div className="h-24 w-24 rounded-full bg-accent flex items-center justify-center mb-4">
          <span className="text-2xl font-bold">A</span>
        </div>
        <h2 className="text-xl font-semibold">Rahman</h2>
        <p className="text-muted-foreground">Gym Member</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold">24</p>
          <p className="text-sm text-muted-foreground">Workouts</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold">8.5k</p>
          <p className="text-sm text-muted-foreground">Calories Burnt</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold">12</p>
          <p className="text-sm text-muted-foreground">Hours</p>
        </Card>
      </div>

      <div className="space-y-2">
        <Button variant="outline" className="w-full justify-start" asChild>
          <a href="#achievements">
            <Award className="mr-2 h-5 w-5" />
            Achievements
          </a>
        </Button>
        <Button variant="outline" className="w-full justify-start" asChild>
          <a href="#schedule">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule
          </a>
        </Button>
        <Button variant="outline" className="w-full justify-start" asChild>
          <a href="#statistics">
            <BarChart className="mr-2 h-5 w-5" />
            Statistics
          </a>
        </Button>
      </div>
    </div>
  );
}