<script setup>
import { reactive } from "vue";

const contentItems = reactive([
  {
    id: 1,
    type: "video",
    title: "Agentic AI: What It Can Do Today",
    category: "AI Trends",
    date: "May 15, 2025",
    description: "See how AI-powered customer service agents automate support, handle complex queries, and reduce response times by 70% in large-scale deployments..",
    author: "TED-Ed",
    thumbnail: new URL("@/assets/img/blog/thumbnails/ai-agentic.jpg", import.meta.url).href,
    url: "https://www.youtube.com/watch?v=RzkD_rTEBYs",
    meta: {
      duration: "5:55",
      platform: "YouTube"
    },
    tags: ["Autonomous Agents", "Enterprise AI"]
  },
  {
    id: 2,
    type: "blog",
    title: "Multimodal AI: The Future of Human-AI Interaction",
    category: "AI & ML",
    date: "May 08, 2025",
    description: "Learn how models that understand text, images, video, and sound are redefining applications from search to customer service.",
    author: "XpertLab",
    thumbnail: new URL("@/assets/img/blog/ai.jpg", import.meta.url).href,
    url: "https://xpertlab.com/multimodal-ai-the-future-of-human-like-understanding/",
    meta: {
      readTime: "6 min read"
    },
    tags: ["Multimodal AI", "Generative Models"]
  },
  {
    id: 3,
    type: "video",
    title: "How AI Is Powering the Green Transition",
    category: "AI & Sustainability",
    date: "May 13, 2025",
    description: "Discover how AI is helping optimize energy grids, reduce waste, and support climate research.",
    author: "Microsoft",
    thumbnail: new URL("@/assets/img/blog/thumbnails/ai-green.jpg", import.meta.url).href,
    url: "https://www.youtube.com/watch?v=XopvSz4GpEc",
    meta: {
      duration: "1:48",
      platform: "YouTube"
    },
    tags: ["Climate Tech", "Sustainable AI"]
  },
  {
    id: 4,
    type: "blog",
    title: "What is DevOps?",
    category: "DevOps",
    date: "May 06, 2025",
    description: "DevOps accelerates development cycles, ensures stability, and fosters a culture of collaboration.",
    author: "GitLab",
    thumbnail: new URL("@/assets/img/blog/devops.jpg", import.meta.url).href,
    url: "https://about.gitlab.com/topics/devops/",
    meta: {
      readTime: "5 min read"
    },
    tags: ["CI/CD", "Automation"]
  },
  {
    id: 5,
    type: "video",
    title: "What is Cloud Computing?",
    category: "Cloud",
    date: "May 11, 2025",
    description: "Simple analogy comparing AWS, Azure and GCP to everyday services.",
    author: "Code Bagel",
    thumbnail: new URL("@/assets/img/blog/thumbnails/ai-cloud.jpg", import.meta.url).href,
    url: "https://www.youtube.com/watch?v=N0SYCyS2xZA",
    meta: {
      duration: "2:41",
      platform: "YouTube Shorts"
    },
    tags: ["Beginner Friendly", "Analogies"]
  },
  {
    id: 6,
    type: "blog",
    title: "IT Compliance",
    category: "Compliance",
    date: "Apr 30, 2025",
    description: "From HIPAA to GDPR, IT teams must understand compliance to avoid costly penalties and breaches.",
    author: "Proofpoint",
    thumbnail: new URL("@/assets/img/blog/compliance.jpg", import.meta.url).href,
    url: "https://www.proofpoint.com/us/threat-reference/it-compliance",
    meta: {
      readTime: "8 min read"
    },
    tags: ["Regulations", "Checklist"]
  },
  {
    id: 7,
    type: "video",
    title: "Cybersecurity Awareness: Protecting Your Digital Life",
    category: "Cybersecurity",
    date: "May 07, 2025",
    description: "Essential security practices everyone should know in today's digital world.",
    author: "Security First",
    thumbnail: new URL("@/assets/img/blog/thumbnails/industrial-metaverse.jpg", import.meta.url).href,
    url: "https://www.youtube.com/watch?v=HxySrSbSY7o",
    meta: {
      duration: "3:45",
      platform: "YouTube"
    },
    tags: ["Security Basics", "Best Practices"]
  },
  {
    id: 8,
    type: "blog",
    title: "Cloud Computing Future Trends & Predictions",
    category: "Cloud",
    date: "May 03, 2025",
    description: "Explore how edge computing, serverless, and hybrid clouds are shaping the future of IT infrastructure.",
    author: "Tata Communications",
    thumbnail: new URL("@/assets/img/blog/cloud.jpg", import.meta.url).href,
    url: "https://www.tatacommunications.com/knowledge-base/cloud-computing-future-trends-predictions/",
    meta: {
      readTime: "6 min read"
    },
    tags: ["Trends", "Predictions"]
  },
  {
  id: 9,
  type: "video",
  title: "Why You Can’t Ignore Tech in 2025",
  category: "Tech Awareness",
  date: "May 14, 2025",
  description: "From AI to cybersecurity, discover why staying up-to-date with the latest tech trends is essential for both professionals and everyday users.",
  author: "Ingram Micro Asia Pte Ltd",
  thumbnail: new URL("@/assets/img/blog/thumbnails/ai-awareness.jpg", import.meta.url).href,
  url: "https://www.youtube.com/watch?v=CMS728YNHmo",  
  meta: {
    duration: "1:54",
    platform: "YouTube"
  },
  tags: ["Digital Literacy", "Career Impact", "Future Readiness"]
}
]);
</script>


<template>
  <section class="content-area py-5">
    <div class="container">
      <h2 class="text-center fw-bold mb-5 text-dark">Our Blog</h2>
      <div class="row">
        <div
          v-for="item in contentItems"
          :key="item.id"
          class="col-lg-6 col-xl-4 mb-4 d-flex"
        >
          <a
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="card-link-wrapper w-100 text-decoration-none text-dark"
          >
            <div class="card shadow-sm rounded-4 w-100 h-100 overflow-hidden">
              <img 
                :src="item.thumbnail" 
                :alt="item.title" 
                class="card-img-top"
                :class="{ 'video-thumbnail': item.type === 'video' }"
              >

```
          <div class="card-body d-flex flex-column justify-content-between">
            <div class="d-flex mb-2 text-muted small">
              <div class="me-3 d-flex align-items-center">
                <i class="fa fa-calendar me-1"></i> {{ item.date }}
              </div>
              <div class="d-flex align-items-center">
                <i class="fa fa-tag me-1"></i> {{ item.category }}
              </div>
            </div>

            <h5 class="card-title fw-semibold">{{ item.title }}</h5>
            <p class="card-text text-muted small">{{ item.description }}</p>

            <div class="content-meta mt-3 border-top pt-3">
              <div v-if="item.type === 'video'" class="d-flex align-items-center">
                <i class="fas fa-play-circle me-2 text-danger"></i>
                <span class="me-3">{{ item.meta.duration }}</span>
                <span>{{ item.meta.platform }}</span>
              </div>
              <div v-else class="d-flex align-items-center">
                <i class="fas fa-book-open me-2 text-primary"></i>
                <span>{{ item.meta.readTime }}</span>
              </div>
              
              <div class="author-info mt-2">
                <span class="fw-bold">@{{ item.author }}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
```

  </section>
</template>

<style scoped>
/* Your existing styles remain unchanged */
.content-area {
  background-color: #fff;
}

.card-title {
  font-size: 1.1rem;
  line-height: 1.4;
}

.card-img-top {
  object-fit: cover;
  height: 220px;
}

.video-thumbnail {
  position: relative;
}

.video-thumbnail::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 0, 0, 0.7);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s;
}

.video-thumbnail::before {
  content: "▶";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s;
}

.card:hover .video-thumbnail::after,
.card:hover .video-thumbnail::before {
  opacity: 1;
}

.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.1);
}

.content-meta {
  font-size: 0.85rem;
}

.author-info {
  font-size: 0.9rem;
}
</style>
