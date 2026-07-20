import { db } from "../lib/db/src";
import { eventsTable, opportunitiesTable } from "../lib/db/src/schema";
import { eq } from "drizzle-orm";

const generateId = () => Math.random().toString(36).substr(2, 9);

async function run() {
  console.log("Starting database update for new events and opportunities...");

  try {
    // 1. Delete existing events
    console.log("Cleaning up old events...");
    await db.delete(eventsTable);

    // 2. Insert new events
    console.log("Inserting new events...");
    const newEvents = [
      {
        id: generateId(),
        date: "14",
        month: "AUG",
        title: "GSSIFO Sports Summit (Trichy)",
        loc: "Trichy",
        desc: "Join our flagship sports event featuring competitions, teamwork, leadership, and community participation."
      },
      {
        id: generateId(),
        date: "10",
        month: "SEP",
        title: "GSSIFO Sports Summit (Coimbatore)",
        loc: "Coimbatore",
        desc: "Participate in our flagship sports summit that brings together youth through sports, fitness, and leadership activities."
      },
      {
        id: generateId(),
        date: "05",
        month: "OCT",
        title: "GSSIFO Sports Summit (Madurai)",
        loc: "Madurai",
        desc: "Celebrate sportsmanship and community engagement at the GSSIFO Sports Summit in Madurai."
      },
      {
        id: generateId(),
        date: "31",
        month: "JUL",
        title: "Responsive Youth Program",
        loc: "Youth Development, Reading, Teamwork, Public Hygiene",
        desc: "An interactive youth development program that encourages leadership, teamwork, reading habits, and community service through public hygiene initiatives."
      },
      {
        id: generateId(),
        date: "Weekly",
        month: "EVENT",
        title: "AI Awareness Workshop",
        loc: "School Students (Every Week)",
        desc: "Weekly sessions introducing school students to Artificial Intelligence, digital literacy, responsible AI usage, and practical AI tools."
      },
      {
        id: generateId(),
        date: "30",
        month: "AUG",
        title: "Job Fair",
        loc: "Providing Employment Opportunities",
        desc: "Connect job seekers with employers, explore career opportunities, receive career guidance, and participate in recruitment drives."
      }
    ];

    await db.insert(eventsTable).values(newEvents);
    console.log(`Inserted ${newEvents.length} events successfully.`);

    // 3. Delete existing opportunities
    console.log("Cleaning up old opportunities...");
    await db.delete(opportunitiesTable);

    // 4. Insert new opportunities
    console.log("Inserting new opportunities...");
    const newOpps = [
      {
        id: generateId(),
        title: "Dental Camp",
        type: "On-site / Community-Based",
        commitment: "Every Weekend",
        desc: "Join our free community dental camps to help promote oral health through checkups, awareness, and basic dental care."
      },
      {
        id: generateId(),
        title: "Blood Donor Camp",
        type: "On-site / Community-Based",
        commitment: "Every Weekend",
        desc: "Participate in our blood donation camps held every weekend to help save lives and support local hospitals."
      },
      {
        id: generateId(),
        title: "Local Advocacy Coordinator",
        type: "Remote / Community-Based",
        commitment: "5-10 hours/week",
        desc: "Organize local campaigns, manage regional outreach events, and raise awareness on critical climate and sustainability initiatives."
      },
      {
        id: generateId(),
        title: "Clean Water Project Assistant",
        type: "On-site (Sub-Saharan Africa / Asia)",
        commitment: "2-4 weeks (Field deployment)",
        desc: "Assist our engineering teams on the ground with mapping water points, conducting local sanitation workshops, and distributing supplies."
      },
      {
        id: generateId(),
        title: "Crisis Relief Logistics volunteer",
        type: "On-site or Remote Support",
        commitment: "On-call / Emergency-based",
        desc: "Help coordinate supply lines, translate community requests, or support distribution centers in the wake of humanitarian crises."
      },
      {
        id: generateId(),
        title: "Youth Mentor & Education Helper",
        type: "Hybrid / Remote Sessions",
        commitment: "2-4 hours/week",
        desc: "Provide academic tutoring or career mentorship to young girls enrolled in our global education scholarship programs."
      }
    ];

    await db.insert(opportunitiesTable).values(newOpps);
    console.log(`Inserted ${newOpps.length} opportunities successfully.`);

    console.log("Database update complete!");
    process.exit(0);
  } catch (err) {
    console.error("Database update failed:", err);
    process.exit(1);
  }
}

run();
