'use client';
import { Button } from "@heroui/react";
import { useState } from "react";

export default function TestButton() {
  const [loading, setLoading] = useState(false);
  
  return (
    <div className="p-4">
      <Button 
        isLoading={loading}
        onPress={() => setLoading(!loading)}
      >
        {loading ? "Cargando..." : "Click me"}
      </Button>
    </div>
  );
}