import { db } from "./index";
import { blogPosts } from "./schema";

const seedPosts = [
  {
    title: "Time to Finality: Best Metric For Blockchain Speed",
    slug: "time-to-finality-blockchain-speed",
    content: `# Time to Finality: Best Metric For Blockchain Speed

An introduction to the concept of Time to Finality (TTF) and why it's a better metric for blockchain speed than transaction per second.

Time to Finality (TTF) represents the duration required for a transaction to become irreversible on the blockchain. Unlike TPS which only measures raw processing speed, TTF provides a more accurate representation of when a transaction can be safely relied upon.

## Why TTF Matters

1. Security Guarantees
2. Real-world Applications
3. Network Efficiency

Read the full article on [Avalanche Network's blog](https://www.avax.network/blog/time-to-finality-ttf-the-ultimate-metric-for-blockchain-speed).`,
    excerpt: "An introduction to the concept of Time to Finality (TTF) and why it's a better metric for blockchain speed than transaction per second.",
    publishedAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    title: "Avalanche Subnets, Polygon Supernets, & Cosmos App Chains: Research Report",
    slug: "blockchain-scaling-solutions-comparison",
    content: `# Avalanche Subnets, Polygon Supernets, & Cosmos App Chains: Research Report

A comprehensive research report comparing different blockchain scaling solutions. This analysis covers consensus mechanisms, security models, economic considerations, and practical implications for developers and enterprises.

## Key Comparisons

1. Consensus Mechanisms
2. Security Models
3. Economic Considerations
4. Developer Experience

Read the full report on [Medium](https://medium.com/@avaxdevelopers/avalanche-subnets-polygon-supernets-cosmos-app-chains-research-report-35b0a6cb830f).`,
    excerpt: "A research report on Avalanche Subnets, Polygon Supernets, and Cosmos App Chains. Delving into the technical details of each, spanning consensus mechanisms, security, costs and more.",
    publishedAt: new Date("2023-07-31"),
    updatedAt: new Date("2023-07-31"),
  },
  {
    title: "Deploying a Distributed EVM Layer 1 Blockchain using Avalanche, Docker, and GitHub Codespaces",
    slug: "deploying-evm-layer1-blockchain",
    content: `# Deploying a Distributed EVM Layer 1 Blockchain

A comprehensive guide to deploying your own EVM-compatible Layer 1 blockchain using Avalanche's technology stack, Docker containers, and GitHub Codespaces.

## Step-by-Step Guide

1. Setting up the Environment
2. Configuring the Network
3. Deploying Nodes
4. Testing and Verification

Read the full guide on [Dev.to](https://dev.to/usmanasim/deploying-a-distributed-evm-layer-1-blockchain-using-avalanche-docker-and-github-codespaces-5eo6).`,
    excerpt: "A step by step guide to deploying a distributed EVM Layer 1 blockchain using Avalanche, Docker, and GitHub Codespaces.",
    publishedAt: new Date("2023-11-02"),
    updatedAt: new Date("2023-11-02"),
  },
];

async function seed() {
  console.log('🌱 Seeding database...');
  
  try {
    // Clear existing data
    await db.delete(blogPosts);
    console.log('Cleared existing blog posts');

    // Insert new data
    for (const post of seedPosts) {
      await db.insert(blogPosts).values(post);
    }
    
    console.log('✅ Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();
