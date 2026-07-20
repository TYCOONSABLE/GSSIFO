import { useEffect } from "react";
import { Link } from "wouter";
import { Heart, BookOpen, Utensils, Sprout, Award, Droplets, Shield, AlertCircle } from "lucide-react";

export default function WhatWeDo() {
  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = decodeURIComponent(hash.replace("#", ""));
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    };

    handleScroll();
    window.addEventListener("hashchange", handleScroll);
    window.addEventListener("locationchange", handleScroll);
    return () => {
      window.removeEventListener("hashchange", handleScroll);
      window.removeEventListener("locationchange", handleScroll);
    };
  }, []);

  const pillars = [
    {
      id: "community-health",
      icon: Heart,
      title: "Community Health",
      desc: "Improving community health through accessible healthcare services, preventive awareness, and humanitarian support. We strive to build healthier communities by promoting wellness, early care, and compassionate service.",
      items: [
        "Blood Donation Drives",
        "Free Dental Care Camps",
        "Health Awareness & Food Distribution"
      ]
    },
    {
      id: "youth-education",
      icon: BookOpen,
      title: "Youth Education",
      desc: "Empowering students with knowledge, digital skills, and strong values to become responsible, confident, and future-ready citizens. Our programs encourage learning, leadership, and social responsibility.",
      items: [
        "AI & Digital Literacy Awareness",
        "Child Rights & Basic Legal Education",
        "Youth Leadership & Life Skills"
      ]
    },
    {
      id: "nutrition",
      icon: Utensils,
      title: "Nutrition",
      desc: "Promoting healthier communities by improving access to nutritious food and encouraging balanced dietary habits. We support individuals and families through food assistance and nutrition education.",
      items: [
        "Community Food Distribution",
        "Nutrition Awareness Programs",
        "Support for Vulnerable Families"
      ]
    },
    {
      id: "climate-action",
      icon: Sprout,
      title: "Climate Action",
      desc: "Protecting the environment through sustainable practices, community engagement, and environmental education. Together, we work toward creating cleaner, greener, and more resilient communities.",
      items: [
        "Tree Plantation Drives",
        "Environmental Awareness Campaigns",
        "Green Community Initiatives"
      ]
    },
    {
      id: "women-empowerment",
      icon: Award,
      title: "Women empowerment",
      desc: "Empowering women through financial inclusion, entrepreneurship, and leadership opportunities. We help women build confidence, develop skills, and achieve economic independence.",
      items: [
        "Microfinance Support",
        "Women Entrepreneurship Programs",
        "Financial Literacy Workshops"
      ]
    },
    {
      id: "water-conservation",
      icon: Droplets,
      title: "Water Conservation",
      desc: "Promoting responsible water management and environmental stewardship through conservation initiatives and public awareness. Our efforts help protect water resources for future generations.",
      items: [
        "Pond & Lake Cleaning Drives",
        "Water Conservation Awareness",
        "Community Cleanliness Campaigns"
      ]
    },
    {
      id: "human-rights",
      icon: Shield,
      title: "Human Rights",
      desc: "Promoting equality, dignity, and social justice by educating communities about their rights, responsibilities, and the importance of respectful, inclusive societies.",
      items: [
        "Child Rights Awareness",
        "Human Rights Education",
        "Civic Responsibility Programs"
      ]
    },
    {
      id: "drug-awareness",
      icon: AlertCircle,
      title: "Drug Awareness",
      desc: "Promoting a healthy, substance-free lifestyle by educating the community on the dangers of drug addiction and providing support networks for those affected.",
      items: [
        "Youngsters: Educational workshops focusing on peer pressure, psychological resilience, and building a productive, drug-free career path.",
        "Family Man: Guidance on identifying early signs of substance use, fostering open family communication, and accessing counseling support.",
        "Children: Informative and age-appropriate awareness programs emphasizing healthy choices, positive habits, and self-protection."
      ]
    }
  ];

  return (
    <div className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">What We Do</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our interventions are structured around 8 core pillars, addressing the root causes of regional vulnerability and promoting sustainable development.
          </p>
        </div>

        <div className="space-y-24">
          {pillars.map((pillar) => (
            <div key={pillar.id} id={pillar.id} className="scroll-mt-[100px] bg-white rounded-sm p-8 md:p-12 shadow-sm border flex flex-col md:flex-row gap-8 items-start">
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <pillar.icon className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">{pillar.title}</h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  {pillar.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-sm sm:text-base text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
