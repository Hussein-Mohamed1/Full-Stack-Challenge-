"use client";
import type React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Loader2,
  FileText,
  LayoutDashboard,
  Users,
  Mail,
  Info,
  HomeIcon,
} from "lucide-react"; // Import more icons

interface SectionResponse {
  idea: string;
  sections: string[];
}

// Map common section names to specific Lucide icons
const sectionIcons: { [key: string]: React.ElementType } = {
  Hero: HomeIcon,
  About: Info,
  Contact: Mail,
  Features: LayoutDashboard,
  Services: Users,
  // Add more mappings as needed
};

const getSectionIcon = (sectionName: string) => {
  const IconComponent = sectionIcons[sectionName];
  return IconComponent || FileText; // Default to FileText if no specific icon is found
};

export default function Home() {
  const [idea, setIdea] = useState("");
  const [sections, setSections] = useState<string[] | null>(null);
  const [generatedIdea, setGeneratedIdea] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSections(null);
    setGeneratedIdea(null);

    try {
      const res = await fetch("http://localhost:3001/sections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to generate sections");
      }

      const data: SectionResponse = await res.json();
      setSections(data.sections);
      setGeneratedIdea(data.idea);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="container mx-auto max-w-4xl w-full flex flex-col items-center gap-10 py-12">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center leading-tight tracking-tight">
          Website Section <span className="text-blue-600">Generator</span>
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl">
          Enter your website idea below and let AI generate a set of essential
          sections for your new project.
        </p>
        <Card className="w-full max-w-md p-6 shadow-xl border-none rounded-xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-center text-gray-800">
              Generate Sections
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Input
                type="text"
                placeholder="e.g., 'Landing page for ...'"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                className="h-12 text-base px-4 border-gray-300 focus-visible:ring-blue-500"
                required
              />
              <Button
                type="submit"
                className="h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                disabled={loading || !idea.trim()}
              >
                {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                {loading ? "Generating..." : "Generate Sections"}
              </Button>
            </form>
          </CardContent>
        </Card>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-3 rounded-lg relative w-full max-w-md text-center shadow-md">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        {sections && generatedIdea && (
          <Card className="mt-8 w-full p-10 shadow-md rounded-xl bg-white">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl font-bold text-center text-gray-800">
                Your Generated Sections
              </CardTitle>
              {/* Edited line below */}
              <p className="text-lg text-gray-700 text-center mt-2">
                Idea: <span className="font-semibold">{generatedIdea}</span>
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections.map((section, idx) => {
                  const Icon = getSectionIcon(section);
                  const description = `This section will serve as the primary ${section.toLowerCase()} area for your "${generatedIdea}" website, providing key information and engaging content for your visitors.`;
                  return (
                    <Card
                      key={idx}
                      className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                      <div className="p-4 rounded-full bg-blue-600 text-white mb-4 shadow-md">
                        <Icon className="h-10 w-10" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-800">
                        {section}
                      </h3>
                      <p className="text-sm text-gray-500 leading-normal px-2">
                        {description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
