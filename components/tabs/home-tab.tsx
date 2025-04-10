"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Dumbbell, Target, Flame } from "lucide-react";

export default function HomeTab() {
  const { toast } = useToast();

  const handleStreakClick = () => {
    toast({
      title: "🔥 Weekly Streak",
      description: "You’ve worked out 5 days this week. Amazing consistency!",
      duration: 1500,
    });
  };

  return (
    <div className="space-y-6 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Welcome back, Rahman!</h1>
        <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
          <Dumbbell className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>
      
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Todays Goals</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <span>Workout Minutes</span>
              </div>
              <span className="text-sm">45/60 min</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-primary" />
                <span>Calories Burned</span>
              </div>
              <span className="text-sm">320/500 kcal</span>
            </div>
            <Progress value={64} className="h-2" />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Next Workout</h3>
          <p className="text-muted-foreground">Upper Body</p>
          <p className="text-sm text-accent-foreground">Today, 6:00 PM</p>
        </Card>

        <Card
          onClick={handleStreakClick}
          className="p-6 cursor-pointer hover:bg-muted transition "
        >
          <h3 className="font-semibold mb-2">Weekly Streak</h3>
          <p className="text-2xl font-bold">5 Days</p>
          <p className="text-sm text-muted-foreground">Keep it up!</p>
        </Card>
      </div>
    </div>
  );
}
