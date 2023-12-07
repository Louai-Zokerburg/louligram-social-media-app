# Louligram Social Media

# **Louligram**

![stylee one.png](https://github.com/Louai-Zokerburg/louligram-social-media-app/blob/main/public/Cover%20Image.png?raw=true)

## **Live Demo**

Check out the live demo [here](https://louligram-social-media-app.vercel.app) 

## **Description**

Louligram is a social media (Instagram Clone)built with React, React Context, React Query, Typescript, Tailwind CSS, and Appwrite for the backend. It features a beautiful UI with light and dark themes, user authentication, post creation, profile viewing, following, liking posts, saving posts, and more.

## **Tech Stack**

- React
- React Context
- React Query
- Typescript
- Tailwind CSS
- Appwrite

## **Features**

- **User Authentication:**
    - Users can sign up or sign in securely using Appwrite for backend authentication.
- **Dynamic Theming:**
    - The app supports both light and dark themes, providing users with a visually appealing experience.
- **Post Interaction:**
    - Users can create, view, like, and save posts. The app utilizes React Query for efficient data fetching and management.
- **User Profiles:**
    - Users can view their own profiles and profiles of others, including their posts and followers.
- **Follow System:**
    - Louligram includes a follow system, allowing users to connect with each other.
- **Fully Responsive:**
    - You can have a high quality user experience either form your phone or desktop.

## **How to Install**

1. **Clone the Repository:**
    
    ```bash
    git clone https://github.com/Louai-Zokerburg/louligram-social-media-app.git
    ```
    
2. **Install Dependencies:**
    
    ```bash
    cd louligram-social-media-app
    npm install
    ```
    
3. **Configure Appwrite:**
    - Sign up or login to your Appwrite console
    - Create a new project and name it what ever you want (Ex. louligram)
    - Create a new Database and name it what ever you want (Ex. `louligram-db`)
    - Start Creating the following collections in `louligram-db`
        - **Saves**
            - add the following attributes
            
            | Propertie | Type |
            | --- | --- |
            | user | Relation with user |
            | post | Relation with post |
        - Posts
            - add the following attributes
            
            | Propertie | Type |
            | --- | --- |
            | creator | Relationship with creator |
            | likes | Relationship with likes |
            | caption | String |
            | tags | String [] |
            | imageUrl | Url |
            | imageId | String |
            | location | String |
            | save | Relationship with save |
            - add the following indexes
            
            | key | Type | arttributes | asc/desc |
            | --- | --- | --- | --- |
            | caption | fulltext | caption | DESC |
        - Users
            - add the following attributes
            
            | Propertie | Type |
            | --- | --- |
            | creator | Relationship with creator |
            | likes | Relationship with likes |
            | caption | String |
            | tags | String [] |
            | imageUrl | Url |
            | imageId | String |
            | location | String |
            | save | Relationship with save |
            - add the following indexes
            
            | key | Type | arttributes | asc/desc |
            | --- | --- | --- | --- |
            | caption | fulltext | caption | DESC |
4. Add `.env.local` Variables
    
    ```
    VITE_APPWRITE_PROJECT_ID=
    VITE_APPWRITE_URL=
    VITE_APPWRITE_DATABASE_ID=
    VITE_APPWRITE_STORAGE_ID=
    VITE_APPWRITE_USER_COLLECTION_ID=
    VITE_APPWRITE_POST_COLLECTION_ID=
    VITE_APPWRITE_SAVES_COLLECTION_ID=
    ```
    
5. **Start the Development Server:**
    
    ```bash
    npm run dev
    ```
    
6. **Visit the App:**
    - Open your browser and navigate to **`[http://localhost:5173](http://localhost:5173)`** to see Louligram in action.

## **Usage**

1. **Sign Up or Sign In:**
    - Create a new account or sign in with your existing credentials.
2. **Explore and Follow:**
    - Explore posts from other users and follow those you find interesting.
3. **Create and Like Posts:**
    - Share your moments by creating posts and interact with others by liking their posts.
4. **View and Save Posts:**
    - View your own and others' profiles, and save posts for future reference.
5. **Enjoy Louligram:**
    - Have fun using Louligram and connecting with other users in this social media experience!