/* eslint-disable @next/next/no-img-element */
"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const workouts = [
  {
    title: "Full Body Strength",
    duration: "45 min",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "HIIT Cardio",
    duration: "30 min",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Yoga Flow",
    duration: "60 min",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60"
  }
];

export default function ExploreTab() {
  return (
    <div className="space-y-6 py-8">
      <h1 className="text-3xl font-bold">Explore Workouts</h1>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input className="pl-10" placeholder="Search workouts..." />
      </div>

      <div className="space-y-4">
        {workouts.map((workout, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={workout.image}
                alt={workout.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{workout.title}</h3>
              <div className="flex gap-2 mt-2">
                <span className="text-sm text-muted-foreground">{workout.duration}</span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{workout.level}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}