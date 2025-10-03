'use client';

import { Button, Input } from "@heroui/react";

export default function TestHeroUIPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto space-y-4">
        <h1 className="text-2xl font-bold">Test HeroUI</h1>
        
        <Input 
          label="Email" 
          type="email" 
          placeholder="test@example.com"
        />
        
        <Button color="primary">
          Botón HeroUI
        </Button>
      </div>
    </div>
  );
}