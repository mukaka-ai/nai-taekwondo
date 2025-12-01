import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

import CoachesManager from "@/components/admin/CoachesManager";
import EventsManager from "@/components/admin/EventsManager";
import MediaManager from "@/components/admin/MediaManager";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user, logout, isAdmin } = useAuth();

  // Protect dashboard
  useEffect(() => {
    if (user === null) {
      // Not logged in
      navigate("/login");
      return;
    }

    if (isAdmin === false) {
      alert("You do not have admin access.");
      navigate("/");
    }
  }, [user, isAdmin, navigate]);

  return (
    <div className="p-6 space-y-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={logout}>Logout</Button>
      </div>

      {/* Coaches Manager */}
      <Card>
        <CardHeader>
          <CardTitle>Coaches Management</CardTitle>
        </CardHeader>
        <CardContent>
          <CoachesManager />
        </CardContent>
      </Card>

      {/* Events Manager */}
      <Card>
        <CardHeader>
          <CardTitle>Events & Announcements</CardTitle>
        </CardHeader>
        <CardContent>
          <EventsManager />
        </CardContent>
      </Card>

      {/* Media Manager */}
      <Card>
        <CardHeader>
          <CardTitle>Media & Gallery Manager</CardTitle>
        </CardHeader>
        <CardContent>
          <MediaManager />
        </CardContent>
      </Card>
    </div>
  );
}
