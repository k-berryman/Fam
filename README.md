# Fam App

[Check out the live website here](https://final-rho-five.vercel.app/) https://final-rho-five.vercel.app/ 

I'm starting off with learning how to make an [Instagram Clone from Sonny Sangha](https://www.youtube.com/watch?v=a6Xs2Ir40OI&t=257s&ab_channel=SonnySangha) using React, Next.js, Tailwind CSS, Firebase v9, NextAuth, Faker.js & Recoil.

## Set Up

#### Install Tailwind CSS with Next.js
In `Desktop/fam`, `npx create-next-app -e with-tailwindcss fam` then `cd fam` & open it up in the code editor of your choice :-)

---

#### Notes
Next.js is a React framework, which allows us to do server-side rendering. It also provides a built-in router based on the `pages/` folder structure. It's very clean! You could make a `pages/contact.js` file & that would correlate to the `/contact` url path.

Notice the `Head` component imported into `index.tsx` from Next.js. This is like HTML Header data. Change the `title` to change the page label. We can put dynamic data in there (such as state)!

Tailwind is Mobile-First. Adjust styles as screen grows with breakpoints (`md:` or `lg:`)

Faker.js outputs some fake sample user data.

Add comments in `index.tsx` with `{/* Header */}`

React delivers the whole bundle to the client
Next.js splits up the logic/pages that need to be delivered, which involves a middle server. Our middleware will compress the images into a format called webp images, which is a lot smaller, yet retain quality. Meaning, our images load much faster! With this, we need to allow which domain is allowed to provide an image, so not everyone can edit it. See our Header notes section on how to implement this. When changing our `next.config.js`, we need to restart our server.

---

#### Running it
I've got a `package.json` file, so I'll run `npm run dev` & then I'll pull up `http://localhost:3000/`

**Set up `pages/index.tsx`**
Delete unnecessary content & add an h1 to test it

## Header

#### Building the Header
Make a folder called `components` (same level as pages)
In that, create `Header.js` & create a functional component
Go back to `pages/index.tsx` and `import Header from "../components/Header";` & `<Header />`

---

#### Build the left section of the Header
Adding the Logo
Instead of using an image tag, we'll use Next.js's `<Image />` component. Import by `import Image from "next/image";`

We need to create a Next Config
On the main level, create `next.config.js` if it doesn't exist already. Add the following to allow us to import images from the websites defined below.
```
module.exports = {
  images: {
    domains: ['links.papareact.com],
  }
}
```

Since we changed our `next.config.js`, we need to restart our server.

Make the parent div relative, so children are affected
Add `objectFit` to `<Image />` to keep the dimension ratio the same, so it doesn't stretch.

On the bigger screens, it's the full app name.
On the smaller screens, it's an icon.

Remember, Tailwind is Mobile-First.
Add `hidden` to Image class because the full app name should be hidden on a mobile view. Add `lg:inline-grid` to make it appear on large screens.

Let's make another div for the icon
Just flip the  hidden classNames
Add `cursor-pointer`

----

#### Build the middle section of the Header
I'm not adding a search bar, but there's some other important info from this section. We're using hero icons! Go to `heroicons.com` and then we'll install it with `npm install @heroicons/react`. Notice there's either outlines or solid icons.

In `Header.js`,
```
import {
  PlusCircleIcon,
  HeartIcon
} from "@heroicons/react/outline";
```

Hero Icons are made by the Tailwind team, meaning we can use Tailwind classes to style them

We're getting to the point where we need to override some of the elements, so we'll do `npm install @tailwindcss/forms` and go to `tailwind.config.js` and under plugins, add `@tailwindcss/forms`
```
plugins: [require("@tailwindcss/forms")],
```
(idk if this step is necessary with skipping the search bar, but it may come up in the future of this build)

---

#### Build the right section of the Header
The Icons in a flexbox div
`<HomeIcon className="h-10 w-10"/>`
className `flex` to add flexbox, `items-center` to center vertically in div, `justify-end` pushes it the right side, `space-x-4` spaces the children.

Center everything - go to the outer div and add `mx-5` to add a margin on x of 5. Add `lg:mx-auto`

---

In mobile view, we want a hamburger menu icon because it's squished

Repeated code... Let's create our own custom class in Tailwind

**Creating a custom class in Tailwind**
In `styles/globals.css`,
Inject a custom utility class into the component layer

```
@layer components {
  .navBtn {
    @apply hidden h-6 md:inline-flex cursor-pointer
    hover:scale-125 transition-all duration-150 ease-out
  }
}
```

Back in `Header.js`, now we can just use this just like a Tailwind class and add `navBtn`

---

Sonny added a profile pic of the person in the header with an img tag, but I'm not gonna do that.

---

#### Implementing Sticky Header

Go to the outer-most div
z-50 adds an additional "layer" to the page
`<div className="shadow-sm border-b bg-white sticky top-0 z-50">`


## Activity Feed

### Stories

#### Starting the Feed
In `components/` create `Activity.js` and make it a functional component
In `pages/index.tsx`, `import Activity from "../components/Activity";` and `<Activity />`

We'll create a Stories component

He used CSS Grid, but we don't need to

#### Implementing Faker.js
Populate a list of fake users

`npm install faker`

In `Stories.js`, `import faker from "faker";`

Add an `useEffect` to execute once when the component loads. Get the faker data in this. Save the data in state. Use `useState([])` so initial value is an empty arr

We'll pass props from `Stories` to `Story`

Faker photos is broken - there's a huge conspiracy lol - I'm going to use my own photo for all the broken photo links

#### Finishing up Stories and Story Components
`p-[1.5px]` In a Tailwind class allows for exact values
`object-contain` keeps the correct ratio
`truncate` to add ...
Add hover effect

#### Add scroll bar styling

`npm install --save-dev tailwind-scrollbar`
In `tailwind.config.js`, update plugins
```
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
```

`npm install tailwind-scrollbar-hide`
Add to plug-ins

### Posts
Create Posts component
Create Post component
Pass down props from Posts to Post

`flex-1` takes up as much room as it can

We're gonna make another custom utility class called btn.
In `globals.css`
```
  .btn {
    @apply h-7 hover:scale-125 cursor-pointer
    transition-all duration-150 ease-out
  }
```

### MiniProfile Component
Skipping this part

### Suggestions Component
Skipping this part

### NextAuth.js
User Authentication
We're going to make our own custom sign in page
SignIn with Google
v4.0

`npm i nextauth@beta`
In `package.json`, get rid of carrot

`pages/api` has to do with the middleware
Go to localhost:3000/api/hello and we get a response

An API comes out of the box with Next.js
In `pages/api`, create a folder called `auth`
In `auth`, create `[...nextauth].js`
and start with
```
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ]
})
```

Remember to use environment variables!! Do not commit sensitive info to repo

Now we need our Google credentials from Firebase
Click go to console, start new project, enter name as "FamWebapp", disable analytics, go to project settings, Under "your apps" click web icon, name app "Fam", don't select hosting, register app, copy the given code, continue to console

In main dir, create `firebase.js` and paste in the code

Install firebase
`npm i firebase`

Firebasev9 has modularized, so just import what you need

also import `getApps` and `getApp` due to Next's SSR
Sometimes there's accidentally 2 instances of the same firebase -- we want to make sure there's only one using the singleton pattern. Therefore, change the following
```
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBmuSXw3xDpyLcLbJXlbo4tDIgsR9Fz2U",
  authDomain: "famwebapp-abe61.firebaseapp.com",
  projectId: "famwebapp-abe61",
  storageBucket: "famwebapp-abe61.appspot.com",
  messagingSenderId: "60373682709",
  appId: "1:60373682709:web:671df64fe9e798b1e9dc1c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
```

Add in
```
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
```

and
```
// Prepare Database
const db = getFirestore();

// Get Storage
const storage = getStorage();

export { app, db, storage };
```

---

In Firebase, click on Authentication tab, click get started, Click "Google" as our log-in provider, click enable, save, go back into it, click Web SDK Configuration, copy `Web client ID` and `Web client secret` -- KEEP THESE SECRET

In main dir, create `.env`
```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=http://localhost:3000
```

Enter secrets in there, no quotes

Next doesn't make any of our env vars public unless we write NEXT_PUBLIC_envname. It's protected against being seen on the server.

Restart our server due to changing env vars

#### Implementing a custom sign in page
Add the following after providers in `[...nextauth].js` would add in a default log in page, but we're going to make a custom log in page
```
theme: {
    logo: "https://links.papareact.com/sq0",
    brandColor: "#F13287",
    colorScheme: "auto"
}
```

Add the following instead
```
pages: {
    signIn: "auth/signin",
}
```

Click `pages/` and at the `index.js` level, create a new folder called `auth`. In that, create `signin.js` and make a functional component. Keep file name as lower case, but the component can be camel cased.

Go to `http://localhost:3000/auth/signin` and it displays the h1 we added. It's a very simple sign in page.

Before the page is rendered (on server, SSR), prep page in a certain way. SSR is per request. Go into `pages/auth/signin.js` and add this specific function
```
// Middleware -- on server -- SSR
export async function getServerSideProps() {
  // Gets providers from pages/api/auth/[...nextauth].js
  const providers = await getProviders();

  // Pass it to the client
  return {
    props: {
      providers
    }
  }
}
```

Make sure to include `import { getProviders, signIn as SignIntoProvider } from "next-auth/react";`

**This passes data from `[...nextauth].js` to `getServerSideProps()` middleware function in `signin.js` to the `signIn` component in `signin.js` for the browser**

Put the following inside the signIn component return statement
```
<>
    {Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button onClick={() => SignIntoProvider(provider.id)}>
          Sign in with {provider.name}
        </button>
      </div>
    ))}
    </>
```

We need to authorize the url
Click Request details to see redirect_uri that needs to be authorized on Google's side. Go to cloud.google.com, click console, make sure FamWebapp is opened, click API & Services -> Credentials, Look under `OAuth 2.0 Client IDs`, click edit oauth client, under "Authorized JavaScript origins" add localhost:3000, under `Authorized redirect URIs` enter in that original request details redirect_uri code we saw

**Google Auth uses OAuth 2.0**

Now logging in works!!!!

#### Now we need to tap into the session we're logged into

---

Go to `_app.js` and wrap our entire app in a session provider
Keep our session state throughout pages
```
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
```

---

Let's try to tap into our user's info
Go to `Story.js` and pull that session info
`import { useSession } from "next-auth/react"`
`const { data: session } = useSession();`
`src={session?.user?.image}`

----

In Header,
Only show the icons if there's a session (they're logged in)

Now, logging in and logging out works!!
Just click the gear

---

Go back to `signin.js`
Add Header
Style button

Now it's styled

However, we need to return back to the home screen after sign in. right now it's just putting us back on the login screen. Go to `signin.js` and pass in an object after provider.id
`onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/'})}`

It works!

---

We only got back some info from Google -- we're going to upgrade the callback when we sign in to add to the user's object

Go to `[...nextauth].js`
Add to callbacks. Modify the session callback which creates the session after sign in. Now we can attach things to the session.
```
callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase();

      // token.sub is Google's user ID
      session.user.uid = token.sub;

      return session;
    }
```

Conditionally render based on log in status
Go to `Activity.js`
`import { useSession } from "next-auth/react";` and `const { data: session } = useSession();`
```
function Activity() {
  const { data: session } = useSession();

  return (
    <div>
      {session && (
        <div className="grid grid-cols-1 md:max-w-3xl xl:max-w-6xl mx-auto">
          {/* Stories */}
          <Stories />

          {/* Posts & Comments */}
          <Posts />
        </div>
      )}

      {!session && (
        <div className="text-9xl">
          <h1>LOG IN, PLEASE</h1>
        </div>
      )}
    </div>
  )
}
```

----

### Routing
Go to Header
Use built in Next.js router
`import { useRouter } from "next/router"`
`const router = useRouter();`

Hook up buttons!

`div onClick={() => router.push('/')`
push new page onto the stack

---

### Recoil
We need a global state/store
Plus icon will trigger global store variable to true to show modal

Redux vs. Recoil
Recoil is light weight

`npx install recoil`

Initialize it by wrapping our whole app with it. Go to `_app.js`
`import { RecoilRoot } from 'recoil'`
```
return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  )
```

### Modal
We need to create an Atom (like a redux slice)
Like a user atom to modularize

In main dir, create folder `atoms`. In that, create `modalAtom.js`. Add in
```
import { atom } from "recoil";

export const modalState = atom({
  key: 'modalState',
  default: false
});

```

Go to Header
```
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"
```
and
`const [open, setOpen] = useRecoilState(modalState);`

All done -- we can access this value anywhere
(If we wanted a read only version `const open = useRecoilValue(modalState)`

Make plus icon trigger `onClick={() => setOpen(true)}`

inside `index.js`, we'll have a modal component which taps into that global store

Create Modal Component
```
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      <h1>IMMMM A MODALLLLLL</h1>

      {open && (
        <p>modal is open</p>
      )}
    </div>
  )
}

export default Modal

```


### Headless UI

Modal based on Tailwind UI  Template

^^ accessible components
`npm i @headlessui/react`

---

File Picker Reference is at
```
<input
  // ref={filePickerRef}
  type="file"
  hidden
  // onChange={addImageToPost}
/>
```
In Modal.js

Create `filePickerRef`
`const filePickerRef = useRef(null);`


`const [selectedFile, setSelectedFile] = useState(null);`


`onClick={() => filePickerRef.current.click()}` when clicking the camera, execute a fake click on hidden input field

`onChange={addImageToPost}` signals when a file is selected

Now, we can select an image, but nothing happens

--

Add the following
```
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if(e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };
```

Now it uploads and displays it on the screen
On click of the photo, set current selected photo to null

---


Now we need a way to get the values from the caption
`const captionRef = useRef(null);`
`ref={captionRef}`

We have all the info uploaded in the browser

## Upload Post Function & Post to Firebase

Still in `Modal.js`
Create loading state and uploadPost function

Introducing Firebase v9

Go to Firebase, Firestore db, Create a db, start in test mode, enable
Go to Storage, go to rules, `allow read, write: if true;`
Back to Firestore,

The `uploadPost` function needs to do the following
```
// 1 - Create a post and add to Firestore 'Posts' collection
// 2 - Get post ID from the new post
// 3 - Upload image to firebase storage with post ID
// 4 - Get a download URL from firebase storage and update original post with image
```

**`addDoc` function from Firebase allows us to add a document to a collection. pass in the collection.

```
// Upload to Firebase
  const uploadPost = async () => {
    if(loading) return;

    setLoading(true);

    // 1 - Create a post and add to Firestore 'Posts' collection
    // 2 - Get post ID from the new post
    // 3 - Upload image to firebase storage with post ID
    // 4 - Get a download URL from firebase storage and update original post with image

    // access the posts collection and add a document to the db
    const docRef = await addDoc(collection(db, 'posts'), {
      // the data that we're going to add as we push
      username: session.user.username,
      caption: captionRef.current.value,
      profileImg: session.user.image,
      timestamp: serverTimestamp()
    });

    console.log("New doc added with ID ", docRef.id)


    // Create a reference to firebase storage
    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    // Upload file to firebase storage
    await uploadString(imageRef, selectedFile, "data_url").then(async snapshot => {
      // Get the download url so we can attach that image to the original post
      const downloadURL = await getDownloadURL(imageRef);

      // Now we need to update our original post with that URL
      // Inside posts, which ID are we updating?
      // Update Firestore entry with the new image data (aka the download URL)
      await updateDoc(doc(db, 'posts', docRef.id), {
        image: downloadURL
      })
    });

    setOpen(false);
    setLoading(false);
    setSelectedFile(null);
  }
```

Attach this function to the button

--

Testing

- Upload photo and comment, enter
- Upload to Firestore collection, then uploads the image to firebase storage, then it comes back to the collection and updates the document that was just added so that the image references the firebase storage url
- IT HAS THE FIREBASE STORAGE URL WOOOOHOOO

### Now we need to pull this down into the frontend
Go to `Posts.js`
Instead of hard-coded posts, we're going to download from firebase in realtime baby

Now we're doing the full process of uploading a picture via UI

---

### Add Comments
Go to Post.js

Add comments state and a sendComments function

`npm i react-moment` -- a library for parsing timestamps
___ Minutes ago

### Add Likes

Similar to comments -- a collection within the post
In likes, IDs are user IDs - one like per user.
Attach to heart icon

Now create a useEffect dependent on hasLiked to check if they've already liked it. Allow for un-liking. Delete the like from firestore

show number of likes
