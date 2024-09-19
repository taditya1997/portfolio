import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SignupComponent() {
  return (
    <Card className="p-6 bg-[#1E1E1E] rounded-lg border-cardBorder">
      <CardHeader className="px-0 space-y-3">
        <CardTitle className="text-16 font-bold">Stay up to date</CardTitle>
        <CardDescription className=" text-textZinc !text-14">
          Get notified when I publish something new, and unsubscribe at any time.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex mt-4 px-0">
        <Input 
          type="email" 
          placeholder="Email address" 
          className="mr-2 text-14 bg-transparent border-cardBorder text-textZinc" 
        />
        <Button 
          variant="default" 
          className="text-sm bg-green hover:bg-green-600 text-white font-bold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Join
        </Button>
      </CardContent>
    </Card>
  );
}