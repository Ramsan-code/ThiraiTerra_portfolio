import { z } from "zod";

export const ProfileSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.enum(["artist", "technician", "director", "producer", "investor"]),
  credits: z.array(z.string()).min(1, "At least one credit is required"),
  bio: z.string().max(500, "Bio must be under 500 characters"),
  isVerified: z.boolean().default(false),
});

export const ProjectSchema = z.object({
  title: z.string().min(2, "Project title is required"),
  logline: z.string().max(200, "Logline must be concise"),
  genre: z.string(),
  budget: z.number().positive("Budget must be a positive number"),
  investorAsk: z.number().positive("Investor ask is required"),
  deckUrl: z.string().url("Valid pitch deck URL is required"),
  team: z.array(z.object({
    name: z.string(),
    role: z.string(),
    isVerified: z.boolean(),
  })),
});

export const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  subject: z.string().optional(),
});

export type ProfileData = z.infer<typeof ProfileSchema>;
export type ProjectData = z.infer<typeof ProjectSchema>;
export type ContactData = z.infer<typeof ContactSchema>;
