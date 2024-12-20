import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const saveEmailToStorage = (email: string) => {
    try {
      const existingEmails = JSON.parse(localStorage.getItem("newsletterEmails") || "[]");
      if (existingEmails.includes(email)) {
        throw new Error("You're already subscribed!");
      }
      localStorage.setItem(
        "newsletterEmails",
        JSON.stringify([...existingEmails, email])
      );
      return true;
    } catch (error) {
      if (error instanceof Error && error.message === "You're already subscribed!") {
        throw error;
      }
      console.error("Error saving email:", error);
      throw new Error("Failed to save your subscription. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Please enter a valid email address.");
      }

      // Save email to storage
      saveEmailToStorage(email);

      // Show success message
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });

      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-8">
          Subscribe to our newsletter for the latest homelab tips, tricks, and
          updates.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </motion.div>
    </section>
  );
};