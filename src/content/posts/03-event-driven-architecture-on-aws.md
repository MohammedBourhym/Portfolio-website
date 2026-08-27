---
title: "Event-Driven Architecture on AWS: Everything Reacts, Nothing Waits"
publishedAt: 2026-08-27
description: "I recently spoke at BlablaConf 6.0 Day 4 (Cloud, Containers & Infrastructure) about Event-Driven Architecture on AWS. In this post, I recap the talk: core concepts, AWS building blocks, and a real-world Taco Bell case study."
slug: "event-driven-architecture-on-aws"
isPublish: true
isDraft: false
---

A few months ago, I had the opportunity to speak at [BlablaConf 6.0](https://www.blablaconf.com/) — Day 4: Cloud, Containers & Infrastructure 🇲🇦, the annual conference organized by the [GeeksBlabla](https://geeksblabla.community/) community, where talks are given in Moroccan Darija.

I gave a talk about **Event-Driven Architecture (EDA) on AWS**, under the motto: **"Everything reacts, nothing waits."**

> 🎥 **Want to watch the full episode?** It's available on YouTube (in Darija):
> [BlablaConf 6.0 Day 4 - Cloud, Containers & Infrastructure](https://www.youtube.com/watch?v=nOsLviQcAXs)

Here's a written recap of what I covered.

## What is Event-Driven Architecture?

Event-Driven Architecture is an architectural pattern based on **asynchronous communication between services through events**, instead of direct API calls.

With this approach, our services remain:

- **Independent** and **loosely coupled**
- **Extensible** — new services can join without touching existing code
- **Scalable** — each component scales on its own

In short: *everything reacts to events, and nothing waits*. There are no services blocking each other waiting for responses, like we're used to with REST APIs. This is exactly why EDA is such a great fit for cloud-based systems.

## The Building Blocks of EDA

The whole architecture revolves around **events** — a signal that something happened in the application, like a user interaction or a state change (for example, the creation of a new user).

The architecture is made of three main components:

1. **Event Producer (Publisher)** — any interface or service whose role is to create events and send them to the event broker.
2. **Event Broker** — the central piece that connects producers and consumers. It receives incoming events, **filters** them, and **routes** them to the right consumers.
3. **Event Consumers** — services that listen for events from the broker and run their own logic (for example, a notification service sending an email with the user's credentials).

```
┌──────────┐     events     ┌───────────────┐     events     ┌────────────┐
│ Producer │ ─────────────► │  Event Broker │ ─────────────► │  Consumer  │
└──────────┘                └───────────────┘                └────────────┘
     │                            │    │                           │
     │                            ▼    ▼                           │
     │                       (filter & route)                      │
     │                                                             │
     └─── more producers ──────────────────────── more consumers ──┘
```

### Why is this so powerful?

- **If a producer goes down**, consumers keep working normally — they simply consume the events still sitting in the broker.
- **If a consumer goes down**, producers keep working normally and keep sending events to the broker.

This also makes **integrating new services trivial**: any new service just follows the events it needs from the event broker, without us having to modify the existing code. The result is an architecture that is **extensible and well-decoupled** compared to classic API calls — which is why EDA fits cloud environments like AWS so well, since many AWS services are designed to natively support event-driven communication.

## EDA on AWS

Let's map these concepts to actual AWS services:

| EDA Role | AWS Service | Notes |
| :--- | :--- | :--- |
| Producers | **S3, DynamoDB, API Gateway, Lambda** | Emit events when something happens: file upload, database update, API request... |
| Event Broker | **Amazon EventBridge** | Receives events and routes them based on filters, rules, and event schemas |
| Event Broker (queueing) | **Amazon SQS** | When events need to be queued and processed by many services |
| Event Broker (broadcast) | **Amazon SNS** | When an event must be broadcast to many consumers at once (email, SMS, analytics...) |
| Consumers | **AWS Lambda, Step Functions** | React to events with business logic and scale automatically with the number of events |

## Use Cases

EDA shines in many scenarios:

- **IT automation**
- **Microservices communication**
- **External SaaS integration**

To understand this better, let's look at a real-world example: **Taco Bell**, which needed to integrate food delivery applications with its point-of-sale systems using event-driven architecture.

### The Taco Bell Flow

1. A customer places a Taco Bell order on a delivery app like **Glovo** (an external SaaS).
2. Glovo validates the order and sends it to **Taco Bell's APIs**.
3. **API Gateway** receives the order API request and **transforms it into an event**.
4. **EventBridge** picks up these events and **routes them to the business workflow**.
5. **AWS Lambda** functions process the orders and apply the business logic.
6. Finally, the orders arrive, ready, at Taco Bell's **point-of-sale systems**.

```
Glovo (SaaS) ──► Taco Bell APIs ──► API Gateway ──► EventBridge ──► Lambdas ──► POS
   order           validation         event            routing       process     system
```

## Wrapping Up

Event-Driven Architecture brings **decoupling, resilience, and scalability** to distributed systems — and AWS gives you all the building blocks (EventBridge, SQS, SNS, Lambda, Step Functions) to build it natively.

If you want to dive deeper, check out the resources below:

- 🎥 [BlablaConf 6.0 Day 4 - Cloud, Containers & Infrastructure (my talk, in Darija)](https://youtu.be/nOsLviQcAXs?t=9149)
- 🌐 [BlaBlaConf](https://www.blablaconf.com/) — the annual conference by the GeeksBlabla community
- 📚 [AWS - Event-Driven Architecture](https://aws.amazon.com/event-driven-architecture/)

Thanks to the GeeksBlabla team for organizing BlablaConf, and to everyone who watched the episode. Thalaaaaaaw! 🙌
