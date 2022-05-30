# Celtics Engine Frontend

## About
This is a full stack project built on AWS Amplify with Angular and TypeScript. It provides a service for Celtics Game Engine users to search, save, and share game model assets.

---

## Problem Statement
- The Users of the the game engine will need a way to share asset models they have created with other users.
- The Asset Management web application should provide the nessesary functionality to allow users to share their assets with other users

## Top Questions to Resolve in Review
- What tools should we use to build the application?
- Does it make more sense to use a single page application or a multi page application?
- Should the asset management system be a single full-stack application or a separate web application?
- How should we structure the application? (Auth, Api, UI, etc...)
- What should the user experience be like?

## Client Use Cases
- Post 3d asset models publicly so that others can use it their own work and/or get inspiration from it.
- Browse the communities models and see what others have created.
- See which assets I've publicly posted or shared with others.
- Have the ability delete my assets from the community search page.
- Have the ability to sort my assets by popularity and other basic search criteria.

## Project Scope
- Create a single page application that allows users to manage and share their own custom asset models with other users publicly.
- Retrieve and display the latest 3d assets from the community.
- Make user profiles for reference and organization of which assets they have uploaded publicly.

## Out of Project Scope
- Storage solution for ALL user asset models, not just the ones they would like to share
- Ability to create or edit an asset model from the browser


# Proposed Architecture Overview

### 1. Users & Authentication [Conginto]
- authentication and user managment will be handled by aws cognito
- login and register with the application
- confirmation email on registration
- change password 

### 2. Single Page Application & UI [Angular] 

- Navigation bar will be explicity linked to the different PageStates of the 
application 

- The PageState will have logic to determine permissions for the user

- Redirect routes will be nessisary to handle some of the navigation
    - Redirect to the home page after login
    - Redirect to asset details page if thumbnail is clicked

- UI pages
    - Login 

    - Profile 
    - Asset Upload 
    - Asset Details
    - Search / Explore    

### 3. Storage [S3]
- Storage access rules:
    - Signed-in users: upload, view, and delete 
    - Signed-out users: view 

- Asset upload to S3 Bucket from user local machine
- Upload forms will be limited to zip files and images exclusivly
- A storage cap will be set for the user to upload

### 4. API [GraphQL]
- Provides main functionality for public searchabe asset models

- Queries will be used to retrieve asset models
- Linked to S3 for identification of the asset model
- Linked to cognito for authentication
- Linked to DynamoDB for data model

### 5. Continues Deployment [AWS]
- Deployment will be handled by AWS Amplify
- Amplify push cmd will be used to deploy the application to either production or development
- Cloudformation will be used to create the necessary resources for the application



# Accomplishment Tracking

### Week 1

**Goals:**
- Setup Data Model

**Activity:**
- Initailize s3 
- Create user file storage bucket and dir structure

**Important Docs, Commits, or Code Reviews**:
- https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-inventory.html

**Things learned:**
- privacy best practices for user file storage and permissions

### Week 2

**Goals:**
- Migrate to Amplify
- Create a user authentication system

**Activity:** 
- Create Amplify app 
- Research different authentication methods
- Create a PageState class to hold user state

**Important Docs, Commits, or Code Reviews**:
- Ensure the PageState changes are setup accordingly to user auth access permissions
- https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js/#re-send-confirmation-code

**Things learned:**
- learn Angularjs and TypeScript
- how to create a user authentication system

### Week 3
  
**Goals:**
- Setup Graphql API
- Setup s3 bucket for user file storage
- Start UI development

**Activity:**
- Create Graphql API
- Start UI development

**Important Docs, Commits, or Code Reviews**:
- https://angular.io/docs

**Things learned:**
- Learn Basic HTML and CSS

### Week 4

**Goals:**
Bugs and Feature cleanup 

**Activity:**
- UI bugs
- Graphql API bugs
- User file storage bugs
- User authentication bugs

**Important Docs, Commits, or Code Reviews**:
- https://angular.io/docs

**Things learned:**
- Common UI bugs and optimizations

