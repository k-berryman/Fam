# Fam App

I'm starting off with learning how to make an [Instagram Clone from Sonny Sangha](https://www.youtube.com/watch?v=a6Xs2Ir40OI&t=257s&ab_channel=SonnySangha) using React, Next.js, Tailwind CSS, Firebase v9, NextAuth, Faker.js & Recoil.

---

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

---

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



---
