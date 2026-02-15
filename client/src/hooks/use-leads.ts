import { useMutation } from "@tanstack/react-query";
import { api, type InsertLead } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

export function useCreateLead() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertLead) => {
      // Client-side validation using the shared schema if needed, 
      // but we rely on the API call mostly.
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        // Try to parse validation error
        if (res.status === 400) {
          const errorData = await res.json();
          const parsedError = api.leads.create.responses[400].safeParse(errorData);
          if (parsedError.success) {
            throw new Error(parsedError.data.message || "Validation failed");
          }
        }
        throw new Error("Failed to submit inquiry");
      }

      return api.leads.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Received",
        description: "Thank you! I will be in touch with you shortly.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
