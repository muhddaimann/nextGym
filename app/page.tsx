"use client";

import { useState } from "react";
import HomeTab from "@/components/tabs/home-tab";
import ProgressTab from "@/components/tabs/progress-tab";
import ExploreTab from "@/components/tabs/explore-tab";
import ProfileTab from "@/components/tabs/profile-tab";
import { Home, ActivitySquare, Compass, User } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", icon: Home, component: HomeTab },
    { id: "progress", icon: ActivitySquare, component: ProgressTab },
    { id: "explore", icon: Compass, component: ExploreTab },
    { id: "profile", icon: User, component: ProfileTab },
  ];

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component || HomeTab;

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 pb-20">
        <ActiveComponent />
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-around">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center py-3 px-5 transition-colors ${
                    activeTab === tab.id
                      ? "text-secondary"
                      : "text-primary hover:text-muted-foreground"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-xs mt-1 capitalize">{tab.id}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}