import { 
  db, 
  bannerTable, 
  heroSlidesTable, 
  storiesTable, 
  newsTable, 
  eventsTable, 
  opportunitiesTable, 
  positionsTable 
} from "@workspace/db";
import { count, eq } from "drizzle-orm";

export async function seedDatabase() {
  try {
    // 2. Seed/Update Hero Slides (Always force refresh to ensure correct images are active)
    try {
      await db.delete(heroSlidesTable);
      await db.insert(heroSlidesTable).values([
        { imageUrl: "/src/assets/images/hero-carousel-1.jpg", displayOrder: 0 },
        { imageUrl: "/src/assets/images/hero-carousel-2.jpg", displayOrder: 1 },
        { imageUrl: "/src/assets/images/hero-carousel-3.jpg", displayOrder: 2 }
      ]);
      console.log("Hero slides synchronized successfully.");
    } catch (slideErr) {
      console.error("Failed to synchronize hero slides:", slideErr);
    }

    // Always synchronize the positions table to match the updated organization careers
    try {
      await db.delete(positionsTable);
      await db.insert(positionsTable).values([
        {
          id: "0",
          title: "Digital Marketing Executive",
          category: "Marketing",
          location: "Chennai, India",
          type: "Full-Time",
          desc: "Plan and execute digital marketing campaigns, manage social media platforms, create engaging content, and increase awareness of the organization's programs and initiatives."
        },
        {
          id: "1",
          title: "Zonal Head",
          category: "Leadership",
          location: "Chennai, India",
          type: "Full-Time",
          desc: "Lead regional operations, coordinate volunteers and project teams, build partnerships, and ensure successful implementation of community outreach programs."
        },
        {
          id: "2",
          title: "AI Trainee",
          category: "Technology",
          location: "Chennai, India",
          type: "Internship / Full-Time",
          desc: "Assist in AI-based projects, support digital innovation initiatives, learn emerging technologies, and contribute to educational and community-focused solutions."
        },
        {
          id: "3",
          title: "Human Resource",
          category: "Operations",
          location: "Chennai, India",
          type: "Full-Time",
          desc: "Manage recruitment, employee engagement, volunteer onboarding, and organizational development while fostering a positive and collaborative work environment."
        },
        {
          id: "4",
          title: "Project Senior Lead",
          category: "Projects",
          location: "Chennai, India",
          type: "Full-Time",
          desc: "Oversee project planning and execution, lead multidisciplinary teams, monitor project outcomes, and ensure timely delivery of organizational initiatives."
        },
        {
          id: "5",
          title: "Project Junior Lead",
          category: "Projects",
          location: "Chennai, India",
          type: "Full-Time",
          desc: "Support project coordination, assist senior leads in implementation, track project activities, and collaborate with volunteers and community partners."
        },
        {
          id: "6",
          title: "Fundraiser",
          category: "Fundraising",
          location: "Chennai, India",
          type: "Full-Time",
          desc: "Develop fundraising strategies, engage with donors and sponsors, organize fundraising campaigns, and help secure resources to expand the organization's impact."
        },
        {
          id: "7",
          title: "CSR Delivery Head",
          category: "Leadership",
          location: "Chennai, India",
          type: "Full-Time",
          desc: "Lead Corporate Social Responsibility (CSR) partnerships, manage CSR-funded projects, coordinate with corporate stakeholders, and ensure successful delivery of social impact initiatives."
        }
      ]);
      console.log("Positions synchronized successfully.");
    } catch (posErr) {
      console.error("Failed to synchronize positions:", posErr);
    }

    // Delete the AI Awareness Workshop event if it exists in the database
    try {
      await db.delete(eventsTable).where(eq(eventsTable.title, "AI Awareness Workshop"));
      console.log("AI Awareness Workshop event removed successfully from database.");
    } catch (eventErr) {
      console.error("Failed to remove AI Awareness Workshop event:", eventErr);
    }

    try {
      await db.update(bannerTable)
        .set({ text: "Join our upcoming Responsive Youth Program" })
        .where(eq(bannerTable.id, 1));
      console.log("Banner updated successfully in database.");
    } catch (bannerErr) {
      console.error("Failed to update banner text:", bannerErr);
    }

    // Check if banner table is empty (which indicates database is unseeded)
    const bannerCount = await db.select({ val: count() }).from(bannerTable);
    if (bannerCount[0].val > 0) {
      console.log("Database already seeded. Skipping other initial seeding.");
      return;
    }

    console.log("Database empty. Starting initial seeding to Supabase...");

    // 1. Seed Banner
    await db.insert(bannerTable).values({
      id: 1,
      text: "Join our upcoming Responsive Youth Program",
      linkText: "Register now.",
      linkUrl: "/summit"
    });

    // 3. Seed Stories
    await db.insert(storiesTable).values([
      {
        id: "0",
        img: "/src/assets/images/story-mobile-clinic.webp",
        tag: "Health",
        date: "Oct 12, 2023",
        title: "New Mobile Clinics Reach Remote Villages in Sub-Saharan Africa",
        desc: "How a fleet of fully-equipped medical vehicles is changing the landscape of rural healthcare access.",
        author: "Dr. Amara Okoro, Director of Rural Health Operations",
        readTime: "5 min read",
        content: [
          "In many rural regions of Sub-Saharan Africa, accessing basic healthcare requires traveling dozens of miles on foot. For pregnant women, young children, and those with chronic conditions, this distance is often a barrier between life and death. To address this crisis, GSSIFO launched its new Mobile Health Clinic initiative, deploying a fleet of custom-retrofitted off-road medical vehicles.",
          "Each mobile clinic is staffed by a dedicated team of nurses, general practitioners, and a pharmacist. Equipped with solar-powered refrigerators for vaccine storage, rapid diagnostic testing kits, and essential medications, these units can diagnose and treat the most common illnesses on the spot. From maternal checkups to malaria treatments and immunization campaigns, the clinics provide comprehensive primary care right at the village square.",
          "Since deployment last month, the clinics have visited over 40 remote settlements, treating more than 3,500 patients. Miriam, a resident of a clinic-visited village, notes that: 'For the first time, our children are getting their vaccinations without us having to sacrifice a full day's work and walk through rough terrain.' Plans are already underway to expand the fleet and recruit more volunteer healthcare professionals to meet the overwhelming demand."
        ]
      },
      {
        id: "1",
        img: "/src/assets/images/story-clean-water.webp",
        tag: "Water",
        date: "Sep 28, 2023",
        title: "Clean Water Initiative Brings Hope to 50,000 Families",
        desc: "A new community-managed well system provides sustainable, clean drinking water to previously drought-stricken areas.",
        author: "David Vance, Lead Hydrologist",
        readTime: "4 min read",
        content: [
          "Clean water is the foundation of community development. Without it, health, education, and economic stability are impossible to sustain. In response to prolonged droughts affecting regional farming communities, GSSIFO's Clean Water Initiative has successfully engineered and completed 15 community-managed deep borewell systems, delivering potable water to over 50,000 families.",
          "Rather than simply digging wells and leaving, GSSIFO's team works with local residents to establish 'Water Committees'. These committees, consisting of equal numbers of men and women, are trained in basic pump maintenance, water testing, and financial bookkeeping. The community sets a nominal usage fee to fund future repairs, ensuring the project remains self-sustaining for decades."
        ]
      },
      {
        id: "2",
        img: "/src/assets/images/story-3.webp",
        tag: "Education",
        date: "Sep 15, 2023",
        title: "Empowering the Next Generation: Girls' Education Program Expands",
        desc: "Breaking down barriers to education through targeted scholarships and safe school infrastructure.",
        author: "Elena Rostova, Education Program Coordinator",
        readTime: "6 min read",
        content: [
          "Educating a girl doesn't just transform her life; it uplifts her entire family and community. Unfortunately, financial constraints and lack of secure facilities keep millions of young girls out of secondary school globally. GSSIFO's 'Empowering Girls through Education' initiative has expanded its reach, adding 500 new academic scholarships and building safe dormitory spaces in three target districts.",
          "The program covers tuition fees, textbooks, school uniforms, and safe transportation. In addition, GSSIFO has funded the construction of dedicated sanitation blocks in schools, which is a major factor in reducing absenteeism among adolescent girls. Mentorship circles and leadership workshops are also held monthly, pairing students with female professionals."
        ]
      },
      {
        id: "3",
        img: "/src/assets/images/campaign.webp",
        tag: "Agriculture",
        date: "Aug 30, 2023",
        title: "Building Climate-Resilient Farms",
        desc: "Training local farmers in sustainable techniques to ensure long-term food security against changing weather patterns.",
        author: "Marcus Thorne, Sustainable Agriculture Advisor",
        readTime: "5 min read",
        content: [
          "Smallholder farmers are on the front lines of climate change. Unpredictable rainfall patterns, soil degradation, and rising temperatures threaten food security and livelihoods. GSSIFO's Sustainable Agriculture Program is actively training farming collectives in climate-resilient techniques, promoting bio-diverse crop rotation, water conservation, and natural pest control.",
          "We supply participating farmers with drought-tolerant seed varieties, organic compost, and drip-irrigation kits. Through interactive demonstration farms, agricultural specialists teach conservation tillage and agroforestry—planting trees alongside crops to retain soil moisture and prevent erosion. This holistic approach restores soil fertility while dramatically reducing dependency on costly synthetic chemicals."
        ]
      },
      {
        id: "4",
        img: "/src/assets/images/story-disaster-relief.webp",
        tag: "Disaster Relief",
        date: "Aug 12, 2023",
        title: "Rapid Response in the Wake of Tropical Cyclone",
        desc: "Our emergency teams deployed within 24 hours to provide shelter, food, and medical aid to affected regions.",
        author: "Sarah Jenkins, Emergency Response Team Lead",
        readTime: "7 min read",
        content: [
          "When a severe tropical cyclone struck the coastal regions last month, immediate action was critical to prevent secondary health disasters. Within 24 hours of landfall, GSSIFO's Emergency Response Teams were on the ground, coordinating relief efforts with local emergency services and supplying immediate survival packets to affected families.",
          "GSSIFO deployed temporary shelter kits, clean drinking water purification tablets, and mobile emergency medical stations. Over the first week, we distributed over 10,000 food rations and secured temporary housing for displaced individuals. Our medical staff worked around the clock, treating injuries and administering preventative care against potential water-borne disease outbreaks.",
          "As the emergency phase transitions to long-term rehabilitation, GSSIFO remains committed to helping the community rebuild. We are launching a structural support program to reconstruct storm-damaged schools and clinics using wind-resistant designs."
        ]
      },
      {
        id: "5",
        img: "/src/assets/images/volunteer-action.webp",
        tag: "Human Rights",
        date: "Jul 22, 2023",
        title: "Protecting Vulnerable Populations in Conflict Zones",
        desc: "Establishing safe havens and providing legal advocacy for displaced individuals.",
        author: "Jean-Pierre Dupont, Human Rights Advocate",
        readTime: "6 min read",
        content: [
          "In regions torn apart by conflict, the protection of fundamental human rights is of paramount concern. Displaced families, minor children, and marginalized groups are often left without legal representation or secure refuge. GSSIFO has partnered with local legal networks to establish Safe Havens and legal aid centers near transit routes and displacement camps.",
          "Our legal advocates assist displaced persons in recovering identity documents, securing housing rights, and obtaining asylum or legal status. Concurrently, GSSIFO runs trauma-informed counseling centers for children and survivors of gender-based violence, offering a safe environment to heal and access support systems."
        ]
      }
    ]);

    // 4. Seed News
    await db.insert(newsTable).values([
      {
        id: "0",
        title: "GSSIFO announces $50M expansion to clean energy initiatives across Sub-Saharan Africa",
        img: "/src/assets/images/news_1.webp",
        date: "Oct 12, 2024"
      },
      {
        id: "1",
        title: "New partnership with global health organizations to deliver 1M vaccines",
        img: "/src/assets/images/news_2.webp",
        date: "Oct 05, 2024"
      },
      {
        id: "2",
        title: "Annual Sustainability Summit concludes with historic climate pledge from 20 nations",
        img: "/src/assets/images/news_3.webp",
        date: "Sep 28, 2024"
      }
    ]);

    // 5. Seed Events
    await db.insert(eventsTable).values([
      {
        id: "0",
        date: "14",
        month: "AUG",
        title: "GSSIFO Sports Summit (Trichy)",
        loc: "Trichy",
        desc: "Join our flagship sports event featuring competitions, teamwork, leadership, and community participation."
      },
      {
        id: "1",
        date: "10",
        month: "SEP",
        title: "GSSIFO Sports Summit (Coimbatore)",
        loc: "Coimbatore",
        desc: "Participate in our flagship sports summit that brings together youth through sports, fitness, and leadership activities."
      },
      {
        id: "2",
        date: "05",
        month: "OCT",
        title: "GSSIFO Sports Summit (Madurai)",
        loc: "Madurai",
        desc: "Celebrate sportsmanship and community engagement at the GSSIFO Sports Summit in Madurai."
      },
      {
        id: "3",
        date: "31",
        month: "JUL",
        title: "Responsive Youth Program",
        loc: "Youth Development, Reading, Teamwork, Public Hygiene",
        desc: "An interactive youth development program that encourages leadership, teamwork, reading habits, and community service through public hygiene initiatives."
      },
      {
        id: "5",
        date: "30",
        month: "AUG",
        title: "Job Fair",
        loc: "Providing Employment Opportunities",
        desc: "Connect job seekers with employers, explore career opportunities, receive career guidance, and participate in recruitment drives."
      }
    ]);

    // 6. Seed Opportunities
    await db.insert(opportunitiesTable).values([
      {
        id: "0",
        title: "Dental Camp",
        type: "On-site / Community-Based",
        commitment: "Every Weekend",
        desc: "Join our free community dental camps to help promote oral health through checkups, awareness, and basic dental care."
      },
      {
        id: "1",
        title: "Blood Donor Camp",
        type: "On-site / Community-Based",
        commitment: "Every Weekend",
        desc: "Participate in our blood donation camps held every weekend to help save lives and support local hospitals."
      },
      {
        id: "2",
        title: "Local Advocacy Coordinator",
        type: "Remote / Community-Based",
        commitment: "5-10 hours/week",
        desc: "Organize local campaigns, manage regional outreach events, and raise awareness on critical climate and sustainability initiatives."
      },
      {
        id: "3",
        title: "Clean Water Project Assistant",
        type: "On-site (Sub-Saharan Africa / Asia)",
        commitment: "2-4 weeks (Field deployment)",
        desc: "Assist our engineering teams on the ground with mapping water points, conducting local sanitation workshops, and distributing supplies."
      },
      {
        id: "4",
        title: "Crisis Relief Logistics volunteer",
        type: "On-site or Remote Support",
        commitment: "On-call / Emergency-based",
        desc: "Help coordinate supply lines, translate community requests, or support distribution centers in the wake of humanitarian crises."
      },
      {
        id: "5",
        title: "Youth Mentor & Education Helper",
        type: "Hybrid / Remote Sessions",
        commitment: "2-4 hours/week",
        desc: "Provide academic tutoring or career mentorship to young girls enrolled in our global education scholarship programs."
      }
    ]);



    console.log("Seeding complete successfully!");
  } catch (err) {
    console.error("Error during database seeding:", err);
  }
}
