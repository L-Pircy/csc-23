"use client";
import React from "react";
import Link from "next/link";
import NewsletterCard from "../components/NewsletterCard";
import { useState, useEffect } from "react";

const NewsletterPage = () => {
  const [newsletters, setNewsletters] = useState([]);
  useEffect(() => {
    // Fetch the JSON data when the component mounts
    fetchNewsletters();
  }, []);

  const fetchNewsletters = async () => {
    try {
      const response = await fetch("./newsletters.json");
      // console.log(response);
      const data = await response.json();
      // console.log(data);
      setNewsletters(data);
    } catch (error) {
      console.error("Error fetching JSON:", error);
    }
  };
  return (
    <>
      <div id="main" className="text-white">
        <h1>Newsletters</h1>
        <div className="all">
          {newsletters.map((newsletter) => (
            <div key={newsletter.title} className="newsletter-card">
              <NewsletterCard
                title={newsletter.title}
                date={newsletter.date}
                description={newsletter.description}
                nlink={newsletter.link}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsletterPage;
